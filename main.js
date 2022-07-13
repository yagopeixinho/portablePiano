const keys = document.querySelectorAll(".key");

function playNote(ev) {
  let audioKeyCode = getKeyCode(ev);

  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

  const isKeyExist = key;

  if (!isKeyExist) {
    return;
  }

  addPlayingClass(key);
  playAudio(audioKeyCode);
}

function addPlayingClass(key) {
  key.classList.add("playing");
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}

function getKeyCode(ev) {
  let keyCode;

  const isKeyboard = ev.type === "keydown";
  if (isKeyboard) {
    keyCode = ev.keyCode;
  } else {
    keyCode = ev.target.dataset.key;
  }

  return keyCode;
}

function removePlayingClass(ev) {
  ev.target.classList.remove("playing");
}

keys.forEach((key) => {
  key.addEventListener("click", playNote);
  key.addEventListener("transitionend", removePlayingClass);
});
window.addEventListener("keydown", playNote);
