class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    console.log(`Halo, saya ${this.name}`);
  }
}

const user1 = new User('Budi', 'budi@gmail.com');
user1.greet();
console.log(user1);

// Static Method dan Static Property

class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(5, 4));
const m = new MathHelper();

class Counter {
  static count = 0;

  constructor() {
    Counter.count = Counter.count + 1;
  }
}

let c1 = new Counter();
console.log(c1.count);
let c2 = new Counter();

console.log(Counter.count);
