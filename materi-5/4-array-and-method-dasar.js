// Array
const buahBuahan = [
  "apel",
  "mangga",
  "jeruk",
  "pepaya",
  "semangka",
  "persik",
  "cherry",
  "anggur",
];
console.log(buahBuahan[0]);

// Method
// 1. Push -> Menambahkan item array dari paling akhir
buahBuahan.push("sirsak");
console.log(buahBuahan);
// 2. Unshift -> Menambahkan item array dari paling awal
buahBuahan.unshift("alpukat");
console.log(buahBuahan);

// 3. Pop -> Menghapus item array dari paling akhir
buahBuahan.pop();
console.log(buahBuahan);

// 4. Shift -> Menghapus item array dari paling awal
buahBuahan.shift();
console.log(buahBuahan);

// 5. Splice
buahBuahan.splice(3, 2);
console.log(buahBuahan);

buahBuahan.splice(3, 0, "pepaya");
console.log(buahBuahan);

buahBuahan.splice(4, 1, "semangka");
console.log(buahBuahan);
