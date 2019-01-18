const inputDom = document.querySelector('input')
inputDom.addEventListener('keydown', setArray)
let arr = []
function setArray(e){
  if(arr.length <= 5){
    arr.push(e.key)
  }else{
    arr.shift()
    arr.push(e.key)
  }
  console.log(arr)
}