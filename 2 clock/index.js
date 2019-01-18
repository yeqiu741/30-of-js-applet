setInterval(()=>{
  let time = new Date();
  const second = time.getSeconds()*6;
  const minute = time.getMinutes()*6;
  const hour = time.getHours()*15;
  const secondDom = document.getElementById('second');
  const minuteDom = document.getElementById('minute');
  const hourDom = document.getElementById('hour');
  secondDom.style.transform = `rotate(${second}deg)`;
  minuteDom.style.transform = `rotate(${minute}deg)`;
  hourDom.style.transform = `rotate(${hour}deg)`;
},1000)