const datalist = [
  'This is an inbox layout.',
  'Check one item',
  'Hold down your Shift Key',
  'Check a lower item',
  'Everything inbetween should also be set to checked',
  'Try do it without any libraries',
  'Just regular JavaScript',
  'Good Luck',
  'Don\'t forget to tweet your result!'
]
const divDom = document.getElementById('container')
datalist.forEach(item => {
  const childDom = document.createElement('div')
  childDom.className = 'msgbox'
  const child1 = document.createElement('input')
  const child2 = document.createElement('p')
  child1.className = 'checkbox'
  child1.type = 'checkbox'
  child2.className = 'textarea'
  child2.innerText = item
  childDom.appendChild(child1)
  childDom.appendChild(child2)
  divDom.appendChild(childDom)
})
const nodelist = document.querySelectorAll('.msgbox')
const arr = Array.prototype.slice.call(nodelist,0)
arr[arr.length-1].style.borderBottom = '1px solid white;'
function changeStyle(){
  if(this.children[0].checked == true){
    this.children[1].style.textDecoration = 'line-through';
  }else{
    this.children[1].style.textDecoration = ''
  }
}
nodelist.forEach(item => {
  item.addEventListener('click',changeStyle)
})