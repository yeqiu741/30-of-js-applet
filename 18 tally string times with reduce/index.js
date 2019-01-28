const arr = [
  '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'
]
console.log(arr.map(parseFloat))
const ulDom = document.querySelector('ul')
ulDom.innerHTML = arr.map(item => `<li>video${parseFloat(item)}</li>`).join('')

// es5
// <!-- ES5 -->
// ['10', '5'].map(function(str) {
//     return parseFloat(str);
// });


// <!-- ES6 -->
// ['10', '5'].map(str => parseFloat(str));


// <!-- ES6 shorter -->
// ['10', '5'].map(parseFloat);

