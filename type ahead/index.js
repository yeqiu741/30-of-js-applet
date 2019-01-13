const msglist = [
  'Beijing', 'Baoding', 'Langfang', 'Tangshan', 'Tianjin', 'Yanjiao', 'Liaoning', 'Heilongjiang', 
  'Chongqing', 'Wulumuqi', 'Kelamayi', 'Shihezi', 'Alaer', 'Tumushuke', 'Wujiaqu', 'Hami', 'Tulufan',
  'Akesu', 'Lasa', 'Yinchuan', 'Shizuishan', 'Guyuan', 'Zhongwei', 'Qingtongxia', 'Lingwu', 'Huhehaote',
  'Baotou', 'Wuhai', 'Chifeng', 'Tongliao', 'Eerduosi', 'Hulunbeier', 'Bayanzhuoer', 'Wulanchabu', 'Fengzhen',
  'Nanning', 'Liuzhou', 'Guilin', 'Wuzhou', 'Beihai', 'Hezhou', 'Yulin', 'Baise', 'Hechi', 'Qinzhou', 'Guiping',
  'Shijiazhuang', 'Handan', 'Qinhuangdao', 'Cangzhou', 'Hengshui', 'Xingtai', 'Zhengzhou', 'Luoyang', 'Kaifeng',
  'Luohe', 'Anyang', 'Bozhou', 'Hefei', 'Lanzhou', 'Wuxi', 'Huangshan', 'Fuyang'
]
const datalistDom = document.querySelector('#dataArray')
msglist.forEach(item => {
  const optionDom = document.createElement('option');
  optionDom.value = item;
  datalistDom.appendChild(optionDom);
})