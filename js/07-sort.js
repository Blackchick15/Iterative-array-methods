/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортує і ЗМІНЮЄ оригінальний масив
 * - По замовчуванню:
 *    - сортує по збільшенню
 *    - приводить елементи в строку і сортує по [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 2, 3];
// console.log('numbers', numbers);

const letters = ['b', 'B', 'a', 'A'];
// console.log('letters', letters);

/*
 * compareFunction - функция сравнения (callback)
 * Елементи масива сортуються у відповідності з її занченням яке повертаєтся
 *  - якщо compareFunction(A, B) меньше 0, сортування поставить A перед B
 *  - якщо compareFunction(A, B) більше 0, сортування поставить B перед A
 *  - якщо compareFunction(A, B) повертає 0, сортуванння залишить A і B незміннними
 *  по відношенню один до одного, але відсортує їх по відношенню до усіх іншим елементів.
 */

/*
 * Як зробити копію масива щоб не сортувати оригинальний
 * - Array.prototype.slice()
 * - Операція spread
 */

// const descSortedNumbers
// const ascSortedNumbers
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('ascSortedNumbers', ascSortedNumbers);

/*
 * Кастомне сортування складних типів
 */
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// По ігровому часу

// const sortedByBestPlayers
// console.table(sortedByBestPlayers);
