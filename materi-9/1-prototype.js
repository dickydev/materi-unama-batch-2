let person = {
  greet: function () {
    console.log('Hello');
  },
};

let student = Object.create(person);
student.study = function () {
  console.log('Belajar javascript');
};

student.greet();
student.study();

function User(name) {
  this.name = name;
}

User.prototype.sayHello = function () {
  console.log(`Halo, saya ${this.name}`);
};

let user1 = new User('Budi');
user1.sayHello();
