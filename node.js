function sendMessage() {
  let input = document.getElementById("userInput");
  let message = input.value.toLowerCase();
  if (message === "") return;

  addMessage(message, "user-message");
  input.value = "";

  setTimeout(() => {
    let reply = getHealthResponse(message);
    addMessage(reply, "bot-message");
  }, 600);
}

function addMessage(text, className) {
  let chatBox = document.getElementById("chatBox");
  let div = document.createElement("div");
  div.className = className;
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getHealthResponse(msg) {

  if (msg.includes("fever")) {
    return "🤒 Fever can be caused by infection. Drink fluids, rest well, and consult a doctor if temperature is above 102°F.";
  }

  if (msg.includes("headache")) {
    return "🤕 Headaches may be due to stress or dehydration. Try resting and drinking water. Seek medical help if severe.";
  }

  if (msg.includes("cold") || msg.includes("cough")) {
    return "🤧 Cold and cough are common. Warm fluids and rest help. If symptoms last more than 5 days, consult a doctor.";
  }

  if (msg.includes("diabetes")) {
    return "🩸 Diabetes requires blood sugar monitoring, healthy diet, and regular exercise. Always follow your doctor’s advice.";
  }

  if (msg.includes("heart")) {
    return "❤️ Heart health is important. Avoid smoking, eat healthy, exercise regularly, and manage stress.";
  }

  if (msg.includes("emergency")) {
    return "🚨 In case of emergency, please contact the nearest hospital or call your local emergency number immediately.";
  }

  if (msg.includes("medicine")) {
    return "💊 Never take medicines without consulting a doctor. Wrong dosage can be harmful.";
  }

  return "⚠️ I am not a doctor, but I recommend consulting a healthcare professional for accurate diagnosis.";
}
