const user = {
  name: 'Budio',
  greet() {
    console.log(`Hello saya adalah ${this.name}`);
  },
};

const user1 = {
  name: 'Rudio',
  greet() {
    console.log(`Hello saya adalah ${this.name}`);
  },
};

user.greet();
console.log(user.name);
user1.greet();
