var readBooksPromise = require('./promise.js')
const readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Code untuk menjalankan function readBooksPromise
function readBook() {
    readBooksPromise(10000, books[0]).then(function(sisaWaktu) {
        console.log(sisaWaktu)
        if(sisaWaktu > 0) {
            readBooksPromise(sisaWaktu, books[1]).then(function(sisaWaktu) {
                console.log(sisaWaktu)
                if(sisaWaktu > 0) {
                    readBooksPromise(sisaWaktu, books[2]).then(function(sisaWaktu) {})
                }
            })
        }
    })
}
readBook()