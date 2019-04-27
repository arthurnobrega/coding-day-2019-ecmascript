import { checkFiveCards, checkCard } from './poker';

describe('Checar 5 cartas', () => {
  test('checa mão com cinco cartas', () => {
    expect(checkFiveCards('2H 3D 5S 9C KD')).toEqual(true);
  });
  test('checa mão com 4 cartas', () => {
    expect(checkFiveCards('2H 3D 5S 9C')).toEqual(false);
  });
});

describe('Checar carta válida', () => {
  test('checa se uma carta válida passada', () => {
    expect(checkCard('2H')).toEqual(true);
  });
  test('checa se uma carta de tamanho inválido é passada', () => {
    expect(checkCard('2')).toEqual(false);
  });
  test('checa se uma carta de naipe inválido é passada', () => {
    expect(checkCard('22')).toEqual(false);
  });
  test('checa se uma carta de naipe valido é passada', () => {
    expect(checkCard('2C')).toEqual(true);
  });
  test('checa se uma carta de valor inválido é passada', () => {
    expect(checkCard('0C')).toEqual(false);
  });
  test('checa se uma carta de valor valido é passada', () => {
    expect(checkCard('2C')).toEqual(true);
  });
});