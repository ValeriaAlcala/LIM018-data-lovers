import {producerFilter,directorFilter} from './data.js';
import data from './data/ghibli/ghibli.js';

const filmsData= data.films;

const aboutStudio=document.getElementById("firstbutton");
  aboutStudio.addEventListener("click",aboutStudioPage);

const films=document.getElementById("secondbutton");
  films.addEventListener("click",filmspage);


function aboutStudioPage(){
  document.getElementById("homepage").style.display="none";
  document.getElementById("studiopage").style.display="block";
}

function filmspage() {
  document.getElementById("homepage").style.display="none";
  document.getElementById("filmspage").style.display="block";

  filmPoster();
  directorFilterFunction();
  producerFilterFunction();
}

//MOSTRAR LAS IMAGENES DE LAS 20 PELICULAS
function filmPoster(){   
  for (let i=0 ; i<data.films.length ; i++){

    const frameImg = document.createElement('img');
    const elementoPadre = document.getElementById("filmPosterImages");
      elementoPadre.appendChild(frameImg);
        frameImg.setAttribute("src", data.films[i].poster);
        frameImg.setAttribute("class","filmImages");
          frameImg.addEventListener("click",()=>singleData(i));
  }
} 

//FILTRAR POR DIRECTOR  
function directorFilterFunction(){

  let dataDirector =[];
    for(let i=0;i<filmsData.length;i++){
      dataDirector.push(filmsData[i].director);   
    }

  let resultDirector = dataDirector.filter((item,index)=>{
    return dataDirector.indexOf(item) === index;
  });

  document.querySelectorAll('.listDirector').forEach(item => {
    item.addEventListener('click', () => {
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
}

//FILTRAR POR PRODUCTOR
function producerFilterFunction(){

  let dataProducer =[];
    for(let i=0;i<filmsData.length;i++){
      dataProducer.push(filmsData[i].producer);
    }

  let resultProducer = dataProducer.filter((item,index)=>{
    return dataProducer.indexOf(item) === index;
  });

  document.querySelectorAll('.listProducer').forEach(item => {
    item.addEventListener('click', () => {
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
  });
}  

//ENTRAR A CADA PELICULA POR SEPARADO
function singleData(i){
      
  document.getElementById("infoFilmsPage").style.display="block";
  document.getElementById("filmspage").style.display="none";

  //POSTER FILTRADO DE CADA PELICULA
  const posterSection = document.createElement('img');
  const miniature = document.getElementById("poster_infoFilmsPage");
    miniature.appendChild(posterSection);
      posterSection.setAttribute("src", data.films[i].poster);
      posterSection.setAttribute("id", "singlePoster");

  //TITULO FILTRADO DE CADA PELICULA    
  let filmTitle=data.films[i].title;
    document.getElementById("title").innerHTML=filmTitle; 

  //DESCRIPCION FILTRADA DE CADA PELICULA  
  let filmDescription=data.films[i].description;
    document.getElementById("description").innerHTML=filmDescription;

  //DIRECTOR FILTRADO DE CADA PELICULA  
  let filmDirector=data.films[i].director;
    document.getElementById("director").innerHTML=("Director: "+filmDirector);

  //PRODUCTOR FILTRADO DE CADA PELICULA  
  let filmProducer=data.films[i].producer; 
    document.getElementById("producer").innerHTML=("Producer: "+filmProducer);

  //AÑO FILTRADO DE CADA PELICULA  
  let releaseYear=data.films[i].release_date;
    document.getElementById("releaseDate").innerHTML=releaseYear; 

  //SCORE FILTRADO DE CADA PELICULA  
  let scoreOfEachFilm=data.films[i].rt_score;
    document.getElementById("rtScore").innerHTML=scoreOfEachFilm;

  //PERSONAJES DE CADA PELICULA
  for(let j=0; j<data.films[i].people.length; j++){
  let datacharacter=data.films[i].people[j]

    const charactersInfo = document.createElement('img');
    const charactersPerFilm  = document.getElementById("characters");
      charactersPerFilm.appendChild(charactersInfo);
        charactersInfo.setAttribute("src",datacharacter.img);
        charactersInfo.setAttribute("class","charactersclass");
          charactersInfo.addEventListener("click",()=>dataOfEachCharacter(datacharacter));
  }

  //LUGARES DE CADA PELICULA
  for(let y=0; y<data.films[i].locations.length; y++){
    let datalocations=data.films[i].locations[y]
    
    const locationsInfo = document.createElement('img');
    const locationsPerFilm = document.getElementById("places");
      locationsPerFilm.appendChild(locationsInfo);
        locationsInfo.setAttribute("src",datalocations.img);
        locationsInfo.setAttribute("class","locationsclass");
          locationsInfo.addEventListener("click",()=>dataOfEachLocation(datalocations));
  }    

  //VEHICULOS DE CADA PELICULA
  for(let x=0; x<data.films[i].vehicles.length; x++) {
  let datavehicles=data.films[i].vehicles[x]

    const vehiclesInfo=document.createElement('img');
    const infoPerVehicles=document.getElementById("vehicles");
      infoPerVehicles.appendChild(vehiclesInfo);
        vehiclesInfo.setAttribute("src",datavehicles.img);
        vehiclesInfo.setAttribute("class","vehiclesclass");
  }
}  

//INFORMACION DE CADA PERSONAJE
function dataOfEachCharacter(datacharacter){

  document.getElementById("infoFilmsPage").style.display="none";
  document.getElementById("popupPage").style.display="block";

  //FOTO DE CADA PERSONAJE
  const characterImage = document.createElement('img');
  const characterminiature = document.getElementById("characterimg");
    characterminiature.appendChild(characterImage);
      characterImage.setAttribute("src", datacharacter.img);
      characterImage.setAttribute("id", "characterImageid");

  //NOMBRE DE CADA PERSONAJE
  let charactersName=datacharacter.name;
  document.getElementById("charactername").innerHTML=charactersName; 

  //GENERO DE CADA PERSONAJE
  let charactersGender=datacharacter.gender;
  document.getElementById("charactergender").innerHTML=("Gender: "+ charactersGender);

  //EDAD DE CADA PERSONAJE
  let charactersAge=datacharacter.age;
  document.getElementById("characterage").innerHTML=("Age: "+charactersAge+ " years old");

  //COLOR DE OJOS DE CADA PERSONAJES 
  let charactersEyes=datacharacter.eye_color;
  document.getElementById("charactereyes_color").innerHTML=("Eye color: "+charactersEyes);

  //COLOR DE CABELLO DE CADA PERSONAJE
  let charactersHairColor=datacharacter.hair_color;
  document.getElementById("characterhair_color").innerHTML=("Hair color: "+charactersHairColor);

  //ESPECIE DE CADA PERSONAJE
  let charactersSpecie=datacharacter.specie;
  document.getElementById("characterspecie").innerHTML=("Specie: "+ charactersSpecie);
}

//INFORMACION DE CADA LUGAR
function dataOfEachLocation(datalocations){
  document.getElementById("infoFilmsPage").style.display="none";
  document.getElementById("popupPage").style.display="block";

  //IMAGEN DEL LUGAR
  const locationsImg = document.createElement('img');
  const locationminiature = document.getElementById("locationimg");
    locationminiature.appendChild(locationsImg);
      locationsImg.setAttribute("src", datalocations.img);
      locationsImg.setAttribute("id", "locationsImageid");

  //NOMBRE DE CADA LUGAR
  let locationName=datalocations.name;
  document.getElementById("locationName").innerHTML=locationName;


  //CLIMA DE CADA LUGAR
  let climate=datalocations.climate;
  document.getElementById("locationClimate").innerHTML=("Climate: "+climate);

  //TERRENO DE CADA LUGAR
  let terrain=datalocations.terrain;
  document.getElementById("locationTerrain").innerHTML=("Terrain: "+terrain);

  //SUPERFICIE CON AGUA DE CADA LUGAR
  let surface_water=datalocations.surface_water;
  document.getElementById("locationSurface_Water").innerHTML=("Surface Water: "+surface_water);

  //RESIDENTES DE CADA LUGAR
  let residents=datalocations.residents;
  document.getElementById("locationResidents").innerHTML=("Residents: "+residents);

}

