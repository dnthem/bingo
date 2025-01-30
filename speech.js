const synth = window.speechSynthesis;

function speak (text) {
  const utterThis = new SpeechSynthesisUtterance(text);
  synth.speak(utterThis);
}

export default speak;