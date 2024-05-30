const keySoundMap = {
  w: "crash",
  a: "kick-bass",
  s: "snare",
  d: "tom-1",
  j: "tom-2",
  k: "tom-3",
  l: "tom-4",
};

// Function to play drum sound
function playDrumSound(sound) {
  const audio = new Audio(`./sounds/${sound}.mp3`);
  audio.play();
}

// Event listener for keyboard keydown event
document.addEventListener("keydown", (event) => {
  const keyPressed = event.key.toLowerCase();
  if (keySoundMap[keyPressed]) {
    const sound = keySoundMap[keyPressed];
    playDrumSound(sound);
  }
});

// Event listeners for button click events
document.querySelectorAll(".drum").forEach((button) => {
  button.addEventListener("click", () => {
    const sound = button.dataset.sound;
    playDrumSound(sound);
  });
});
