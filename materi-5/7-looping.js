// 1. For Loop (Countable Looping)
for (let i = 1; i <= 5; i = i + 1) {
  console.log(i);
}

// 2. While Loop (Uncountable Looping)
let count = 1;
while (count <= 5) {
  console.log("Hitungan ke-" + count);
  count = count + 1;
}

// 3. Do While Loop (Uncountable Looping)
let angka = 1;
do {
  console.log("Angka:", angka);
  angka++;
} while (angka <= 5);
