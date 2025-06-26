console.log("Welcome To Sync");
let songIndex=0;
let audioelement=new Audio('songs/1.mp3');
let gif=document.getElementById('gif');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let mastersongname=document.getElementById('mastersongname');
let songs=[
    {songName:"Gaaju Bomma",filepath:"songs/0.mp3",coverPath:"covers/img.jpg"},
    {songName:"My Love Is Gone",filepath:"songs/1.mp3",coverPath:"covers/aarya.png"},
]

songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;

})
// audioelement.play()
// handle play/pause click
masterplay.addEventListener('click',()=>{
    if (audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle'); 
        gif.style.opacity=0;
    }
})
//listen to events
audioelement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value * audioelement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src=`songs/${songIndex}.mp3`;
        mastersongname.innerText=songs[songIndex].songName;
        audioelement.currentTime=0;
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=1)
    {
        songIndex=0;
    }
    else
    {
        songIndex+=1;
    }
    mastersongname.innerText=songs[songIndex].songName;
    audioelement.src=`songs/${songIndex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=songs.length-1;
    }
    else
    {
        songIndex-=1;
    }
    mastersongname.innerText=songs[songIndex].songName;
    audioelement.src=`songs/${songIndex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})