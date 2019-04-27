import { checkHand } from './poker';

describe('Poker', () => {
  test('check hand with king as high card', () => {
    const result = checkHand('2H 3D 5S 9C KD');

    expect(result).toEqual('High card: K');
  })
  test('check hand with ace as high card', () => {
    const result = checkHand('2H 3D 5S AC KD');

    expect(result).toEqual('High card: A');
  })
});
