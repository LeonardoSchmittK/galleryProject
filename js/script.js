
const nameInitialImg='img'
const typeFileImg='.jpg'


var imgs=[];
for(var i=1;i<43;i++){
 imgs.push(`${nameInitialImg}${i+1}${typeFileImg}`)
};




var list=window.document.querySelector('ul')
window.addEventListener('load',carregarImgs())


function carregarImgs(){
  var img;
  let icon=window.document.getElementById('increaseImgIcon');
let iconContainer=window.document.getElementById('increaseImgContainer');
 for(var i=0;i<imgs.length;i++){
  // Creating the image and li elements.
   img=document.createElement('img');
    var li=document.createElement('li'); 
      


   img.setAttribute('src',`/images/${imgs[i]}`);
    img.setAttribute('id',`imgItself${i}`)
      

    li.appendChild(img)
        list.appendChild(li) 

         // Lines under the images
            var line=document.createElement('div')
              line.setAttribute('id','lineImg')
                li.appendChild(line)
          
 }

}



