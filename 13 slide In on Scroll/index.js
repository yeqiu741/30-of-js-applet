const artArr = [
  {content: 'Consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariaturlores sunt esse magni, ut, dignissimos.'},
  {content: 'Lorem ipsum cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.'},
  {content: 'Adipisicing elit. Tempore tempora rerum..'},
  {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.'},
  {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.',
    img: './1.jpg'
  },  
  {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.'},  
  {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.'},  
  {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.',
  img: './2.jpg'},  
  {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.'},  
  {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.'},  
  {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.'},  
  {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.'},  
  {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.',
  img: './3.jpg'},  
]

const divDom = document.querySelector('#container')
artArr.forEach((item,index) => {
  const pDom = document.createElement('p')
  pDom.innerText = item.content
  if(item.img){
    const imgDom = document.createElement('img')
    imgDom.src = item.img
    imgDom.className = 'img'+index
    imgDom.align = 'left'
    pDom.appendChild(imgDom)
  }
  divDom.appendChild(pDom)
})
window.onscroll=() => {
  console.log(window.scrollY)
  const imgNodeList = document.querySelectorAll('img')
  imgDomList = Array.from(imgNodeList)
  if(window.scrollY >= 200){
    imgDomList[0].classList.toggle('img_active')
  }else if(window.scrollY >= 900){
    imgDomList[0].classList.toggle('img_active')
    imgDomList[1].classList.toggle('img_active')
  }else if(window.scrollY >= 2000){
    imgDomList[2].classList.toggle('img_active')    
    imgDomList[0].classList.toggle('img_active')
    imgDomList[1].classList.toggle('img_active')
  }
  // if(window.scrollY >= 200){
  //   const imgNodeList = document.querySelectorAll('img')
  //   imgDomList = Array.from(imgNodeList)
  //   console.log(imgDomList)
  //   imgNodeList.forEach(item => {
  //     console.log(item.offsetTop)
  //     if(item.offsetTop >= 904){
  //       item.className = 'img_active'
  //     }else if(item.offsetTop >= 1592){
  //       item.className = 'img_active'
  //     }else if(item.offsetTop >= 2708){
  //       item.className = 'img_active'
  //     }
  //   })
  // }else{
    
  //   imgDomList.forEach(item => {
  //     item.className = 'img'   
  //   })
  // }200 900 2000
}