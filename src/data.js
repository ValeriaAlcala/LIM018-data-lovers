export function searchFilm(data,title){
  return data.filter(t => t.title.toLowerCase().includes(title.toLowerCase()));
}

export function producerFilter (data,name){
  return data.filter(p => p.producer === name);
}

export function directorFilter (data,name){
  return data.filter(d => d.director === name);
}

export function scoreFilter (data,number){
  return data.filter(s => s.rt_score === number);
}

function SortArrayAtoZ(x, y){
  
  if (x.title < y.title) {return -1;}
  if (x.title > y.title) {return 1;}
  return 0;
}

export function AtoZ (filmsData){
  let upward =[];
  for(let i=0;i<filmsData.length;i++){
    upward.push(filmsData[i]);   
  } 

  var atozSort = filmsData.sort(SortArrayAtoZ);
  return atozSort;
}

function SortArrayZtoA(x, y){
  
  if (x.title < y.title) {return 1;}
  if (x.title > y.title) {return -1;}
  return 0;
}

export function ZtoA (filmsData){
  let upward =[];
  for(let i=0;i<filmsData.length;i++){
    upward.push(filmsData[i]);   
  } 

  var ztoaSort = filmsData.sort(SortArrayZtoA);
  return ztoaSort;
}