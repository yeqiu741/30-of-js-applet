const videDom = document.querySelector('video')
const btnDom = document.querySelector('button')
const imgDom = document.querySelector('img')
// 获取媒体权限
// navigator.getUserMedia 浏览器会在首次执行代码时询问是否授权使用媒体，此种写法已经在web标准中删除需要做好兼容。改为了 navigator.MdeiaDevices.getUserMedia
navigator.getMedia = navigator.getUserMedia || 
                          navigator.webkitGetUserMedia || 
                          navigator.ozGetUserMedia || 
                          navigator.msGetUserMedia;  
// window.URL.createObjectURL()预览本地图像或视频
vendorURL = window.URL || window.webkitURL || window.mozURL || window.msURL;

// 进行预览
navigator.getMedia({
  video: true
},function(strem){
  console.log(strem)
  videDom.src = vendorURL.createObjectURL(strem)
  videDom.play()
},function(err){
  console.log(err)
})

// 基于promise的写法，也是推荐的一种写法.但是兼容方面还有问题。
/* 
navigator.getMesia({
  video: true
}).then((stream)=>{
  console.log(stream)
  videoDom.src = vendorUrl.createObjectURL(stream)
  videoDom.play()
}).catch((err)=>{
  console.log(err)
})
*/

btnDom.addEventListener('click', getphotos)

function getphotos(){
  canvas.getContext('2d').drawImage(videDom, 0, 0, 400, 300);
  imgDom.src = canvas.toDataURL('image/png');

}
