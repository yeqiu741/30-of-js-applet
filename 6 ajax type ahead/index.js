let msglist = [
  'Filters For A City',
  'Or A State'
]
const xhr = new XMLHttpRequest();
xhr.open('get', './city.json');
xhr.send();
xhr.onreadystatechange = () => {
  if(xhr.readyState == 4 && xhr.status == 200){
    // console.log(msglist)
    msglist = JSON.parse(xhr.responseText)
    // console.log(msglist)
  }
}
const ulDom = document.querySelector('ul')

msglist.forEach((item,index) => {
  const liDom = document.createElement('li');
  liDom.innerText = item;
  if(index%2 == 0)
  {
    liDom.className = 'li1'
  }else{
    liDom.className = 'li2'
  }
  ulDom.appendChild(liDom);
})

const inputDom = document.querySelector('input')
inputDom.focus()
inputDom.select()
inputDom.addEventListener('input', filterMsg)
function filterMsg(){
  const nodelist1 = document.querySelectorAll('li');
  const liDomArr1 = Array.from(nodelist1)
  liDomArr1.forEach(item12 => {
    ulDom.removeChild(item12)
  })
  const inputValue = inputDom.value
  msglist.filter(item => {
    const filter = new RegExp(`${inputValue}`)
    if(filter.test(item.city.toLowerCase())){
      const liDom = document.createElement('li');
      liDom.innerText = item.city;
      const nodelist = document.querySelectorAll('li');
      const liDomArr = Array.from(nodelist)
      console.log(liDomArr.length)
      const flog = liDomArr.length+1
      if(flog%2 != 0){
        liDom.className = 'li2'
      }else{
        liDom.className = 'li1'
      }
      ulDom.appendChild(liDom);
    }else{
      const nodelist = document.querySelectorAll('li');
      const liDomArr = Array.from(nodelist)
      liDomArr.forEach(item1 => {
        if(item1.innerText == item.city){
          ulDom.removeChild(item1)
        }
      })
    }
  })
}

