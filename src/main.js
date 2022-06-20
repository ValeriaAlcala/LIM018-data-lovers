//import { styleDisabled } from 'htmlhint';//
import {prueba,producerIsao,producerHayao,producerToru,producerToshio,producerYoshiaki} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

//FILTRADO GENERAL
const filmsData=data.films;
// eslint-disable-next-line no-console
console.log(filmsData);

const aboutStudio=document.getElementById("firstbutton");
aboutStudio.addEventListener("click",aboutStudioPage);

const films=document.getElementById("secondbutton");
films.addEventListener("click",filmspage)

function aboutStudioPage(){
  document.getElementById("homepage").style.display="none";
  document.getElementById("studiopage").style.display="block";
}

function filmspage(){
  document.getElementById("homepage").style.display="none";
  document.getElementById("filmspage").style.display="block";

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
// eslint-disable-next-line no-console
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
//console.log(prueba(data));

}


const isao=producerIsao(filmsData);
// eslint-disable-next-line no-console
console.log(isao);

const hayao=producerHayao(filmsData);
console.log(hayao);

const toru=producerToru(filmsData);
console.log(toru);

const toshio=producerToshio(filmsData);
console.log(toshio);

const yoshiaki=producerYoshiaki(filmsData);
console.log(yoshiaki);