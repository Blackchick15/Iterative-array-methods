/*
 * Array.prototype.map()
 * - Поелементно переберає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map(number => {
//   console.log(number);

//   return number * 2;
// });

// console.log('doubledNums', doubledNums);

// console.log('numbers', numbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// console.table('оригінал', players);
/*
 * Отримуємо масив імен усі гравців
 */
// const playerNames = players.map(player => player.name);
// console.log('playerNames', playerNames);

// const playerId = players.map(player => player.id);
// console.log('playerId', playerId);

// const res = players.map(({ name, online }) => ({ name, online }));
// console.log('res', res);

/*
 * Збільшуєм кількість поінтів кожного гравця на 10%
 */

// const upatedPlayers = players.map(player => ({
//   ...player,
//   points: player.points * 1.1,
// }));
// console.table(upatedPlayers);
// // console.log(upatedPlayers);

// console.table('оригінал', players);

/*
 * Збільшуємо кількість годин гравця по  id
 */

console.table(players);

const playerIdToUpdate = 'player-2';

// const updatedPlayers = players.map(player => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }

//   return player;
// });

// тернарник
const updatedPlayers = players.map(player =>
  playerIdToUpdate === player.id
    ? {
        ...player,
        timePlayed: player.timePlayed + 100,
      }
    : player,
);

console.table(updatedPlayers);
