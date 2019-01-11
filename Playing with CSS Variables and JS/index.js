const nodeList = document.querySelectorAll('input');
const imgDom = document.getElementById('imgDom');
const jsDom = document.querySelector('span');
document.onmousemove = () => {
  const baseColor = `${nodeList[2].value}`;
  jsDom.style.color = `${nodeList[2].value}`;
  imgDom.style.border = `${nodeList[0].value}px solid ${baseColor}`;
  imgDom.style.filter = `blur(${nodeList[1].value/10}px)`;
}