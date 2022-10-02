songList =[
    {
        songsrc:"./songs/faded.mp3",
        imgsrc :"./images/cover img/faded.jpg",
        songname:"Faded"
    },
    {
        songsrc:"./songs/Arabic Kuthu.mp3",
        imgsrc :"./images/cover img/arebic kuthu.jpg",
        songname:"Arabic Kuthu"
    },
    {
        songsrc:"./songs/chogada.mp3",
        imgsrc :"./images/cover img/chogada.jpg",
        songname:"Chogada"
    },
    {
        songsrc:"./songs/Go-Down-Deh.mp3",
        imgsrc :"./images/cover img/go down deh.jpg",
        songname:"Go Down Deh"
    },
    {
        songsrc:"./songs/Jump Kar.mp3",
        imgsrc :"./images/cover img/jump kar.jpg",
        songname:"Jump Kar"
    },
    {
        songsrc:"./songs/Brown Munde.mp3",
        imgsrc :"./images/cover img/brown munde.jpg",
        songname:"Brown Munde"
    },
    {
        songsrc:"./songs/On-My-Way.mp3",
        imgsrc :"./images/cover img/on my way.jpg",
        songname:"On My Way"
    },
    {
        songsrc:"./songs/Pasoori.mp3",
        imgsrc :"./images/cover img/Pasoori.jpg",
        songname:"Pasoori"
    },
]

let masterPlay = document.getElementById("master-play");
let progressBar = document.getElementById("progress-bar");
let bottomSongName = document.getElementById("song-name");
let coverImg = document.getElementById("now-playing-img");
let bottomImg = document.getElementById("now-playing-img-2");
let audio = new Audio();
let state = "paused";

//loading all songs
function loadSongs(){
    Array.from(document.getElementsByClassName("song-item")).forEach((element,i) => {
        element.firstElementChild.src = songList[i].imgsrc;
    });
}
loadSongs();

// playing song by clicking on them
Array.from(document.getElementsByClassName("song-item")).forEach((element,i) => {
    element.addEventListener("click",()=>{
        audio.pause();
        audio= new Audio(songList[i].songsrc);
        masterPlay.classList.remove("fa-play-circle-o");
        masterPlay.classList.add("fa-pause-circle-o");
        audio.play();
        state="playing";
        coverImg.src=songList[i].imgsrc;
        bottomImg.src=songList[i].imgsrc;
        bottomSongName.innerHTML=songList[i].songname;;
    })
});

//updating progressbar
// audio.addEventListener("timeupdate",()=>{
//     let progress = parseInt((audio.currentTime/audio.duration)*100);
//     console.log(progress);
// })

// play pause logic
masterPlay.addEventListener("click",()=>{
    if(state=="paused"){
        masterPlay.classList.remove("fa-play-circle-o");
        masterPlay.classList.add("fa-pause-circle-o");
        state="playing";
        audio.play();
    }
    else{
        masterPlay.classList.remove("fa-pause-circle-o");
        masterPlay.classList.add("fa-play-circle-o");
        state = "paused"
        audio.pause();
    }
})

