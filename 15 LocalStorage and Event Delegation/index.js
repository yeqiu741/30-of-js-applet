const todoDom = document.querySelector('#showItem')
if(!window.localStorage.getItem('todo')){
  var todolist = []
}else{
  var todolist = window.localStorage.getItem('todo').split(',')
}
todolist.forEach(item => renderList(item))
function renderList(item){
  if(item != ''){
    const itemDom = document.createElement('div')
    itemDom.className = 'item'
    const imgDom = document.createElement('img')
    imgDom.src = './方框.png'
    const wordDom = document.createElement('p')
    wordDom.className = 'word'
    wordDom.innerText = item
    itemDom.appendChild(imgDom)
    itemDom.appendChild(wordDom)
    todoDom.appendChild(itemDom)
  } 
}

const addDom = document.querySelector('button')
addDom.addEventListener('click', addItem)
function addItem(){
  const inputDom = document.querySelector('input')
  if(inputDom.value == ''){
    window.alert('待办事项不可为空。')
  }else{
    todolist.push(inputDom.value)
    renderList(inputDom.value)
    window.localStorage.setItem('todo', todolist)
    inputDom.value = ''
  }
}

// 给每个信息框加个事件
let msgDom = document.querySelectorAll('.item')
// let msgDom = document.getElementsByClassName('item')
let msgArray = Array.from(msgDom)
msgArray.forEach(item => {
console.log(msgArray)

  item.id = 'true'
  item.addEventListener('click', changeImg)
})
function changeImg(){
  if(this.id == 'true'){
    this.children[0].src = './对号.png'
    this.id = 'false'
  }else{
    this.children[0].src = './方框.png'
    this.id = 'true'
  }
}


const checkAllDom = document.querySelectorAll('button')
const btnArr = Array.from(checkAllDom)
// check All
btnArr[1].addEventListener('click', checkAll)
function checkAll(){
  msgDom = document.getElementsByClassName('item')
  msgArray = Array.from(msgDom)
  msgArray.forEach(item => {
    item.children[0].src = './对号.png'
    this.id = 'false'
  })
}
// unCheck All
btnArr[2].addEventListener('click', unCheckAll)
function unCheckAll(){
  msgArray.forEach(item => {
    item.children[0].src = './方框.png'
    this.id = 'true'
  })
}

// Remove all
btnArr[3].addEventListener('click', removeAll)
function removeAll(){
  const confirmState = window.confirm('您的真的要删除所有项目吗')
  if(confirmState){
    // 清除localstorage内的内容
    window.localStorage.clear()
    location.reload() 
  }
}

