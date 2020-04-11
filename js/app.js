$(function() {
  $("body").removeClass("fade-out");
});

/*Playlist*/

const menu = document.querySelector(".burger");
const playlist = document.querySelector(".playlist");
const back = document.querySelector(".back");

menu.onclick = () => playlist.classList.add("isOpen");
back.onclick = () => playlist.classList.remove("isOpen");

const songs = document.querySelectorAll(".song-title");
const playerTitle = document.querySelector(".title");

songs.forEach(
  song =>
    (song.onclick = e => {
      playerTitle.textContent = e.target.textContent;
      playlist.classList.remove("isOpen");
    })
);

/*Volume*/

$("#volume").slider({
  min: 0,
  max: 100,
  value: 75,
  range: "min",
  slide: function(event, ui) {
    setVolume(ui.value / 100);
  }
});

var myMedia = document.createElement("audio");
$(".player-bottom").append(myMedia);
myMedia.id = "myMedia";

function setVolume(myVolume) {
  var myMedia = document.getElementById("myMedia");
  myMedia.volume = myVolume;
}

/*Playback*/

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");

play.onclick = () => {
  play.style.visibility = "hidden";
  pause.style.visibility = "visible";
};

pause.onclick = () => {
  play.style.visibility = "visible";
  pause.style.visibility = "hidden";
};

const titles = [
  "Still Don't Know",
  "I Love It",
  "Girlfriend",
  "We Got the World",
  "Nights Like This"
];

let current = 0;

playerTitle.innerText = titles[current];

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.onclick = () => {
  if (current == 0) {
    current = titles.length - 1;
  } else {
    current--;
  }
  playerTitle.innerText = titles[current];
};

next.onclick = () => {
  if (current == titles.length - 1) {
    current = 0;
  } else {
    current++;
  }
  playerTitle.innerText = titles[current];
};
