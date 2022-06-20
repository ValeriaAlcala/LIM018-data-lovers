// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

export const prueba= (data) => {
  const filtroHuman=
  data.films[0].people.filter(x=>x.specie=="Human");

let imagenhuman = filtroHuman.map(x=>x.img);

return imagenhuman
}

//FILTRAR POR PRODUCTOR = ISAO TAKAHATA//
export function producerIsao (data){
  let producer1;

  producer1=data.filter(p => p.producer === "Isao Takahata");

return producer1;
}

export function producerHayao (data){
  let producer2;

  producer2=data.filter(p => p.producer === "Hayao Miyazaki");

return producer2;
}

export function producerToru (data){
  let producer3;

  producer3=data.filter(p => p.producer === "Hayao Miyazaki");

return producer3;
}

export function producerToshio (data){
  let producer4;

  producer4=data.filter(p => p.producer === "Toshio Suzuki");

return producer4;
}

export function producerYoshiaki (data){
  let producer5;

  producer5=data.filter(p => p.producer === "Yoshiaki Nishimura");

return producer5;
}
/*export const searchName=(data)=>{
  return data.filter((data)=>{
    if (data.films[0].tittle.indexOf(str) = -1) return false;
    return true;
  })
} */

