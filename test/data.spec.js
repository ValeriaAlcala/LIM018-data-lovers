import { producerFilter, anotherExample } from '../src/data.js';


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
    expect(producerFilter(data,"hola")).toEqual([]);
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
