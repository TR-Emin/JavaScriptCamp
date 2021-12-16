// function singleThread() {

//     new Promise(resolve => {
//         console.log("Single Thread fonksiyonu çalışmaya başladı")

//         setTimeout(() => {
//             console.log('Single Thread içindeki 3 saniye bekleyen kod çalıştı')
//         }, 3000);

//         console.log("Single Thread son log u yazıyor")


//     });
// }

//     function func() {
//     console.log("Func fonksiyon çalıştı")
// }

// singleThread()

// func()



console.log("merhabaa")

let dolarDun = 9.20

{
    let dolarDun = 9.50
}
console.log(dolarDun)
let dolarBugun = 9.60

const euroDun = 11.2
console.log(euroDun)

// Dizi tanımlama
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "x konut kredisi"]
console.log(konutKredileri)

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")

console.log("1. ders sonu")


