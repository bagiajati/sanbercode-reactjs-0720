// Soal 1

var pertama = 1;
console.log('LOOPING PERTAMA')
while(pertama <= 20) {
    if(pertama % 2 == 0){
        console.log(pertama + ' - I love coding')
        pertama++;
    } else { pertama++; }
}

var kedua = 20;
console.log('LOOPING KEDUA')
while(kedua >= 2) {
    if(kedua % 2 == 0){
        console.log(kedua + ' - I will become a frontend developer')
        kedua--;
    } else { kedua--; }
}
console.log()


// Soal 2

for(var a = 1; a <= 20; a++){
    if(a % 2 == 1){
        if(a % 2 == 1 && a % 3 == 0){
            console.log(a + ' - I Love Coding')
        }
        else { console.log(a + ' - Santai')}
    } else { console.log(a + ' - Berkualitas')}
}
console.log()


// Soal 3

var s = '';
for(var i = 0; i < 7; i++){
	for(var j = 0; j <= i; j++){
		s += '#';
	}
	s += '\n';
}
console.log(s)
console.log()


// Soal 4

var kalimat = "saya sangat senang belajar javascript";
var kata = kalimat.split(" ");
console.log(kata)
console.log()


// Soal 5

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort()
var ngurut = daftarBuah.join('\n')
console.log(ngurut)
