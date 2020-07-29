// Soal 1

// Fungsi Luas Lingkaran
const luasLingkaran = (d) => { return ((22/7)*(d*d))/4 } 
// Fungsi Keliling Lingkaran
const kelilingLingkaran = (d) => { return (22/7)*d }
let d = 28
console.log("Luas lingkaran dengan diameter " + d + " yaitu " + luasLingkaran(d))
console.log("Keliling lingkaran dengan diameter " + d + " yaitu " + kelilingLingkaran(d))
console.log()

// Soal 2

let kalimat = ""

const kataPertama = 'saya'
const kataKedua = 'adalah'
const kataKetiga = 'seorang'
const kataKeempat = 'frontend'
const kataKelima = 'developer'

let tambahKata = () => {
    kalimat = `${kataPertama} ${kataKedua} ${kataKetiga} ${kataKeempat} ${kataKelima}`
    return kalimat
}
console.log(tambahKata())
console.log()

// Soal 3

class Book {
    constructor(name, totalPage, price){
        this.name = name
        this.totalPage = totalPage
        this.price = price
    }
}
class Komik extends Book {
    constructor(name, totalPage, price, isColorful){
        super(name,totalPage,price)
        this.isColorful = true
    }
}
books = new Book("Marketing 4.0", 450, 80000)
console.log(books)
books = new Komik("Shaman King", 160, 24000)
console.log(books)