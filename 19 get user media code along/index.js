// 获取媒体权限
navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.mediaDevices.webkitGetUserMedia || navigator.mediaDevices.mozGetUserMedia || navigator.mediaDevices.msGetUserMedia;  
window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
const videDom = document.querySelector('video')
// 浏览器会询问是否授权使用媒体
// navigator.mediaDevices.getUserMedia