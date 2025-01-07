let voices = [];
const textarea = document.querySelector("textarea");
let voiceSelect = document.querySelector("select");

let button = document.querySelector("button");

function populateVoiceList() {
  voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = "";

  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.setAttribute("data-name", voice.name);
    option.setAttribute("data-lang", voice.lang);
    voiceSelect.appendChild(option);
  });
}

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

const speech = new SpeechSynthesisUtterance();

button.addEventListener("click", () => {
  speech.text = textarea.value;

  const selectedVoiceName =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  const selectedVoice = voices.find(
    (voice) => voice.name === selectedVoiceName
  );

  if (selectedVoice) {
    speech.voice = selectedVoice;
  }

  window.speechSynthesis.speak(speech);
});

populateVoiceList();
