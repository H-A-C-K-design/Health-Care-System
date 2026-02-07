const hospitals = [
  { name: "City Hospital", lat: 18.5204, lon: 73.8567, phone: "020-111111" },
  { name: "Green Care Clinic", lat: 18.5074, lon: 73.8077, phone: "020-222222" },
  { name: "LifeLine Multispecialty", lat: 18.5679, lon: 73.9143, phone: "020-333333" },
  { name: "Sunrise Hospital", lat: 18.4598, lon: 73.8673, phone: "020-444444" }
];

const locateBtn = document.getElementById("locateBtn");
const statusText = document.getElementById("status");
const hospitalList = document.getElementById("hospitalList");

locateBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    statusText.textContent = "Geolocation is not supported by your browser.";
    return;
  }

  statusText.textContent = "📍 Getting your location…";

  navigator.geolocation.getCurrentPosition(
    pos => {
      const userLat = pos.coords.latitude;
      const userLon = pos.coords.longitude;
      statusText.textContent = "Showing hospitals within 20 km";
      showHospitals(userLat, userLon);
    },
    () => {
      statusText.textContent = "Location permission denied.";
    }
  );
});

// Distance calculation (Haversine)
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function showHospitals(userLat, userLon) {
  hospitalList.innerHTML = "";

  const nearby = hospitals.filter(h => {
    h.distance = getDistance(userLat, userLon, h.lat, h.lon);
    return h.distance <= 20;
  });

  if (nearby.length === 0) {
    hospitalList.innerHTML = "<p>No hospitals found within 20 km.</p>";
    return;
  }

  nearby.sort((a, b) => a.distance - b.distance);

  nearby.forEach(h => {
    const card = document.createElement("article");
    card.innerHTML = `
      <h2>${h.name}</h2>
      <p class="distance">${h.distance.toFixed(2)} km away</p>
      <p>📞 ${h.phone}</p>
    `;
    hospitalList.appendChild(card);
  });
}
