const domArray = [
  {
    id: 'CLAP',
    title: 'A',
    description: 'CLAP',
    keyCode: 65,
    musicUrl: './static/audio/clap.wav'
  },
  {
    id: 'HIHAT',
    title: 'S',
    description: 'HIHAT',
    keyCode: 83,
    musicUrl: './static/audio/hihat.wav'
  },
  {
    id: 'KICK',
    title: 'D',
    description: 'KICK',
    keyCode: 68,
    musicUrl: './static/audio/kick.wav'
  },
  {
    id: 'OPENHAT',
    title: 'F',
    description: 'OPENHAT',
    keyCode: 70,
    musicUrl: './static/audio/openhat.wav'
  },
  {
    id: 'BOOM',
    title: 'G',
    description: 'BOOM',
    keyCode: 71,
    musicUrl: './static/audio/boom.wav'
  },
  {
    id: 'RIDE',
    title: 'H',
    description: 'RIDE',
    keyCode: 72,
    musicUrl: './static/audio/ride.wav'
  },
  {
    id: 'SNARE',
    title: 'J',
    description: 'SNARE',
    keyCode: 74,
    musicUrl: './static/audio/snare.wav'
  },
  {
    id: 'TOM',
    title: 'K',
    description: 'TOM',
    keyCode: 75,
    musicUrl: './static/audio/tom.wav'
  },
  {
    id: 'TINK',
    title: 'L',
    description: 'TINK',
    keyCode: 76,
    musicUrl: './static/audio/tink.wav'
  }
]

const prodcutionDom = document.getElementById('container');
let msg = domArray.map((item,index) => {
  console.log(item,index)
  return `<div id=${item.id} key={index}><p>${item.title}</p><span>${item.description}</span><audio src=${item.musicUrl} id=${item.id.toLowerCase()}></div>`
})
prodcutionDom.innerHTML = msg;


document.onkeydown = (e)=>{
  const keyCode = e.keyCode;
  domArray.filter((item)=>{
    if(keyCode == item.keyCode){
      const a = document.getElementById(item.id.toLowerCase());
      const b = document.getElementById(item.id);
      b.style.border = '10px solid yellow'
      b.style.fontSize = '20px';
      a.currentTime = 0;
      a.play();
    }
  })
}
document.onkeyup = (e)=>{
  const keyCode = e.keyCode;
  domArray.filter((item)=>{
    if(keyCode == item.keyCode){
      const c = document.getElementById(item.id);
      c.style.border = '';
      c.style.fontSize = '';
    }
  })
}