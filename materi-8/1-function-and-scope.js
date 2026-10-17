// 1. Deklarasi Fungsi
function belajar() {
  console.log('Saya sedang belajar');
}

// 2. Invoke (Memanggil Fungsi)
belajar();
belajar();
belajar();
belajar();
belajar();

function tambah(a, b) {
  console.log(a + b);
}

tambah(2, 3);
tambah(5, 109);

function checkIsLogin() {}

/**
 * 1. Function Declaration
 * 2. Function Expression
 * 3. Function Arrow
 */

// 1. Function Declaration
function sayHello(name) {
  return `Hello, ${name}`;
}

console.log(sayHello('Kayla'));

// 2. Function Expression
const sayHi = sayHello;
console.log(sayHi('Iqbal'));

const sayOla = function (name) {
  return `Olaa, ${name}`;
};
console.log(sayOla('Fikri'));

// 3. Function Arrow
const sayPriviet = (name) => {
  return `Priviet, ${name}`;
};
console.log(sayPriviet('Naylaa'));

/**
 * CATATAN :
 * 1. PARAMETER : Variabel yang dituliskan di dalam definisi atau deklarasi sebuah fungsi.
 * CONTOH PARAMETER : function sayOla (parameter)
 *
 * 2. ARGUMENT : Nilai nyata atau aktual yang dikirimkan ke dalam fungsi ketika fungsi tersebut dipanggil (invoked).
 * CONTOH ARGUMENT : sayOla(argument)
 */
