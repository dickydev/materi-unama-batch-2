// 1. Data Type => pengelompokan nilai yang memberi tahu program cara mengolah data tersebut

/**
 * 1. Primitive (nilai langsung, immutable):
 *  -. string -> berupa teks atau karakter dengan menggunakan notasi "" / ''
 *  -. number -> berupa angka, bilangan desimal ataupun bulat
 *  -. boolean -> berupa nilai logika (true/false)
 *  -. null -> berupa nilai yang sengaja dikosongkan
 *  -. undefined -> berupa nilai yang belum didefinisikan
 *  -. symbol -> berupa simbol
 *  -. bigInt -> berupa nilai bilangan bulat yang besar
 *
 * 2. Reference (disimpan sebagai alamat memori):
 *  -. Object :
 *      a. object
 *      b. array
 *      c. function
 *      d. class
 *      e. dst.
 */

// Contoh :
let nama = 'Budi';
let gender = 'L';
let umur = 100;
let tinggiBadan = 178.8;
let isSmart = false;
let kosong = null;
let belumDiDefinisikan = undefined;
let simbol = Symbol('id');
let bigInt = 120391290310201309n;

let obj1 = {
  nama: 'Budi',
};

let arr1 = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);

// 2. Type Conversion
// a. Explicit Conversion
let angka1 = 0;
console.log(angka1);
let angka1String = String(angka1);
console.log(angka1String);
let angka1Boolean = Boolean(angka1);
console.log(angka1Boolean);

// b. Implicit Conversion
console.log('5' + 2);
console.log(true + true);
