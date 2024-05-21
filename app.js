// controll music function

const music = new Audio("audio/1.mp3");
// music.play();

// left and Right button Functionality Perform

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

const songs = [
//   {
//     id: 1,
//     songName: `
//         On My Way <br />
//         <div class="subtitle">Alan Walker</div>`,
//         poster : "img/1.jpg"
//   },
//   {
//     id: 2,
//     songName: `
//         Alan walker Fade <br />
//         <div class="subtitle">Alan Walker</div>`,
//         poster : "img/2.jpg"
//   },
//   {
//     id: 3,
//     songName: `
//         Cartoon On & On <br />
//         <div class="subtitle">Alan Guru</div>`,
//         poster : "img/3.jpg"
//   },
//   {
//     id: 4,
//     songName: `
//         Tum He Ho <br />
//         <div class="subtitle">Atif Aslam</div>`,
//         poster : "img/4.jpg"
//   },
//   {
//     id: 5,
//     songName: `
//         Kalla <br />
//         <div class="subtitle">Rehmani Guru</div>`,
//         poster : "img/5.jpg"
//   },
//   {
//     id: 6,
//     songName: `
//         Tussan Janna <br />
//         <div class="subtitle">Merra Bhai</div>`,
//         poster : "img/6.jpg"
//   },
//   {
//     id: 7,
//     songName: `
//         Guddu Bhai <br />
//         <div class="subtitle">Nothing Singer</div>`,
//         poster : "img/7.jpg"
//   },
//   {
//     id: 8,
//     songName: `
//         Kalli Linux <br />
//         <div class="subtitle">Guru Randawa</div>`,
//         poster : "img/8.jpg"
//   },
//   {
//     id: 9,
//     songName: `
//         Nachly Billo <br />
//         <div class="subtitle">Q Nachan Billi</div>`,
//         poster : "img/9.jpg"
//   },
//   {
//     id: 10,
//     songName: `
//         Sonu Monu <br />
//         <div class="subtitle">Sonu Nigham</div>`,
//         poster : "img/10.jpg"
//   },
//   {
//     id: 11,
//     songName: `
//         Oyee Hoyee <br />
//         <div class="subtitle">Chahat Fateh Ali Khan</div>`,
//         poster : "img/11.jpg"
//   },
//   {
//     id: 12,
//     songName: `
//         Nachi Ty Phassi <br />
//         <div class="subtitle">Paki Munda</div>`,
//         poster : "img/12.jpg"
//   },
//   {
//     id: 13,
//     songName: `
//         Dill Dian Gallan <br />
//         <div class="subtitle">Karran Gy Naal</div>`,
//         poster : "img/13.jpg"
//   },
//   {
//     id: 14,
//     songName: `
//         Lotta Lotta <br />
//         <div class="subtitle">Boom Boom</div>`,
//         poster : "img/14.jpg"
//   },
//   {
//     id: 15,
//     songName: `
//         Chotta Lotta <br />
//         <div class="subtitle">Large Lotta</div>`,
//         poster : "img/15.jpg"
//   },
//   {
//     id: 16,
//     songName: `
//         Dancing Boys <br />
//         <div class="subtitle">Kon Hai Wo</div>`,
//         poster : "img/16.jpg"
//   },
//   {
//     id: 17,
//     songName: `
//         Nai Patta G <br />
//         <div class="subtitle">Hayee Oyee</div>`,
//         poster : "img/17.jpg"
//   },
//   {
//     id: 18,
//     songName: `
//         Na Kr Yaar <br />
//         <div class="subtitle">Merra Piyare</div>`,
//         poster : "img/18.jpg"
//   },
//   {
//     id: 19,
//     songName: `
//         Pakka Walla <br />
//         <div class="subtitle">Dum Dum</div>`,
//         poster : "img/19.jpg"
//   },
//   {
//     id: 20,
//     songName: `
//         Na karso <br />
//         <div class="subtitle">Kian Na Karsan</div>`,
//         poster : "img/20.jpg"
//   },
//   {
//     id: 21,
//     songName: `
//         Nass Kurri <br />
//         <div class="subtitle">Kian Nassan Ma </div>`,
//         poster : "img/21.jpg"
//   },
//   {
//     id: 22,
//     songName: `
//         Ja Tujy Maaf Kia <br />
//         <div class="subtitle">Na Krr Maaf </div>`,
//         poster : "img/22.jpg"
//   },
//   {
//     id: 23,
//     songName: `
//         Hun Na Bollen <br />
//         <div class="subtitle">Bollsan Ma </div>`,
//         poster : "img/23.jpg"
//   },
//   {
//     id: 24,
//     songName: `
//         Wadda Ve Paoo <br />
//         <div class="subtitle">Chotta Ve Paoo </div>`,
//         poster : "img/24.jpg"
//   },
//   {
//     id: 25,
//     songName: `
//         Sarry Mill Ka Paoo <br />
//         <div class="subtitle">Khushi Manaoo </div>`,
//         poster : "img/25.jpg"
//   },
//   {
//     id: 26,
//     songName: `
//         Barra Mazza Aayeh <br />
//         <div class="subtitle">Zaroor Ahey Ga </div>`,
//         poster : "img/26.jpg"
//   },
//   {
//     id: 27,
//     songName: `
//         Aana Be Chahia <br />
//         <div class="subtitle">Ahey Ga Be </div>`,
//         poster : "img/27.jpg"
//   },
//   {
//     id: 28,
//     songName: `
//         Nach Ballia <br />
//         <div class="subtitle">Zaroor Janu </div>`,
//         poster : "img/28.jpg"
//   },
//   {
//     id: 29,
//     songName: `
//         Hachu Hachi <br />
//         <div class="subtitle">Sachi Sachi </div>`,
//         poster : "img/29.jpg"
//   },
//   {
//     id: 30,
//     songName: `
//         Mikki Na Akho <br />
//         <div class="subtitle">Ussi Akho</div>`,
//         poster : "img/26.jpg"
//   },
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


// Fetch Local Data
Array.from(document.getElementsByClassName('songItem')).forEach((e , i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
})
