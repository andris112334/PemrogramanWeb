let selectedLanguage = 'javascript';
let codeContent = '';
let isLoading = false;

// Contoh Comment
/**
 * Contoh Multi-line Comment
 */

let nama;               // diawali huruf
let _alamat;            // diawali underscore
let $telepon;           // diawali dollar sign
let namaLengkap;        // camelCase
let umur2;              // mengandung angka di belakang
let _data$Sementara3;   // kombinasi underscore, dollar, dan angka

// contoh menggunakan var
var name = "John";

// contoh menggunakan let
let umur = 25;

// contoh menggunakan const
const PI = 3.14;

let a = 10, b = 3;
console.log("Penjumlahan:", a + b);       // 13
console.log("Pengurangan:", a - b);       // 7
console.log("Perkalian:", a * b);         // 30
console.log("Pembagian:", a / b);         // 3.333...
console.log("Modulus:", a % b);           // 1
console.log("Pangkat:", a ** b);          // 1000

let x = 5;
x += 3;  // Sama dengan x = x + 3
console.log("Hasil x += 3:", x);  // 8

let c = 5;  // 0101
let d = 3;  // 0011
console.log("Bitwise AND:", c & d);  // 1
console.log("Bitwise OR:", c | d);   // 7
console.log("Bitwise XOR:", c ^ d);  // 6
console.log("Bitwise NOT:", ~c);     // -6

let m = 10, n = "10";
console.log("m == n:", m == n);     // true
console.log("m === n:", m === n);   // false
console.log("m > 5:", m > 5);       // true
console.log("m <= 10:", m <= 10);   // true

let isLoggedIn = true;
let isSecurity = false;
console.log("&&:", isLoggedIn && isSecurity); // false
console.log("||:", isLoggedIn || isAdmin); // true
console.log("!:", !isLoggedIn);            // false

let firstName = "Naufal";
let lastName = "Akbar";
console.log("Nama lengkap:", firstName + " " + lastName);  // Naufal Akbar

let angkaBulat = 100;         // bilangan bulat (integer)
let angkaDesimal = 3.14;      // bilangan desimal (float)

let namaDepan = 'Naufal';
let namaTengah  = 'Akbar';
let namaBelakang = "Nugroho";

let sudahLogin = true;
let isAdmin = false;
let perbandingan = 10 > 5; // true

const text = "Halo, Saya Naufal Akbar Nugroho";
text ? console.log("ini kondisi jika true") : console.log("ini kondisi jika false");

const screenSize = 512

// switch (true) {
//   case (screenSize.width <= 374):
//     return 'Mobile XS';
//   case (screenSize.width >= 375 && screenSize.width <= 424):
//     return 'Mobile M';
//   case (screenSize.width >= 425 && screenSize.width <= 765):
//     return 'Mobile L';
//   case (screenSize.width >= 768 && screenSize.width <= 1023):
//     return 'Tablet';
//   case (screenSize.width >= 1024 && screenSize.width <= 1439):
//     return 'Laptop';
//   case (screenSize.width >= 1440 && screenSize.width <= 2559):
//     return 'Laptop LG';
//   case (screenSize.width >= 2560):
//     return 'Laptop XL';
//   default:
//     return 'Unknown';
// }

for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

let j = 1;
while (j <= 5) {
  console.log("Iterasi ke-" + j);
  j++;
}

let k = 1;
do {
  console.log("Iterasi ke-" + k);
  k++;
} while (k <= 5);
