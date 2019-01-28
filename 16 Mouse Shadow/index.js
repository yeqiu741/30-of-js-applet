const hDom = document.querySelector('h1')
console.log(hDom.offsetHeight,hDom.offsetHeight)
document.onmousemove = e =>{
  console.log(e)
  let x = (e.offsetX - hDom.offsetHeight*20 )/50
  let y = (e.offsetY - hDom.offsetHeight*10 )/50
  const z = (e.offsetY+e.offsetX)/500
  console.log(x,y,z)
  hDom.style.textShadow = `${x}px ${y}px ${z}px rgba(0,0,0,.5)`
}