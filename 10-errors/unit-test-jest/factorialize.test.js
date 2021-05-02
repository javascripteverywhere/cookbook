import {factorialize} from './factorialize.js';

describe('factorialize() function tests', () => {
  test('0! is 1', () => {
    expect(factorialize(0)).toBe(1);
  });
  test('1! is 1', () => {
    expect(factorialize(1)).toBe(1);
  });
  test('10! is 3628800', () => {
    expect(factorialize(10)).toBe(3628800);
  });
  test('"5"! is 120', () => {
    expect(factorialize('5')).toBe(120);
  });  
  test('NaN causes error', () => {
    expect(() => {
        factorialize(NaN).toThrow();
    });
  });  
});