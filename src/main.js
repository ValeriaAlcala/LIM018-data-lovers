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

console.log(prueba(data));