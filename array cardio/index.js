const datalist = [
  {name: '小红', age: 11, sex: 'man', address: 'Beijing.Tongluoguxiang', phone: 110},
  {name: '小蓝', age: 12, sex: 'woman', address: 'Baoding.Tongluoguxiang', phone: 120},
  {name: '小明', age: 14, sex: 'man', address: 'Anhui.Tongluoguxiang', phone: 119},
  {name: '小恶', age: 15, sex: 'woman', address: 'dada.Tongluoguxiang', phone: 114},
  {name: '小白', age: 16, sex: 'woman', address: 'wr.Tongluoguxiang', phone: 12365},
  {name: '小黑', age: 17, sex: 'man', address: 'grg.Tongluoguxiang', phone: 11078587},
  {name: '小校', age: 18, sex: 'man', address: 'wrw.Tongluoguxiang', phone: 11086876},
  {name: '小掉', age: 19, sex: 'woman', address: 'drg.Tongluoguxiang', phone: 17867810},
  {name: '小宏', age: 20, sex: 'man', address: 'ergr.Tongluoguxiang', phone: 119960},
  {name: '小枭', age: 21, sex: 'woman', address: 'dbdf.Tongluoguxiang', phone: 1786710},
  {name: '小拉', age: 22, sex: 'woman', address: 'db.Tongluoguxiang', phone: 7678634},
  {name: '夏黑', age: 23, sex: 'man', address: 'dfbd.Tongluoguxiang', phone: 1786610},
]
const datalist2 = datalist.map(item => {
  return item.name
})

// 将数组内容表格化打印
console.table(datalist);
console.table(datalist2);

// 打印错误信息
console.error('cuoxu')

// 打印提示信息
console.warn('提示信息')

// 打印信息及配置信息
console.info(datalist)

// 计算运行时间
console.time()
 for (let i = 0; i < 10000; i++) {

 }
console.timeEnd()

// 信息组默认是打开状态
console.group("这是首条信息")
console.log('次级yitiao')
console.log('次级ertiao')
console.groupEnd()

// 信息组，默认是折叠状态
console.groupCollapsed('a')
console.log('b')
console.log('c')
