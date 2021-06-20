'use strict';
let buttn= document.getElementById ('imgsresult');
let imgArray = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg'];
// let clicks = 0;
let counter = 0;
let imageSection = document.getElementById('imageSection');
let leftImage = document.getElementById('leftImage');
let midImage = document.getElementById('midImage');
let rightImage = document.getElementById('rightImage');
let midindex;
let rightindex;
let leftindex;

function Imgs(name, src) {
  this.name = name;
  this.src = `./assets/${src}`;
  //   this.counter=0;
  this.clicks = 0;
  this.views = 0;
  Imgs.all.push(this);

}
Imgs.all = [];

for (let i = 0; i < imgArray.length; i++) {
  new Imgs(imgArray[i].split('.')[0], imgArray[i]);


}
function render() {
  leftindex = randomNumber(0, imgArray.length - 1);


  do {
    midindex = randomNumber(0, imgArray.length - 1)
    rightindex = randomNumber(0, imgArray.length - 1);



  } while (leftindex === midindex || leftindex === rightindex || midindex === rightindex);


  rightImage.src = Imgs.all[rightindex].src;
  midImage.src = Imgs.all[midindex].src;
  leftImage.src = Imgs.all[leftindex].src;


  Imgs.all[leftindex].views++;
  Imgs.all[midindex].views++;
  Imgs.all[rightindex].views++;
//   console.log(Imgs.all);

}



//
function eventhandler(e) {
  if (counter<24){
    if (e.target.id === 'rightImage') {
      Imgs.all[rightindex].clicks++;
    }
    else if (e.target.id === 'leftImage') {
      Imgs.all[leftindex].clicks++;
    }

    else if (e.target.id === 'midImage') {
      Imgs.all[midindex].clicks++;
    }
  }
  else{
    return;
  }
  render();
  counter++;
}


function renderbuttn (){

  let report = document.createElement('h2');
  buttn.appendChild(report);
  report.textContent = 'report';

  let ul = document.createElement('ul');
  buttn.appendChild(ul);
  for (let i = 0; i <imgArray.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${imgArray[i].split('.')[0]} had  ${Imgs.all[i].clicks} votes was seen  ${Imgs.all[i].views} times`;
 
  }

}




buttn.addEventListener("click", renderbuttn);



imageSection.addEventListener('click', eventhandler);
render();


renderbuttn ();



function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}



// clicks ++;

//     Imgs.all[leftindex].clicks ++;
//   Imgs.all[midindex].clicks ++;
//   Imgs.all[rightindex].clicks ++;
//   console.log(Imgs.all[midindex].clicks++);

//   if ((e.target.id === 'rightImage' && 'clicks'|| e.target.id === 'leftImage' && 'clicks'|| e.target.id === 'midImage' && 'clicks' ) && counter < 25) {
//   if ((e.target.id === 'rightImage') && counter < 25) {
//     Imgs.all[rightindex].clicks++;
//   }
//   else if ((e.target.id === 'leftImage') && counter < 25) {
//     Imgs.all[leftindex].clicks++;
//   }

//   else if ((e.target.id === 'midImage') && counter < 25) {
//     Imgs.all[midindex].clicks++ ;


//   }