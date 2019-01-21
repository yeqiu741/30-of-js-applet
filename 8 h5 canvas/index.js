const mycanvas = document.getElementById('myCanvas')
if(!mycanvas.getContext){
  window.alert('您的浏览器不支持canvas！')
}

let x = 0
let y = 0
let state = false
let hue = 0
let width = 100
let numState = true


const context = mycanvas.getContext('2d')
console.log(context)
mycanvas.width = window.innerWidth
mycanvas.height = window.innerHeight

context.lineJoin = 'round'; // 设置两条线条交汇时，创建圆形边角
context.lineCap = 'round'; // 设置线条的结束端点样式

function draw(e){

  // 这种画圆的方式存在一个弊端就是当鼠标移动速度过快的时候就会出现断层
  context.lineWidth = `${width}`; // 设置线条宽度
  if(!state) return;
  context.fillStyle = `hsl(${hue},100%,50%)`
  context.beginPath()
  context.arc(x,y,`${width}`,0,Math.PI*2,true)
  context.closePath()
  context.fill()
  // context.strokeStyle =`hsl(${hue}, 100%, 50%)`
  // context.beginPath()
  // console.log(x,y)
  // context.moveTo(x, y)
  // context.lineTo(e.offsetX, e.offsetY)
  // context.stroke()

  // 可以公用的代码
  x = e.offsetX
  y = e.offsetY
  hue++
  console.log(hue)
  if(width == 100 || width == 0){
    numState = !numState
  }
  if(numState == true){
    width++
  }else{
    width--
  }
}

mycanvas.addEventListener('mousedown', (e)=>{
  state = true
  x = e.offsetX
  y = e.offsetY
  console.log(x,y)
  console.log(e)
})
mycanvas.addEventListener('mousemove', draw)
mycanvas.addEventListener('mouseup', ()=> state = false)
mycanvas.addEventListener('mouseout', ()=> state = false)




























// // 画直线
// context.moveTo(0,0) // 设置起点
// context.lineTo(220,200) // 设置终点
// context.stroke() // 设置用直线填充

// // 画矩形框图（内容为空，只有边框）
// context.strokeStyle = "#00FFFF"
// context.strokeRect(0,0,100,100)

// // 画矩形框图（内容不为空）
// context.fillStyle = "red"
// context.fillRect(0,0,100,50)

// 画圆形
// context.fillStyle = "#FF00FF"
// context.beginPath();
// context.arc(50,50,50,0,Math.PI*2, true)
// context.closePath()
// context.fill();

// 缩放图形
// context.translate(200,20)
// for(let i = 1; i < 80; i++){
//   context.save();
//   context.translate(i*20,i*20)
//   context.scale(0.5,0.5)
//   context.rotate(Math.PI/12)
//   context.beginPath();
//   context.fillStyle = "red"
//   context.golbalAlpha = .1
//   context.arc(0,0,20,0,Math.PI*2,true)
//   context.closePath()
//   context.fill()
// }
