'use strict';

const container = document.querySelector('.container')

const musicArtist = document.querySelector('.music-artist');
const musicImage = document.getElementById('music-img')
const musicTitle = document.querySelector('.title');

const replayBtn = document.getElementById('replay');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playPauseBtn = document.querySelector('.play-pause')
const playlist = document.getElementById('playlist');
const mainAudio = document.getElementById('main-audio');

const volumeChanger = document.getElementById('volume');

const progressBar = document.querySelector('.progress-bar');

const currentTime = document.querySelector('.current-point');
const durationTime = document.querySelector('.duration')



let playList = [{
        name: 'venom',
        artist: 'eminem',
        img: 'https://www.picclickimg.com/d/l400/pict/173681075868_/E-73-Art-Eminem-Venom-Single-Soundtrack-New-2018.jpg',
        src: 'music-1'
    },
    {
        name: 'numb',
        artist: 'xxx tentacion',
        img: 'https://ts5.tarafdari.com/contents/user698177/content-sound/cefcf70065cf258281a354367542be42.300x300x1.jpg',
        src: 'music-2'
    },
    {
        name: 'DNA',
        artist: 'kendrick lamar',
        img: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/04/a2/2e/04a22e49-4716-9a1b-5fdc-a328d0b80daf/00602557608717.rgb.jpg/400x400bb.jpg',
        src: 'music-3'
    }
]

let musicIndex = 0;

const setMusic = function () {
    musicArtist.textContent = playList[musicIndex].artist;
    musicTitle.textContent = playList[musicIndex].name;
    musicImage.src = playList[musicIndex].img;
    mainAudio.src = `musics/${playList[musicIndex].src}.mp3`;
}

const playMusic = function () {

    playPauseBtn.classList.replace('fa-play-circle', 'fa-pause-circle')
    container.classList.remove('paused');
    mainAudio.play();
}

const pauseMusic = function () {
    playPauseBtn.classList.replace('fa-pause-circle', 'fa-play-circle')
    container.classList.add('paused');
    mainAudio.pause()
}

const prevMusic = function () {
    musicIndex--;
    if (musicIndex < 0) {
        musicIndex = playList.length - 1
    }
    setMusic();
    playMusic()

}

const nextMusic = function () {
    musicIndex++;
    if (musicIndex >= playList.length) {
        musicIndex = 0
    }
    setMusic()
    playMusic();
}

const playPause = function () {
    console.log('jhhgbhb')
    const isMusicPaused = container.classList.contains('paused');
    if (isMusicPaused) {
        playMusic()
    } else {
        pauseMusic()
    }

}


window.addEventListener('load', () => {
    setMusic();
    playPause();
})
prevBtn.addEventListener('click', prevMusic);
nextBtn.addEventListener('click', nextMusic);
playPauseBtn.addEventListener('click', playPause);



mainAudio.addEventListener('timeupdate', function (e) {

    const currentTimee = e.target.currentTime;
    const duration = e.target.duration;

    let progressBarWidth = (currentTimee / duration) * 100;

    progressBar.style.width = `${progressBarWidth}%`
    currentTime.textContent = (currentTimee / 60).toFixed(2).replace('.', ':')
    if (currentTime === durationTime) {
        console.log('true')
    }
})

mainAudio.addEventListener('loadeddata', function () {
    let audioDuration = mainAudio.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalSec = String(Math.floor(audioDuration % 60)).padStart(2, '0');
    console.log(totalSec)
    durationTime.textContent = `${totalMin}:${totalSec}`
    // currentTime.textContent = currentTimeMusic

})
//change detection
//ng zone
// services معماری

progressBar.addEventListener('click', function (e) {
    let progressBarWidthValue = progressBar.clientWidth;
    let clickOffsetX = e.offsetX;
    let songDuration = mainAudio.duration
    console.log(songDuration)
})