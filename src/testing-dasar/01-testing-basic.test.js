import { gaji, penjumlahan, perkalian, salam } from './function/index';

describe('basic testing', () => {
  test('true', () => {
    expect(true).toBe(true);
  });

  it('penjumlahan', () => {
    expect(1 + 2).toBe(3);
  });

  test('perkalian', () => {
    expect(3 * 3).toBe(9);
  });
});

//Testing Function
describe('testing function', () => {
  test('function penjumlahan', () => {
    expect(penjumlahan(2, 3)).toBe(5);
  });

  test('fungsi perkalian', () => {
    expect(perkalian(2, 3)).toBe(6);
  });
});

//Testing function
describe('Testing String', () => {
  test('Gaji', () => {
    expect(gaji(1000000)).toBe(`gaji anda sebesar ${900000}`);
  });

  test('Salam', () => {
    expect(salam('Nopik')).toBe('Selamat malam Nopik');
  });
});
