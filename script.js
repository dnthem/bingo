import { Bag } from './bag.js';
import speak from './speech.js';
const bag = new Bag();
bag.suffleBag();
const remain = document.getElementById('remain');
remain.textContent = bag.getBag().length;
const remainText = document.getElementById('remain');
const extracted = document.getElementById('extracted');
const currentNumber = document.getElementById('currentNumber');

const resetBtn = document.getElementById('reset');
const next = document.getElementById('next');
const muteBtn = document.getElementById('mute');


function handleMuteClick() {
  muteBtn.textContent = muteBtn.textContent === 'Mute' ? 'Unmute' : 'Mute';
}

muteBtn.addEventListener('click', handleMuteClick);
function handleNextClick() {
  const number = bag.getNumber();
    if (number === null) {
        currentNumber.textContent = 'No more numbers';
        return;
    }
    currentNumber.textContent = number;

    if (muteBtn.textContent === 'Mute')
      speak(number);

    remainText.textContent = bag.getBag().length;
    extracted.textContent = bag.getExtracted().join(', ');
}

function handleResetClick() {
  bag.resetBag();
  bag.suffleBag();
  remainText.textContent = bag.getBag().length;
  extracted.textContent = '';
  currentNumber.textContent = '-1';
}
resetBtn.addEventListener('click', handleResetClick);

next.addEventListener('click', handleNextClick);


window.addEventListener('keydown', (e) => {
  if (e.key === 'Spacebar') {
    handleNextClick();
  }
});
