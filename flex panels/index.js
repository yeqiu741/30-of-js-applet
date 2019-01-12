const domlist = [
  {
    topTitle: 'HEY', 
    centerTitle: 'Let\'s', 
    bottomTitle: 'DANCE',
    imgUrl: './1.jpg'
  },
  {
    topTitle: 'GIVE', 
    centerTitle: 'TAKE', 
    bottomTitle: 'RECEIVE',
    imgUrl: './2.jpg'
  },
  {
    topTitle: 'EXPERIENCE', 
    centerTitle: 'IT', 
    bottomTitle: 'TODAY',
    imgUrl: './3.jpg'
  },
  {
    topTitle: 'GIVE', 
    centerTitle: 'ALL', 
    bottomTitle: 'YOU CAN',
    imgUrl: './4.jpg'
  },
  {
    topTitle: 'LIFE', 
    centerTitle: 'IN', 
    bottomTitle: 'MOTION',
    imgUrl: './5.jpg'
  }
]
const container = document.querySelector('#container');
domlist.forEach((item,index) => {
  const divDom = document.createElement('div');
  divDom.style.backgroundImage = `url(${item.imgUrl})`;
  divDom.style.backgroundSize = 'cover';
  divDom.style.display = 'inline-block';
  divDom.id = `imgDiv${index}`
  const pTop = document.createElement('p')
  pTop.innerHTML = item.topTitle
  pTop.style.lineHeight = '282px'
  pTop.className = 'pTop';
  const pCenter = document.createElement('p')
  pCenter.innerHTML = item.centerTitle
  pCenter.style.lineHeight = '315px'
  const pBottom = document.createElement('p')
  pBottom.innerHTML = item.bottomTitle
  pBottom.style.lineHeight = '282px'
  pBottom.className = 'pBottom';
  divDom.appendChild(pTop);
  divDom.appendChild(pCenter);
  divDom.appendChild(pBottom);
  container.appendChild(divDom);
})
const nodelist = document.querySelectorAll('div')
console.log(nodelist)
nodelist.forEach(item => {
  item.addEventListener('click', transform)
})
let i = 0;
function transform(e){
  // 阻止事件冒泡
  e.stopPropagation(); 

  console.log(this.id)
  console.log(i)
  if(i++%2== 0 || this.style.width == ''){

    this.style.width = '40%'
    this.style.fontSize = '25px';
    this.children[0].style.opacity = 1
  this.children[2].style.opacity = 1
  }else{
    this.style.width = '20%'
    this.style.fontSize = '20px';
    this.children[0].style.opacity = 0
  this.children[2].style.opacity = 0
  }
  
}
