// controll music function

const music = new Audio("audio/1.mp3");
// music.play();

// left and Right button Functionality Perform

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];
let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");
let download_music = document.getElementById("download_music");
let shuffle = document.getElementsByClassName("shuffle")[0];

// Add Next & Back Button Functionality
let back = document.getElementById("back");
let next = document.getElementById("next");

// index = Array.from(document.getElementsByClassName('songItem')).length;
// console.log(index);

// Volume Change Functionality
let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

// Seek dot Functionality
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

// Add Start And End Time Seakbar Functionality
let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");

// Background Song Hover Functionality Add
const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
    el.style.background = `rgb(105 , 105 , 105 , .0)`;
  });
};

// PlayList Play Button Functionality
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
    el.classList.add("bi-play-circle-fill");
    el.classList.remove("bi-pause-circle-fill");
  });
};

let index = 0;

const songs = [
  {
    id: 1,
    songName: `
    Mikki Na Akho Koi  <br />
        <div class="subtitle">Gurru Kirra </div>`,
    poster: "img/arjit/1.jpg",
  },
  {
    id: 2,
    songName: `
        Alan walker Fade <br />
        <div class="subtitle">Alan Walker</div>`,
    poster: "img/arjit/2.jpg",
  },
  {
    id: 3,
    songName: `
        Cartoon On & On <br />
        <div class="subtitle">Alan Guru</div>`,
    poster: "img/arjit/3.jpg",
  },
  {
    id: 4,
    songName: `
         On My Way <br />
        <div class="subtitle">Alan Walker</div>`,
    poster: "img/arjit/4.jpg",
  },
  {
    id: 5,
    songName: `
        Kalli Gaddi <br />
        <div class="subtitle">Rehmani Guru</div>`,
    poster: "img/arjit/5.jpg",
  },
  {
    id: 6,
    songName: `
        Tussan Janna Billo Ny <br />
        <div class="subtitle">Merra Bhai</div>`,
    poster: "img/arjit/6.jpg",
  },
  {
    id: 7,
    songName: `
        Guddu Bhai Hai Na <br />
        <div class="subtitle">Nothing Singer</div>`,
    poster: "img/arjit/7.jpg",
  },
  {
    id: 8,
    songName: `
        Kalli Linux Q Nai <br />
        <div class="subtitle">Guru Randawa</div>`,
    poster: "img/arjit/8.jpg",
  },
  {
    id: 9,
    songName: `
        Nachly Billo Nachly <br />
        <div class="subtitle">Q Nachan Billi</div>`,
    poster: "img/arjit/9.jpg",
  },
  {
    id: 10,
    songName: `
        Sonu Monu Shoni Monni <br />
        <div class="subtitle">Sonu Nigham</div>`,
    poster: "img/arjit/10.jpg",
  },
  {
    id: 11,
    songName: `
        Oyee Hoyee Lotta Lotta <br />
        <div class="subtitle">Chahat Fateh Ali Khan</div>`,
    poster: "img/arjit/11.jpg",
  },
  {
    id: 12,
    songName: `
        Nachi Ty Phassi Oeee <br />
        <div class="subtitle">Paki Munda</div>`,
    poster: "img/arjit/12.jpg",
  },
  {
    id: 13,
    songName: `
        Dill Dian Gallan Karan Gy <br />
        <div class="subtitle">Karran Gy Naal</div>`,
    poster: "img/arjit/13.jpg",
  },
  {
    id: 14,
    songName: `
        Lotta Lotta Bum Bum <br />
        <div class="subtitle">Boom Boom</div>`,
    poster: "img/arjit/14.jpg",
  },
  {
    id: 15,
    songName: `
        Chotta Lotta Barra Lotta <br />
        <div class="subtitle">Large Lotta</div>`,
    poster: "img/arjit/15.jpg",
  },
  {
    id: 16,
    songName: `
        Dancing Boys & Girls <br />
        <div class="subtitle">Kon Hai Wo</div>`,
    poster: "img/arjit/16.jpg",
  },
  {
    id: 17,
    songName: `
        Nai Patta G Tussan Ki <br />
        <div class="subtitle">Hayee Oyee</div>`,
    poster: "img/arjit/17.jpg",
  },
  {
    id: 18,
    songName: `
        Na Kr Yaar Ve <br />
        <div class="subtitle">Merra Piyare</div>`,
    poster: "img/arjit/18.jpg",
  },
  {
    id: 19,
    songName: `
        Pakka Walla Oyee <br />
        <div class="subtitle">Dum Dum</div>`,
    poster: "img/arjit/19.jpg",
  },
  {
    id: 20,
    songName: `
        Na karso GGG <br />
        <div class="subtitle">Kian Na Karsan</div>`,
    poster: "img/arjit/20.jpg",
  },
  {
    id: 21,
    songName: `
        Nass Kurri Nass <br />
        <div class="subtitle">Kian Nassan Ma </div>`,
    poster: "img/arjit/21.jpg",
  },
  {
    id: 22,
    songName: `
        Ja Tujy Maaf Kia Rami <br />
        <div class="subtitle">Na Krr Maaf </div>`,
    poster: "img/arjit/22.jpg",
  },
  {
    id: 23,
    songName: `
        Hun Na Bollen Oeee <br />
        <div class="subtitle">Bollsan Ma </div>`,
    poster: "img/arjit/23.jpg",
  },
  {
    id: 24,
    songName: `
        Wadda Ve Paoo Chotta Ve Paoo <br />
        <div class="subtitle">Chotta Ve Paoo </div>`,
    poster: "img/arjit/24.jpg",
  },
  {
    id: 25,
    songName: `
        Sarry Mill Ka Paoo Lagoo <br />
        <div class="subtitle">Khushi Manaoo </div>`,
    poster: "img/arjit/25.jpg",
  },
  {
    id: 26,
    songName: `
        Barra Mazza Aayeh Ga <br />
        <div class="subtitle">Zaroor Ahey Ga </div>`,
    poster: "img/arjit/26.jpg",
  },
  {
    id: 27,
    songName: `
        Aana Be Chahia Naaa <br />
        <div class="subtitle">Ahey Ga Be </div>`,
    poster: "img/arjit/27.jpg",
  },
  {
    id: 28,
    songName: `
        Nach Ballia Nachi Na Zarra <br />
        <div class="subtitle">Zaroor Janu </div>`,
    poster: "img/arjit/28.jpg",
  },
  {
    id: 29,
    songName: `
        Hachu Hachi Hachi <br />
        <div class="subtitle">Sachi Sachi </div>`,
    poster: "img/arjit/29.jpg",
  },
  {
    id: 30,
    songName: `
        Badoo Baddi <br />
        <div class="subtitle">Chahat Fateh Ali Khan</div>`,
    poster: "img/arjit/30.jpg",
  },
];

