import { checkFiveCards } from './poker'

describe('Checar 5 cartas', () => {
  test('checa mão com cinco cartas', () => {
    expect(checkFiveCards('2H 3D 5S 9C KD')).toEqual(true);
  });
  test('checa mão com 4 cartas', () => {
    expect(checkFiveCards('2H 3D 5S 9C')).toEqual(false);
  });
});