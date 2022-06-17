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

export const title=(data)=>{
  const image=
  data.flims[0].title.filter(x=>x);

let title=image.map(x=>x.poster);
  return title
}

/*export const searchName=(data)=>{
  return data.filter((data)=>{
    if (data.films[0].tittle.indexOf(str) = -1) return false;
    return true;
  })
} */

