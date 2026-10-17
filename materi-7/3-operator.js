// Operator :  simbol atau karakter khusus yang digunakan untuk melakukan operasi tertentu terhadap nilai atau variabel (operand).

/**
 * 1. Operator Aritmatika
 * 2. Operator Penugasan
 * 3. Operator Perbandingan
 * 4. Operator Logika
 * 5. Operator Unary
 * 6. Operator Binary
 * 7. Operator Ternary
 */

// 1. Operator Aritmatika
/**
 * 1. Penjumlahan (+)
 * 2. Pengurangan (-)
 * 3. Perkalian (*)
 * 4. Pembagian (/)
 * 5. Perpangkatan (**)
 * 6. Modulus / Sisa Bagi (%)
 */

console.log(1 + 2);
console.log(1 - 3);
console.log(1 * 4);
console.log(1 / 5);
console.log(1 ** 5);
console.log(1 % 5);

// 2. Operator Penugasan
/**
 * 1. Operator Penugasan (=)
 * 2. Operator Penugasan dan Penjumlahan (+=)
 * 3. Operator Penugasan dan Pengurangan (-=)
 * 4. Operator Penugasan dan Perkalian (*=)
 * 5. Operator Penugasan dan Pembagian (/=)
 * 6. Operator Penugasan dan Perpangkatan (**=)
 * 7. Operator Penugasan dan Sisa Bagi (%=)
 */

let angka1 = 10;
console.log((angka1 += 5));
console.log((angka1 -= 10));
console.log((angka1 *= 5));
console.log((angka1 /= 10));
console.log((angka1 **= 2));
console.log((angka1 %= 4));

// 3. Operator Perbandingan
/**
 * 1. Operator Sama Dengan (==/===)
 * 2. Operator Tidak Sama Dengan (!=/!==)
 * 3. Operator Lebih Besar (>)
 * 4. Operator Lebih Besar dan Sama Dengan (>=)
 * 5. Operator Lebih Kecil (<)
 * 6. Operator Lebih Kecil dan Sama Dengan (<=)
 */

console.log(5 === 5);
console.log(5 !== 5);
console.log(5 > 5);
console.log(5 >= 5);
console.log(5 < 5);
console.log(5 <= 5);

// 4. Operator Logika
/**
 * 1. Operator AND (&&) : Harus semua kondisi true, maka nilainya true
 * 2. Operator OR (||) : Jika ada salah satu saja kondisi true, maka nilainya true
 * 3. Operator NOT (!) : Kebalikkan nilainya
 */

let sudahMakan = true;
let sudahCuciPiring = false;

console.log(sudahMakan && sudahCuciPiring);
console.log(sudahMakan || sudahCuciPiring);
console.log(!sudahMakan);

// Note :
// Operand -> Variabel yang di operasikan oleh operator
// Operator -> Simbol yang mengoperasikan operand
// Operasi -> Kegiatan yang dilakukan Simbol kepada operand

// 5. Operator Unary -> 1 Operand
let x = 5;
console.log(++x);
// 6. Operator Binary -> 2 Operand
console.log(5 + 10);
// 7. Operator Ternary -> 3 Operand
let isLogged = false;
let sudahLogin = isLogged ? 'Sudah Login' : 'Belum Login';
console.log(sudahLogin);
