const  video  = document.getElementById('video');
   
const playbtn = document.getElementById("play");
const stopbtn = document.getElementById("stop");
const currTime = document.getElementById("timestamp");
const progress = document.getElementById("progress"); 


video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
// update play/pause icon

video.onclick = function(){
    if(video.paused)
    video.play();
    else
    video.pause();
}

playbtn.onclick = function(){
    //判断是否处于播放状态，是,就暂停，更换成暂停的图片
    if (video.paused) {
        video.play();
         play.innerHTML  =  '<i  class="fa  fa-play  fa-2x"></i>';
    }else{
        video.pause();
        play.innerHTML  =  '<i  class="fa  fa-pause  fa-2x"></i>';
    }
}
stopbtn.onclick = function(){
  video.pause(); 
   video.currentTime = 0;
}



video.ontimeupdate = function(){
    //获取当前时间
    var cTime = video.currentTime;
    //计算出视频的总时长
    var tTime = video.duration;
    //转换时长
    var m = Math.floor(cTime%3600/60);
    var s = Math.floor(cTime%60);
    //转换格式  
    m = m>=10?m:"0"+m;
    s = s>=10?s:"0"+s;
    //在页面上显示
    currTime.innerHTML = m+":"+s;

progress.value = (cTime/tTime)*100;

    //当播放完毕之后，播放暂停按钮要转换成暂停按钮
    if (cTime===tTime) {
        playbtn.classList.replace  ('fa  fa-pause  fa-2x','fa  fa-play  fa-2x');
    }
    
}


function updatePlayIcon() {
 
    if (video.paused) {
    play.innerHTML  =  '<i  class="fa  fa-play  fa-2x"></i>';
    } else {
    play.innerHTML  =  '<i  class="fa  fa-pause  fa-2x"></i>';
    }
    }

    
    