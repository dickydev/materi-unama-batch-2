console.log(sayHalo('Ica'));

function sayHalo(name) {
  return name;
}

let a = 'scope global';
console.log(b);

function outer() {
  let b = 'scope local outer';
  function inner() {
    let c = 'scope local inner';
    console.log(a, b, c);
  }
  inner();
}
outer();
