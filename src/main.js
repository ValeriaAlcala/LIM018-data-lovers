import {prueba} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

viewImage();
function viewImage(){   
  for (let i=0 ; i<data.films.length ; i++){
   
   const frameImg = document.createElement('img');
   const elementoPadre = document.getElementById("imagenes")

   elementoPadre.appendChild(frameImg);
   frameImg.setAttribute("src", data.films[i].poster);
   frameImg.setAttribute("class","imagenes" );
  }
}
console.log(data);

const imagenes=prueba(data);
prueba1();
function prueba1(){

  for(let i=0; i<imagenes.length; i++){
    const nuevasImg=document.createElement('img');
    const imagenPadre=document.getElementById("nuevasImg")

    imagenPadre.appendChild(nuevasImg);
    nuevasImg.setAttribute("src",imagenes[i]);
    nuevasImg.setAttribute("class","nuevasImg")
  }

}


console.log(prueba(data));

