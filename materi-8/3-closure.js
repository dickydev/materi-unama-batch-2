function createCounter() {
  return function () {
    let count = 0;
    count = count + 1;
    return count;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
