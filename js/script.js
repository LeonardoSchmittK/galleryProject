// window.addEventListener('load',loadImg) 

// let listImgs=window.document.querySelector('li')
// function loadImg(){
//  let img =window.document.createElement('img');
//  for(var n=0;n<=3;n++){
//   img.setAttribute('src',`/images/img${imgs[n]}.jpg`)
//   listImgs.appendChild(img)
//  }
 


// }

// // }
// let imgs=[];
// window.addEventListener('load',function(){
//  for(var i=0;i<=3;i++){
//    imgs.push(`img${i}`)
//     loadImg()
//  }
// }); 'img1.jpg','img2.jpg','img3.jpg'
const nameInitialImg='img'
const typeFileImg='.jpg'

// var imgs=[`${nameInitialImg}1${typeFileImg}`,`${nameInitialImg}2${typeFileImg}`,`${nameInitialImg}3${typeFileImg}`,`${nameInitialImg}4${typeFileImg}`,`${nameInitialImg}5${typeFileImg}`,`${nameInitialImg}6${typeFileImg}`,`${nameInitialImg}7${typeFileImg}`,`${nameInitialImg}8${typeFileImg}`,`${nameInitialImg}9${typeFileImg}`,`${nameInitialImg}10${typeFileImg}`]

var imgs=[];
for(var i=1;i<43;i++){
 imgs.push(`${nameInitialImg}${i+1}${typeFileImg}`)
};


var list=window.document.querySelector('ul')
window.addEventListener('load',carregarImgs())

var img;
function carregarImgs(){
 for(var i=0;i<imgs.length;i++){
   img=document.createElement('img');
   var li=document.createElement('li'); 
   img.setAttribute('src',`/images/${imgs[i]}`);
   img.setAttribute('id','imgItself')
    li.appendChild(img)
    list.appendChild(li) 
    
 }
}

let icon=window.document.getElementById('increaseImgIcon');
let iconContainer=window.document.getElementById('increaseImgContainer');
function aumentar(){

 // window.document.getElementById('imgItself').setAttribute('class','imgClass')
 

}