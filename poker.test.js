import { checkHighCard } from './poker.js';

describe('Poker tests', () => {
  test('Check poker hand with King as high value', () => {
    const highCard = checkHighCard('2H 3D 5S 9C KD');
    expect(highCard).toEqual('K')
  })
  test('Check poker hand with Ace as high value', () => {
    const highCard = checkHighCard('2H 3D AS 9C KD');
    expect(highCard).toEqual('A')
  })
  test('Check poker hand with Queen as high value', () => {
    const highCard = checkHighCard('2H 4S JC 6D QH');
    expect(highCard).toEqual('Q')
  })
});