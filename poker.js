export function checkHighCard(hand) {
  const values = { "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "T": 9, "J": 10, "Q": 11, "K": 12, "A": 13 }

  const hand_values = hand
    .split(' ')
    .map(card => values[card.charAt(0)])

  var maxValue = 0;

  for (let i of hand_values) {
    if (i >= maxValue) {
      maxValue = i;
    }
  }

  for (let j in hand_values) {
    if (hand_values[j] == maxValue) {
      return hand.split(' ')[j].charAt(0);
    }
  }


  return maxValue;
} 