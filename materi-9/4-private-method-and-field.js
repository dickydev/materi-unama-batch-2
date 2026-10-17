class User {
  #password;

  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }

  checkPassword(pw) {
    return this.#password === pw;
  }
}

let u = new User('Budi', '12345');

console.log(u.name); // Budi

console.log(u.checkPassword('12345')); // true

class BankAccount {
  #balance = 0;

  #logTransaction(amount) {
    console.log(`Transaksi: ${amount}`);
  }

  deposit(amount) {
    this.#balance += amount;
    this.#logTransaction(amount);
  }

  getBalance() {
    return this.#balance;
  }
}

let acc = new BankAccount();
acc.deposit(500);
console.log(acc.getBalance()); // 500
acc.#logTransaction(100); // ❌ Error
