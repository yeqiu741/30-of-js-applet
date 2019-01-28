const titleArr = [
  'Anywhere But Here',
  'The Bled',
  'Counterparts',
  'The Devil Wears Prada',
  'The Midway State',
  'Norma Jean',
  'Oh, Sleeper',
  'An Old Dog',
  'Pierce the Veil',
  'The Plot in You',
  'Say Anything',
  'A Skylit Drive',
  'We Came as Romans'
]
const ulDom = document.querySelector('#container')
ulDom.innerHTML = titleArr.map(item => `<li> ${item} </li>`).join('')

