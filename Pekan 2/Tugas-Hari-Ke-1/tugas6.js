// Soal 1

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var arrayDaftarPeserta = {
    nama:"Asep", jeniskelamin:"laki-laki", hobi:"baca buku", tahunlahir:1992
}

console.log(arrayDaftarPeserta)
console.log()

// Soal 2

var buahObj = [
    {nama:"Strawberry", warna:"Merah", biji:"Tidak", harga:9000}, 
    {nama:"Jeruk", warna:"Oranye", biji:"Ada", harga:8000}, 
    {nama:"Semangka", warna:"Hijau & Merah", biji:"Ada", harga:10000}, 
    {nama:"Pisang", warna:"Kuning", biji:"Tidak", harga:5000}
]

console.log(buahObj[0])
console.log()

// Soal 3

var dataFilm = []

function tambahFilm(data){
    dataFilm.push(data)
}

var data = { nama:"Inception", durasi:"148 menit", genre:"Fiksi", tahun:"2010" }

tambahFilm(data)
console.log(dataFilm)
console.log()

// Soal 4

// Release 0
class Animal {
    constructor(nameAnimal){
        this.animalName = nameAnimal
        this.legs = 4
        this.cold_blooded = false
    }
    get name() { return this.animalName }
}

var sheep = new Animal("shaun")
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
console.log()

// Release 1

class Ape extends Animal {
    constructor(nameAnimal,legs){
        super(nameAnimal)
        this.legs = 2
    }
    yell(){ return this.yell = "Auooo" }
}

class Frog extends Animal {
    constructor(nameAnimal){
        super(nameAnimal)
    }
    jump(){ return this.jump = "hop hop" }
}

var sungokong = new Ape("kera sakti")
sungokong.yell()
console.log(sungokong)

var kodok = new Frog("buduk")
kodok.jump()
console.log(kodok)

console.log()

// Soal 5

class Clock {
    constructor({template}){
        var timer
    
        function render() {
            var date = new Date()
    
            var hours = date.getHours()
            if (hours < 10) hours = '0' + hours
        
            var mins = date.getMinutes()
            if (mins < 10) mins = '0' + mins
        
            var secs = date.getSeconds()
            if (secs < 10) secs = '0' + secs
        
            var output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs)
        
            console.log(output)
        }

        this.stop = function() {
            clearInterval(timer)
        }

        render()
        this.start = function() {
            render()
            timer = setInterval(render, 1000)
        }
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();