// 1. map()
const numbers = [1, 2, 3, 4, 8, 10, 20, 7, 9, 6];
const doubled = numbers.map((num) => num * 2);
console.log(numbers);
console.log(doubled);

const students = ["Budi", "Citra"];

const withDegree = students.map((name) => name + ", S.Kom");

console.log(students);
console.log(withDegree);

// 2. filter()
let nilaiGenap = numbers.filter((num) => num % 2 === 0);

console.log(nilaiGenap);

// 3. reduce()
const cart = [
  { name: "Laptop", price: 20000 },
  { name: "Mouse", price: 2000 },
  { name: "Keyboard", price: 3000 },
];

let total = cart.reduce((sum, item) => sum + item.price, 0);
console.log(total);
