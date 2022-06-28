import {producerFilter,directorFilter} from './data.js';
import data from './data/ghibli/ghibli.js';

// eslint-disable-next-line no-console
console.log(data);

const filmsData= data.films;

// eslint-disable-next-line no-console
console.log(filmsData);

let selectedFilm="";

const aboutStudio=document.getElementById("firstbutton");
  aboutStudio.addEventListener("click",aboutStudioPage);

const films=document.getElementById("secondbutton");
  films.addEventListener("click",filmspage);

function aboutStudioPage(){
  document.getElementById("homepage").style.display="none";
  document.getElementById("studiopage").style.display="block";
}

function filmspage(){
  document.getElementById("homepage").style.display="none";
  document.getElementById("filmspage").style.display="block";

  //MOSTRAR LAS IAMGENES DE LAS 20 PELICULAS

  function filmPoster(){   
    for (let i=0 ; i<data.films.length ; i++){

      const frameImg = document.createElement('img');
      const elementoPadre = document.getElementById("filmPosterImages");
       elementoPadre.appendChild(frameImg);
        frameImg.setAttribute("src", data.films[i].poster);
        frameImg.setAttribute("class","filmImages");

      //ENTRAR A CADA PELICULA POR SEPARADO
        frameImg.addEventListener("click",()=>{
          selectedFilm = data.films[i].id;
      
          document.getElementById("infoFilmsPage").style.display="block";
          document.getElementById("filmspage").style.display="none";

      //INFORMACIÓN DE CADA PELICULA

        const posterSection = document.createElement('img');
        const miniature = document.getElementById("poster_infoFilmsPage");
          miniature.appendChild(posterSection);
            posterSection.setAttribute("src", data.films[i].poster);
            posterSection.setAttribute("id", "singlePoster");

        let filmTitle=data.films[i].title;
          document.getElementById("title").innerHTML=filmTitle; 
      
        let filmDescription=data.films[i].description;
          document.getElementById("description").innerHTML=filmDescription;

        let filmDirector=data.films[i].director;
          document.getElementById("director").innerHTML=("Director: "+filmDirector);

        let filmProducer=data.films[i].producer; 
          document.getElementById("producer").innerHTML=("Producer: "+filmProducer);
       
        let releaseYear=data.films[i].release_date;
          document.getElementById("releaseDate").innerHTML=releaseYear; 
        
        let scoreOfEachFilm=data.films[i].rt_score;
          document.getElementById("rtScore").innerHTML=scoreOfEachFilm;

          //PERSONAJES DE CADA PELICULA

          const characters = document.createElement('img');
          const charactersPerFilm  = document.getElementById("characters");
            charactersPerFilm.appendChild(characters);
              characters.setAttribute("src", data.films[i].people.img[i]);
              characters.setAttribute("class", "charactersclass");

        });
    }
  }
  filmPoster();

//FILTRAR POR DIRECTOR  

let dataDirector =[];
  for(let i=0;i<filmsData.length;i++){
    dataDirector.push(filmsData[i].director);   
  }

let resultDirector = dataDirector.filter((item,index)=>{
  return dataDirector.indexOf(item) === index;
});

document.querySelectorAll('.listDirector').forEach(item => {
  item.addEventListener('click', event => {
    const filmImages=document.getElementsByClassName("filmImages");
    for(let i=0;i<filmImages.length;i++){
        filmImages[i].style.display="none";
    }

    for(let i=0;i<filmsData.length;i++){
        for(let j=0;j<directorFilter(filmsData,resultDirector[item.value]).length; j++){
            if(filmsData[i].id == directorFilter(filmsData,resultDirector[item.value])[j].id){
                filmImages[i].style.display="block";
            }
        }
    }
  });
}) 

//FILTRAR POR PRODUCTOR

let dataProducer =[];
  for(let i=0;i<filmsData.length;i++){
    dataProducer.push(filmsData[i].producer);
}

let resultProducer = dataProducer.filter((item,index)=>{
  return dataProducer.indexOf(item) === index;
});

document.querySelectorAll('.listProducer').forEach(item => {
  item.addEventListener('click', event => {
    const filmImages=document.getElementsByClassName("filmImages");
    for(let i=0;i<filmImages.length;i++){
        filmImages[i].style.display="none";
    }
    for(let i=0;i<filmsData.length;i++){
        for(let j=0;j<producerFilter(filmsData,resultProducer[item.value]).length;j++){
            if(filmsData[i].id == producerFilter(filmsData,resultProducer[item.value])[j].id){
                filmImages[i].style.display="block";
            }
        }   
    }
  });
}) 



}