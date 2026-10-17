// If Statement
let isLogin = false;
if (isLogin === true) {
  console.log("User sudah login");
} else {
  console.log("User belum login");
}

let nilai = 0;

if (nilai >= 91 && nilai <= 100) {
  console.log("Grade A");
} else if (nilai >= 81 && nilai <= 90) {
  console.log("Grade B");
} else if (nilai >= 71 && nilai <= 80) {
  console.log("Grade C");
} else if (nilai <= 70 && nilai >= 0) {
  console.log("Grade D");
} else {
  console.log("Nilai tidak valid");
}

// Switch Case
let trafficLight = "HIJAU";

switch (trafficLight.toLowerCase()) {
  case "merah":
    console.log("Berhenti");
    break;
  case "kuning":
    console.log("Siap-siapp");
    break;
  case "hijau":
    console.log("Jalan...");
    break;
  default:
    console.log("Lampu rusak");
}
