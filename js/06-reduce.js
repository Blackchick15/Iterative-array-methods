/*
 * Array.prototype.reduce()
 * - Поелементно перебирає оригіналний масив
 * - Повертає що завгодно
 * - Заміняє все на світі, але використовувати треба з розумом
 */

const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce((acc, numbers) => {
  console.log('acc', acc);
  console.log('numbers', numbers);

  return acc + numbers;

} , 0);

console.log(total);


// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

/*
 *Рахуємо загальну зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

// const totalSalary
// console.log(totalSalary);

/*
 * Рахуєм загальну кількість годин
 */

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// const totalTimePlayed
// console.log(totalTimePlayed);

/*
 * Рахуєм загальну суму товарів в корзині
 */
const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

// const totalAmount
// console.log(totalAmount);

/*
 * Збираємо усі теги з твітів
 */
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// const allTags
// console.log(allTags);

const apple =['redApple', 'goldApple', 'greenApple' ]
const goodApple = ('goldApple' , 'greenApple')
for(let i = 0; i < apple.length; i += 1){
  if (apple[i] < goodApple ){
    continue;
  }
  // console.log(goodApple);
}
console.log(goodApple);