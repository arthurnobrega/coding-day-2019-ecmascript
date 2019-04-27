export function checkFiveCards(hand) {
  return hand.split(' ').length === 5;
}

export function checkCard(card) {
  return card.length === 2 && validateSuit(card) && validateValue(card);
}

function validateSuit(card) {
  const suits = ['S', 'H', 'D', 'C'];
  return !!suits.filter(s => s === card[1]).length;
}
function validateValue(card) {
  const values = ['2', '3', '4', '5', '6', '7', '8', '9',
    'T', 'J', 'Q', 'K', 'A'];
  return !!values.filter(s => s === card[0]).length;
}