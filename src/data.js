export function producerFilter (data,name){
  return data.filter(p => p.producer === name);
}

export function directorFilter (data,name){
  return data.filter(d => d.director === name);
}



// tner la data del palicula por id getDatabYId(id) {return filter  }

// metodos para que te retorne  { }

// como tener un elemtno de un array

// console.log(directorfilter({asdasd}, "sdsd"))








/*export function producerAndDirector (data, producer){
  return data.filter(p => p.producer === producer);
}*/

export function filmsFilter (films,tittle){
  return films.filter(f=>f.title=== tittle)
}

export function prueba (data){
  const filtroHuman=
  data.films[0].people.filter(x=>x.specie=="Human");

let imagenhuman = filtroHuman.map(x=>x.img);

return imagenhuman
}
