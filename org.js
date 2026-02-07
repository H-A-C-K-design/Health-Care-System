const patient = {
    name: "Durgesh Gaikwad",
    age: 19,
    gender: "Male",
    blood: "B+",
    contact: "+91 9028613638",
    heartRate: 72,
    bloodPressure: "120 / 80",
    reports: 5,
    status: "Stable"
};

// Generate Patient ID
document.getElementById("pid").textContent =
    "PT-" + Math.floor(10000 + Math.random() * 90000);

// Load Data
document.getElementById("name").textContent = patient.name;
document.getElementById("age").textContent = patient.age;
document.getElementById("gender").textContent = patient.gender;
document.getElementById("blood").textContent = patient.blood;
document.getElementById("contact").textContent = patient.contact;

// Animate Counters
function animateValue(id, start, end, speed) {
    let value = start;
    const interval = setInterval(() => {
        value++;
        document.getElementById(id).textContent = value;
        if (value >= end) clearInterval(interval);
    }, speed);
}

animateValue("heart", 60, patient.heartRate, 30);
animateValue("reports", 0, patient.reports, 200);

document.getElementById("bp").textContent = patient.bloodPressure;
document.getElementById("status").textContent = patient.status;

// Status color logic
const statusEl = document.getElementById("status");
if (patient.status === "Stable") statusEl.style.color = "#00ff88";
else statusEl.style.color = "#ff4d4d";
