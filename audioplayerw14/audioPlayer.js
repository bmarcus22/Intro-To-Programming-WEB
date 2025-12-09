function attachSound(imgId, soundFile) {
  const img = document.getElementById(imgId);
  const sound = new Audio(soundFile);

  img.addEventListener("click", () => {
    sound.currentTime = 0; 
    sound.play();
  });
}

attachSound("kick",  "sounds/kick-bass.mp3");
attachSound("snare", "sounds/snare.mp3");
attachSound("crash", "sounds/crash.mp3");
attachSound("tom1",  "sounds/tom-1.mp3");
attachSound("tom2",  "sounds/tom-2.mp3");
