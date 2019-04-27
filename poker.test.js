import { checkHighCard, compareHandsHighCards } from './poker.js';

describe('Single person', () => {
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
describe('Compare 2 hands', () => {
  test('Compare two hands with high cards', () => {
    const winner = compareHandsHighCards({ Black: '2H 3D 5S 9C KD', White: '2C 3H 4S 8C AH' });
    expect(winner).toEqual('White wins. - with high card: Ace')
  });
  test('Compare two hands with high cards', () => {
    const winner = compareHandsHighCards({ Black: '2H 3D 5S 9C KD', White: '2C 3H 4S 8C KH' });
    expect(winner).toEqual('Tie.')
  });
})