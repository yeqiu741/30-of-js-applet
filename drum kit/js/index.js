document.onkeydown = (e)=>{
  switch(e.keyCode){
    case 65:
    {
      const clap = document.getElementById('clap');
      const clapdom = document.getElementById('CLAP');
      clapdom.style.border = '10px solid yellow'
      clapdom.style.fontSize = '20px';
      clap.currentTime = 0;
      clap.play();
      break;
    }
    case 83:
    {
      const hihat = document.getElementById('hihat');
      const hihatdom = document.getElementById('HIHAT');
      hihatdom.style.border = '10px solid yellow';
      hihatdom.style.fontSize = '20px';
      hihat.currentTime = 0;
      hihat.play();
      break;
    }
    case 68:
    {
      const kick = document.getElementById('kick');
      const kickdom = document.getElementById('KICK');
      kickdom.style.border = '10px solid yellow';
      kickdom.style.fontSize = '20px';
      kick.currentTime = 0;
      kick.play();
      break;
    }
    case 70:
    {
      const openhat = document.getElementById('openhat');
      const openhatdom = document.getElementById('OPENHAT');
      openhatdom.style.border = '10px solid yellow';
      openhatdom.style.fontSize = '20px';
      openhat.currentTime = 0;
      openhat.play();
      break;
    }
    case 71:
    {
      const boom = document.getElementById('boom');
      const boomdom = document.getElementById('BOOM');
      boomdom.style.border = '10px solid yellow';
      boomdom.style.fontSize = '20px';
      boom.currentTime = 0;
      boom.play();
      break;
    }
    case 72:
    {
      const ride = document.getElementById('ride');
      const ridedom = document.getElementById('RIDE');
      ridedom.style.border = '10px solid yellow';
      ridedom.style.fontSize = '20px';
      ride.currentTime = 0;
      ride.play();
      break;
    }
    case 74:
    {
      const snare = document.getElementById('snare');
      const snaredom = document.getElementById('SNARE');
      snaredom.style.border = '10px solid yellow';
      snaredom.style.fontSize = '20px';
      snare.currentTime = 0;
      snare.play();
      break;
    }
    case 75:
    {
      const tom = document.getElementById('tom');
      const tomdom = document.getElementById('TOM');
      tomdom.style.border = '10px solid yellow';
      tomdom.style.fontSize = '20px';
      tom.currentTime = 0;
      tom.play();
      break;
    }
    case 76:
    {
      const tink = document.getElementById('tink');
      const tinkdom = document.getElementById('TINK');
      tinkdom.style.border = '10px solid yellow';
      tinkdom.style.fontSize = '20px';
      tink.currentTime = 0;
      tink.play();
      break;
    }
  }
}
document.onkeyup = (e)=>{
  switch(e.keyCode){
    case 65:
    {
      const clap = document.getElementById('CLAP');
      clap.style.border = '';
      clap.style.fontSize = '';
      break;
    }
    case 83:
    {
      const hihat = document.getElementById('HIHAT');
      hihat.style.border = '';
      hihat.style.fontSize = '';
      break;
    }
    case 68:
    {
      const kick = document.getElementById('KICK');
      kick.style.border = '';
      kick.style.fontSize = '';
      break;
    }
    case 70:
    {
      const openhat = document.getElementById('OPENHAT');
      openhat.style.border = '';
      openhat.style.fontSize = '';
      break;
    }
    case 71:
    {
      const boom = document.getElementById('BOOM');
      boom.style.border = '';
      boom.style.fontSize = '';
      break;
    }
    case 72:
    {
      const ride = document.getElementById('RIDE');
      ride.style.border = '';
      ride.style.fontSize = '';
      break;
    }
    case 74:
    {
      const snare = document.getElementById('SNARE');
      snare.style.border = '';
      snare.style.fontSize = '';
      break;
    }
    case 75:
    {
      const tom = document.getElementById('TOM');
      tom.style.border = '';
      tom.style.fontSize = '';
      break;
    }
    case 76:
    {
      const tink = document.getElementById('TINK');
      tink.style.border = '';
      tink.style.fontSize = '';
      break;
    }
  }
}


