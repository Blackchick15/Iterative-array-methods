/*
 * Array.prototype.find()
 * - Поелементно перебирає оригіналний масив
 * - Повертає перший елемент який задовільняє умову або undefined
 */

const numbers = [5, 10, 15, 20, 25];

// console.log(number);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

/*
 * Шукаємо гравця по id
 */
const playerIdToFind = 'player-3';
// const playerWithId
// console.log(playerWithId);

// console.log(finPlayerById(players, 'player-1'));
// console.log(finPlayerById(players, 'player-4'));

/*
 * Шукаємо гравця по імені
 */
const playerNameToFind = 'Poly';
// const playerWithName
// console.log(playerWithName);