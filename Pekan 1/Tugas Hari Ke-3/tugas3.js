// Soal 1

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var upper = kataKeempat.toUpperCase();

console.log(kataPertama.concat(" ", kataKedua," ", kataKetiga," ", upper))
console.log()


// Soal 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var jumlahAngka = Number(kataPertama) + Number(kataKedua) + Number(kataKetiga) + Number(kataKeempat);

console.log("Jumlah dari " + Number(kataPertama) + " + " + Number(kataKedua) + " + " + Number(kataKetiga) + " + " + Number(kataKeempat) + " adalah " + jumlahAngka)
console.log()


// Soal 3

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); 
var kataKetiga = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24); 
var kataKelima = kalimat.substring(25, 31); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
console.log()


// Soal 4

var nilai; // = prompt("Masukkan Angka dari 0 sampai 100");
var nilai = 75;

if (nilai >= 80 && nilai <= 100) {
    console.log("Angka " + nilai + " yang anda masukkan akan mendapatkan index A")
} else if (nilai >= 70 && nilai < 80) {
    console.log("Angka " + nilai + " yang anda masukkan akan mendapatkan index B")
} else if (nilai >= 60 && nilai < 70) {
    console.log("Angka " + nilai + " yang anda masukkan akan mendapatkan index C")
} else if (nilai >= 50 && nilai < 60) {
    console.log("Angka " + nilai + " yang anda masukkan akan mendapatkan index D")
} else if (nilai >= 0 && nilai < 50) {
    console.log("Angka " + nilai + " yang anda masukkan akan mendapatkan index E")
} else {
    console.log("Angka " + nilai + " tidak termasuk angka 0 sampai 100")
} 
console.log()


// Soal 5

var tanggal = 22;
var bulan = 3;
var tahun = 1995;

switch(bulan) {
  case 1:  { console.log(tanggal + ' Januari ' + tahun); break; }
  case 2:  { console.log(tanggal + ' Februari ' + tahun); break; }
  case 3:  { console.log(tanggal + ' Maret ' + tahun); break; }
  case 4:  { console.log(tanggal + ' April ' + tahun); break; }
  case 5:  { console.log(tanggal + ' Mei ' + tahun); break; }
  case 6:  { console.log(tanggal + ' Juni ' + tahun); break; }
  case 7:  { console.log(tanggal + ' Juli ' + tahun); break; }
  case 8:  { console.log(tanggal + ' Agustus ' + tahun); break; }
  case 9:  { console.log(tanggal + ' September ' + tahun); break; }
  case 10: { console.log(tanggal + ' Oktober ' + tahun); break; }
  case 11: { console.log(tanggal + ' November ' + tahun); break; }
  case 12: { console.log(tanggal + ' Desember ' + tahun); break; }
  default: { console.log('Mohon masukkan angka sesuai urutan bulan dalam kalender'); }}

console.log()