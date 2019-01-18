const btn_play = document.querySelector('.play')
const videoDom = document.querySelector('video')
const inputDom = document.querySelector('#range')
const arr = [0,1,2,3,4,5,6,7,8,9]

// 控制视频的播放
btn_play.addEventListener('click',play)
function play(){
  if(!videoDom.paused){// 检测视频是否处于暂停状态
    this.children[0].src = './播放.png'
    videoDom.pause()
  }else{
    this.children[0].src = './暂停.png'
    videoDom.play();
    const time = videoDom.duration //获取当前视频的总时长。chorme不支持视频的预加载好像。所以必须在play()函数执行后才能获取时长
    inputDom.max = time
    // 显示总的时长
    const second = time%60
    const miu = parseInt(time/60)
    document.querySelector('.endTime').innerHTML = miu+':'+second
  }
}
// 视频的时间更新事件
videoDom.addEventListener('timeupdate',changeSliderTime)
function changeSliderTime(){
  inputDom.value = videoDom.currentTime
  // 显示已播放的时长
  const miu = parseInt(inputDom.value/60)
  document.querySelector('.startTime').innerHTML = miu+':'+inputDom.value
}

// 让进度条改变视频的播放进度
inputDom.addEventListener('click',changetime)
function changetime(){
  videoDom.currentTime = this.value
}
// 控制视频停止
document.querySelector('.stop').addEventListener('click',stopPlay)
function stopPlay(){
  videoDom.pause()
  videoDom.currentTime = 0
  inputDom.value = 0
}

// 控制视频全屏
document.querySelector('.screen').addEventListener('click',fullScreen)
function fullScreen(){
  videoDom.requestFullscreen() // 全屏
}