//  Left Right Song Button Function
pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let Artists_bx = document.getElementsByClassName("Artists_bx")[0];

//  Left Right Artists Button Function
pop_art_right.addEventListener("click", () => {
  Artists_bx.scrollLeft += 330;
});

pop_art_left.addEventListener("click", () => {
  Artists_bx.scrollLeft -= 330;
});

// Fetch Poster Image and Poster Title in Local Data
Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

// Play Button Functionality
masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
  }
});

// Playlist & PosterFunctionality Add

Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    // console.log(index);
    music.src = `audio/arjit/${index}.mp3`;
    poster_master_play.src = `img/arjit/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    // Download Song Functionality
    download_music.href = `audio/arjit/${index}.mp3`;

    //  Title Fetching

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    // Song Title Fetching Functionality

    songTitles.forEach((elss) => {
      // let { songName , poster } = elss;
      let { songName } = elss;

      title.innerHTML = songName;
      // poster_master_play.src = poster;

      // Download Song Functionality
      download_music.setAttribute("download", songName);
    });

    // Background Functionality
    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105 , 105 , 105 , .1)";
    makeAllPlays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");
  });
});

// Add Start And End Time Seakbar Functionality
music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  // console.log(music_curr);
  // console.log(music_dur);

  // Math.floor() mean point ka agey walli value ni chahian
  // Current & End Time Setting

  let min1 = Math.floor(music_dur / 60); /**{Min Value} */
  let sec1 = Math.floor(music_dur % 60); /**{Sec Value} */

  // console.log(min1);
  // console.log(sec1);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }

  // Current & End Time Setting
  currentEnd.innerText = `${min1}:${sec1}`;

  // Current & End Time Setting
  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);

  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }

  // Current & End Time Setting
  currentStart.innerText = `${min2}:${sec2}`;

  //Add Seek Bar Functionality

  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;
  // console.log(seek.value);

  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

// Change Seek Bar According to click Functionality
seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

// volume Button Functionality

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }

  // Volume Functionality Add

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

// Add Next & Back Button Functionality

// Back Button Functionality

back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
  }

  music.src = `audio/arjit/${index}.mp3`;
  poster_master_play.src = `img/arjit/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  //  Title Fetching

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  // Song Title Fetching Functionality

  songTitles.forEach((elss) => {
    // let { songName , poster } = elss;
    let { songName } = elss;

    title.innerHTML = songName;
    // poster_master_play.src = poster;
  });

  // Background Functionality
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105 , 105 , 105 , .1)";
  makeAllPlays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
});

