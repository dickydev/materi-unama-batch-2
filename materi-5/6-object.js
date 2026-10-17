let user = {
  nama: "Budi",
  umur: 25,
  isAdmin: true,
  alamat: {
    kota: "Tangerang",
    kodePos: "123123",
  },
};

console.log(user);
console.log(user.nama);
console.log(user["nama"]);
console.log(user.alamat.kota);

const {
  nama: fullName,
  umur,
  isAdmin,
  alamat: { kota = "Jakarat", kodePos },
} = user;
console.log(fullName);
console.log(kota);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
