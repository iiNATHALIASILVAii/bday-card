document.addEventListener("DOMContentLoaded", function () {
  const songs = [
    { title: "Pump Up The Jam", src: "musicas/Pump Up The Jam.mp3" },
    { title: "Nothing Beats a Jet2holiday", src: "musicas/Nothing Beats a Jet2holiday.mp3",},
    { title: "Epic Sax Guy Loop", src: "musicas/Epic Sax Guy Loop.mp3" },
    { title: "HEYYEYAAEYAAAEYAEYAA", src: "musicas/HEYYEYAAEYAAAEYAEYAA.mp3" },
    { title: "Solo Envolvente", src: "musicas/Solo Envolvente.mp3" },
  ];

  let currentSongIndex = 0;
  const audio = new Audio(songs[currentSongIndex].src);
  const playBtn = document.getElementById("play");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const songTitle = document.getElementById("song-title");
  const progressFill = document.getElementById("real-progress");

  let isPlaying = false;

  function playSong() {
    audio.play();
    isPlaying = true;
    playBtn.innerHTML = "⏸";
  }

  function pauseSong() {
    audio.pause();
    isPlaying = false;
    playBtn.innerHTML = "▶";
  }

  function loadSong(index) {
    audio.src = songs[index].src;
    songTitle.textContent = songs[index].title;
    playSong();
  }

  playBtn.addEventListener("click", () => {
    isPlaying ? pauseSong() : playSong();
  });

  prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
  });

  audio.addEventListener("ended", () => {
    nextBtn.click();
  });

  audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressFill.style.width = progress + "%";
    }
  });

  loadSong(currentSongIndex);
});
