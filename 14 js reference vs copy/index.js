const arr = ['小明', '侠岚', '小红', '牛逼']
const arr2 = arr
console.log(arr,arr2)
// 数组的浅拷贝。所谓浅拷贝就是指将被拷贝数组的数据内存地址赋值给拷贝的数组。两个数组指向同一片内存，所以当其中一个的值发生变化时，两个数组就都发生变化了。
// arr[1] = '财务室'
// console.log(arr,arr2)
// arr2[2] = '测试'
// console.log(arr,arr2)

// js实现数组的深拷贝.
//所谓深拷贝，有时根据业务需求，我们需要将该数组的值取出做出修改，而又不改变原数组。这是就用到深拷贝。深拷贝指的是指的是仅仅是将被拷贝数组的值复制放到新的内存中去。
// const arr3 = arr.slice();
// console.log(arr, arr3)
// arr3[1] = '测试'
// console.log(arr, arr3)

// const arr4 = arr.concat()
// console.log(arr, arr4)
// arr4[3] = '测试'
// console.log(arr, arr4)
// 以上两种方法仅适用于不包含引用对象的一维数组的深拷贝

// 数组的深拷贝，利用es6的语法
const arr5 = [...arr]
console.log(arr,arr5)
arr5[0] = '?'
console.log(arr,arr5)

// 数组的深拷贝
const arr6 = Array.from(arr)
console.log(arr,arr6)
arr6[0] = '!'
console.log(arr,arr6)




// 对象
const object = {
  name: '小明',
  age: 12,
  sex: '男'
}
// 对象的浅拷贝
// const object1 = object
// console.log(object,object1)
// object1.name = '测试'
// console.log(object,object1)

// 对象的深拷贝 用Object.assign（{}，） Object.assign（）可接受三个参数。Object.assign（{}，object， {name: '?}）:这三个参数分别是：预设值，复制来源，变更
// const object2 = Object.assign({},object)
// console.log(object,object2)
// object2.name = '测试'
// console.log(object,object2)

// 对象的深拷贝 利用的是es6的语法
const object3 = {...object}
console.log(object,object3)
object3.name = "?"
console.log(object,object3)

const object4 = JSON.stringify(object)
console.log(object,object4)
const object5 = JSON.parse(object4)
console.log(object,object5)