// Next Button Functionality

next.addEventListener("click", () => {
  index++;
  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1;
  }

  music.src = `audio/arjit/${index}.mp3`;
  poster_master_play.src = `img/arjit/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  //  Title Fetching

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  // Song Title Fetching Functionality

  songTitles.forEach((elss) => {
    // let { songName , poster } = elss;
    let { songName } = elss;

    title.innerHTML = songName;
    // poster_master_play.src = poster;
  });

  // Background Functionality
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105 , 105 , 105 , .1)";
  makeAllPlays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
});

// Shuffle Button Active Functionality

shuffle.addEventListener("click", () => {
  let a = shuffle.innerHTML;

  switch (a) {
    case "next":
      shuffle.classList.add("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "repeat";
      break;

    case "repeat":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.add("bi-shuffle");
      shuffle.innerHTML = "random";
      break;

    case "random":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.add("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "next";
      break;
  }
});

//  Shuffle Next Button Functionality Add

const next_music = () => {
  if (index == songs.length) {
    index = 1;
  } else {
    index++;
  }
  music.src = `audio/arijit/${index}.mp3`;
  poster_master_play.src = `img/arijit/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  // Download Song Functionality
  download_music.href = `audio/arijit/${index}.mp3`;

  //  Title Fetching

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  // Song Title Fetching Functionality

  songTitles.forEach((elss) => {
    // let { songName , poster } = elss;
    let { songName } = elss;

    title.innerHTML = songName;
    // poster_master_play.src = poster;

    // Download Song Functionality
    download_music.setAttribute("download", songName);
  });

  // Background Functionality
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105 , 105 , 105 , .1)";
  makeAllPlays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
  wave.classList.add("active1");
};

//  Music Repeat Button Functionality
const repeat_music = () => {
  index;
  music.src = `audio/arijit/${index}.mp3`;
  poster_master_play.src = `img/arijit/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  // Download Song Functionality
  download_music.href = `audio/arijit/${index}.mp3`;

  //  Title Fetching

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  // Song Title Fetching Functionality

  songTitles.forEach((elss) => {
    // let { songName , poster } = elss;
    let { songName } = elss;

    title.innerHTML = songName;
    // poster_master_play.src = poster;

    // Download Song Functionality
    download_music.setAttribute("download", songName);
  });

  // Background Functionality
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105 , 105 , 105 , .1)";
  makeAllPlays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
  wave.classList.add("active1");
};

// Random Button Music functionality

const random_music = () => {
  if (index == songs.length) {
    index = 1;
  } else {
    index = Math.floor(Math.random() * songs.length + 1);
  }
  music.src = `audio/arijit/${index}.mp3`;
  poster_master_play.src = `img/arijit/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  // Download Song Functionality
  download_music.href = `audio/arijit/${index}.mp3`;

  //  Title Fetching

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  // Song Title Fetching Functionality

  songTitles.forEach((elss) => {
    // let { songName , poster } = elss;
    let { songName } = elss;

    title.innerHTML = songName;
    // poster_master_play.src = poster;

    // Download Song Functionality
    download_music.setAttribute("download", songName);
  });

  // Background Functionality
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105 , 105 , 105 , .1)";
  makeAllPlays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
  wave.classList.add("active1");
};

// Music Ended Functionality

music.addEventListener("ended", () => {
  let b = shuffle.innerHTML;

  switch (b) {
    case "repeat":
      repeat_music();
      break;

    case "next":
      next_music();
      break;

    case "random":
      random_music();
      break;
  }
});
