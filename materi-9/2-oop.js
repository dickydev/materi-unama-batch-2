// 1. Encapsulation
class BankAccount {
  constructor(name) {
    this.name = name;
  }
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `${this.name} has ${this.#balance}`;
  }
}

const account1 = new BankAccount('Budi');
account1.deposit(10_000);
console.log(account1.getBalance());

// 2. Inheritance
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Halo, saya ${this.name}`);
  }
}

class Students extends User {
  constructor(name, major) {
    super(name);
    this.major = major;
  }

  study() {
    console.log(`${this.name} belajar ${this.major}`);
  }
}

let student1 = new Students('Budi', 'Teknik Informatika');
student1.greet();
student1.study();

// 3. Polymorphism
class Animal {
  speak() {
    console.log('Hewan bersuara');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Guk guk');
  }
}
class Cat extends Animal {
  speak() {
    console.log('Meow meow');
  }
}
class Goat extends Animal {
  speak() {
    console.log('Mbeeee');
  }
}

let animals = [new Dog(), new Cat(), new Goat()];
animals.forEach((a) => a.speak());

// 4. Abstraction
class Vehicle {
  start() {
    throw new Error("Method 'start()' harus diimplementasikan");
  }
}

class Car extends Vehicle {
  start() {
    console.log('Mobil dinyalakan');
  }
}
class Bike extends Vehicle {
  start() {
    console.log('Motor dinyalakan');
  }
}

new Car().start();
new Bike().start();
