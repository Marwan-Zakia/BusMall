'use strict';
let buttn= document.getElementById ('imgsresult');
let resulet= document.getElementById ('report');
// let chart= document.getElementById ('myChart');
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
  let newarry=[22,21,20]
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
  this.clicks = 0;
  this.views = 0;
  Imgs.all.push(this);

}
Imgs.all = [];
for (let i = 0; i < imgArray.length; i++) {
  new Imgs(imgArray[i].split('.')[0], imgArray[i]);


}

function render() {
  
do { leftindex = randomNumber(0, imgArray.length - 1);

} while(leftindex === newarry[0]||leftindex === newarry[1]||leftindex === newarry[2])
  
 
  do {
    midindex = randomNumber(0, imgArray.length - 1);
    rightindex = randomNumber(0, imgArray.length - 1);



  } while (leftindex  === midindex || leftindex === rightindex || midindex === rightindex || midindex === newarry[0]||midindex === newarry[1]||midindex === newarry[2]|| midindex === rightindex || rightindex === newarry[0]||rightindex === newarry[1]||rightindex === newarry[2]);

newarry[0]=leftindex;
newarry[2]=midindex;
newarry[1]=rightindex;


  rightImage.src = Imgs.all[rightindex].src;
  midImage.src = Imgs.all[midindex].src;
  leftImage.src = Imgs.all[leftindex].src;


  Imgs.all[leftindex].views++;
  Imgs.all[midindex].views++;
  Imgs.all[rightindex].views++;
 
}



buttn.addEventListener('click', renderbuttn);


imageSection.addEventListener('click', eventhandler);



function eventhandler(e) {
  if (counter<25){
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
  else{counter<25
    return;}
  localStorage.setItem('Imgs', JSON.stringify(Imgs.all));
  render();
  counter++;  
  
}


function getData() {
  let data = JSON.parse(localStorage.getItem('Imgs'));
   if(data){Imgs.all= data}
render();

    }
    getData();
   

function renderbuttn (){

  let report = document.createElement('h2');
  resulet.appendChild(report);
  report.textContent = 'report';

  let ul = document.createElement('ul');
  resulet.appendChild(ul);
  for (let i = 0; i <imgArray.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${imgArray[i].split('.')[0]} had  ${Imgs.all[i].clicks} votes was seen  ${Imgs.all[i].views} times`;
  }
  drawChart();
  
    buttn.removeEventListener('click', renderbuttn);
  
}
function drawChart() {

  let name = [];
  let views = [];
  let clicks= [];

  for(let i = 0; i < Imgs.all.length; i++) {
    name.push(Imgs.all[i].name);
    views.push(Imgs.all[i].views);
    clicks.push(Imgs.all[i].clicks);
  }

  let ctx = document.getElementById( 'myChart' ).getContext( '2d' );

  let myChart = new Chart( ctx, {
    type: 'bar',
    data: {labels: name, datasets: [{label: '# of Votes' , data: clicks , backgroundColor: 'rgba(255, 99, 132, 0.2)',borderColor: [
      'rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)'],borderWidth: 1 }] }, options: {scales: {y: { beginAtZero: true}}} 
  } );
 
  function addData(chart, label, color, data) {
		chart.data.datasets.push({
	    label: label,
      backgroundColor: color,
      data: data
    });
    

    chart.update();
}
setTimeout(function() {
  addData(myChart, '# of views', '#ff0000', views);
},);


}




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
//     Imgs.all[midindex].clicks++ ;}
// function render() {
//   leftindex = randomNumber(0, imgArray.length - 1);


//   do {
//     midindex = randomNumber(0, imgArray.length - 1);
//     rightindex = randomNumber(0, imgArray.length - 1);



//   } while (leftindex  === midindex || leftindex === rightindex || midindex === rightindex);