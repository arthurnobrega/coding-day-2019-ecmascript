import { checkFiveCards, checkCard, checkHand, higherCard } from './poker';

describe('Checar 5 cartas', () => {
  test('checa mão com cinco cartas', () => {
    expect(checkFiveCards('2H 3D 5S 9C KD')).toEqual(true);
  });
  test('checa mão com 4 cartas', () => {
    expect(checkFiveCards('2H 3D 5S 9C')).toEqual(false);
  });
});

describe('Checar todas as 5 cartas da mao', () => {
  test('checa mão com cinco cartas', () => {
    expect(checkHand('2H 2D 5S 9C KD')).toEqual(true);
  });
  test('checa mão com cinco cartas com erro', () => {
    expect(checkHand('2H 0D 5S 9C KD')).toEqual(false);
  });
  test('checa se mão não tem cinco cartas', () => {
    expect(checkHand('2H 2D 5S 9C')).toEqual(false);
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

describe('Checar combinações', () => {
  test('retorna a maior carta da mão', () => {
    expect(higherCard('2H 3D 5S 9C KD')).toEqual('KD');
  })
});