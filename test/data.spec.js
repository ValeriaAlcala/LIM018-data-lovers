import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { producerFilter,directorFilter, scoreFilter, AtoZ, ZtoA, searchFilm} from '../src/data.js';
import data from '../src/data/ghibli/ghibli.js';


//TEST FUNCION PRODUCTOR
describe('producerFilter', () => {
  it('is a function', () => {
    expect(typeof producerFilter).toBe('function');
  });

  it('returns filtered by producer', () => {
    const data = [{"producer":"Isao Takahata"},{"producer":"Hayao Miyazaki"}]
    expect(producerFilter(data,"Isao Takahata")).toEqual([{"producer":"Isao Takahata"}]);
  });

  it('returns producer doesnt exist', () => {
    const data = [{"producer":"Isao Takahata"},{"producer":"Hayao Miyazaki"}]
    expect(producerFilter(data,"Toshio Suzuki")).toEqual([]);
  });
});

// TEST FUNCION DIRECTOR
describe ('directorFilter', () => {
  it('is a function', () =>{
    expect(typeof directorFilter).toBe ('function');
  });

  it("return filtered by director",() =>{
    const data = [{"director":"Hayao Miyazaki"},{"director":"Isao Takahata"}]
    expect (directorFilter(data,"Hayao Miyazaki")).toEqual([{"director": "Hayao Miyazaki"}]);
  });

  it("return for non-existing director", () =>{
    const data = [{"director":"Hayao Miyazaki"},{"director":"Hiroyuki Morita"}]
    expect (directorFilter(data,"Toshio Suzuki")).toEqual([]);
  })
})

//TEST FUNCION PUNTUACION
describe("scoreFilter", () => {
  it('is a function', () => {
    expect(typeof scoreFilter).toBe('function');
  })

  it("movies with score 95",()=>{
    const result=scoreFilter(data.films,"95");
    expect(result[0].rt_score).toBe("95");
  });
});

//TEST FUNCION ASCENDENTE
describe("AtoZ", () => {
  it("is a function", () => {
    expect(typeof AtoZ).toBe("function");
  })

  it("second movie filtered Atoz", () => {
    const resultMovie=AtoZ(data.films,"From Up on Poppy Hill");
    expect(resultMovie[1].title).toBe("From Up on Poppy Hill");
  })
})

//TEST FUNCION DESCENDENTE
describe("ZtoA", () =>{
  it("is a function", () =>{
    expect(typeof ZtoA).toBe("function");
  })

  it("sixth movie filtered ZtoA", () => {
    const resultMovie=ZtoA(data.films,"Tales from Earthsea");
    expect(resultMovie[6].title).toBe("Tales from Earthsea");
  })
})

//TEST FUNCION SEARCH
describe("searchFilm", () => {
  it("is a function", () => {
    expect(typeof searchFilm).toBe("function");
  })
  
  it("filted by phrase", () => {
    const phraseMovie=searchFilm(data.films,"toro");
    expect(phraseMovie[0].title).toBe("My Neighbor Totoro");
  })
})