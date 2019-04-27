const suits = ['H', 'D', 'C', 'S'];
const sequence = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

export function checkHand(hand) {
  return 'High card: ' + hand
    .split(' ')
    .map(card => card.charAt(0))
    .reduce(
      (higher, card) => sequence.indexOf(higher) > sequence.indexOf(card) ? higher : card, '2');
}