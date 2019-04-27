const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const SUITS = ['S', 'H', 'D', 'C'];

const splitCards = (hand) => hand.split(' ')

export function checkFiveCards(hand) {
  return splitCards(hand).length === 5;
}

export function checkCard(card) {
  return card.length === 2 && validateSuit(card) && validateValue(card);
}

function validateSuit(card) {
  return !!SUITS.filter(s => s === card[1]).length;
}
function validateValue(card) {
  return !!VALUES.filter(s => s === card[0]).length;
}

export function checkHand(hand) {
  return checkFiveCards(hand) && splitCards(hand).every(checkCard);
}

export function higherCard(hand) {
  const cards = splitCards(hand);
  const strength = cards.map(card => VALUES.indexOf(card[0]));
  const index = strength.indexOf(Math.max(...strength));
  return cards[index];
}





