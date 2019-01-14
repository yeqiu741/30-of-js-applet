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
  divDom.id = `imgDiv${index}`
  const pTop = document.createElement('p')
  pTop.innerHTML = item.topTitle
  pTop.className = 'pTop';
  const pCenter = document.createElement('p')
  pCenter.innerHTML = item.centerTitle
  pCenter.style.lineHeight = '866px'
  const pBottom = document.createElement('p')
  pBottom.innerHTML = item.bottomTitle
  pBottom.className = 'pBottom';
  divDom.appendChild(pTop);
  divDom.appendChild(pCenter);
  divDom.appendChild(pBottom);
  container.appendChild(divDom);
})
const nodelist = container.querySelectorAll('div')
nodelist.forEach(item => {
  item.addEventListener('click', transform)
})
const idArray = [1, 2, 3, 4]
function transform(e){
  // 阻止事件冒泡
  e.stopPropagation(); 
  if(parseInt(this.style.fontSize)%2== 0 || this.style.width == ''){
    let fontSize = 20
    let opacity = 0
    let width = 12
    let margin = 0
    const a = setInterval(() => {
      if(fontSize === 25){
        clearInterval(a)
        console.log('测试')
      }else{
        fontSize +=1
        opacity += 0.2
        width += 5
        margin += 30
        this.style.fontSize = fontSize+'px'
        this.children[0].style.opacity = opacity
        this.children[2].style.opacity = opacity
        this.style.width = width+'%'
        this.children[0].style.top = margin+'px'
        this.children[2].style.bottom = margin+'px'
      } 
    },60)
  }else{
    this.style.width = '20%'
    this.style.fontSize = '20px';
    this.children[0].style.opacity = 0
    this.children[2].style.opacity = 0
  }
}