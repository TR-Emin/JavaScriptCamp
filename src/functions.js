function addToCart(quantity, productName = "defaultName") {
    console.log("Ürün sepete eklendi: " + productName + " Adet: " + quantity)
}

addToCart()
addToCart(10)
addToCart(10, "Elma")


//Fonksiyon
let sayHello = () => {
    console.log("Hello World!")
}
sayHello()

//Fonksiyon
let sayHello2 = function () {
    console.log("Hello World2")
}
sayHello2()

function addToCart2(productName, quantity, unitPrice) {

}

addToCart2("Elma", 3, 10)
addToCart2("Armut", 2, 15)
addToCart2("Limon", 2, 20)



let product1 = {
    productName: "Elma",
    unitPrice: 10,
    quantity: 5
}

function addToCart3(product) {
    console.log("Ürün : " + product.productName + " - Ürün birim fiyatı : " + product.unitPrice +
        " - Ürün adedi : " + product.quantity + " - Toplam fiyat : " + (product.unitPrice * product.quantity))
}

addToCart3(product1)

let product2 = {
    productName: "Elma",
    unitPrice: 10,
    quantity: 5
}

let product3 = {
    productName: "Elma",
    unitPrice: 10,
    quantity: 5
}

product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)
console.log(product2.productName)



function addToCart4(products) {
    console.log(products)
}

let products = [product1, product2, product3, {
    productName: "Yeni Ürün",
    unitPrice: 10,
    quantity: 5
}]

addToCart4(products)




function add(number1, number2) {
    console.log(number1 + number2)
}

add(2, 3)

// Rest operator ile fonksiyon 
// Rest operatorlü parametreyi hep en sona yaz
function add2(...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)

}


add2(20, 30, 50, 1)
add2(10, 150, 23, 11)
add2(1)


console.log(Math.max(10, 50, 600, 12))

let numbers = [10, 40, 500, 18]

// spread operatörü
// dizi parametresini parçalayarak verir
console.log(Math.max(...numbers))



// Birden fazla değişken oluşturup, değişkenlerin içine obje atama 
// Destructuring --> Gelen veri yapısına değişkenlere sırasıyla doğru biçimde değerleri atandı.
let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [{
        name: "İç Anadolu",
        populations: "20M"
    },
    {
        name: "Marmara",
        populations: "30M"
    },
    {
        name: "Karadeniz",
        populations: "10M"
    },
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"]

    ]
]

console.log(icAnadolu.name)
console.log(icAnadolu.populations)
console.log(marmara)
console.log(karadeniz)
console.log("İç Anadolu Şehirleri: " + icAnadoluSehirleri)



// let newProductName, newUnitPrice, newQuantity({
//     productName: newProductName,
//     unitPrice: newUnitPrice,
//     quantity: newQuantity
// } = {
//     productName: "Elma",
//     unitPrice: 10,
//     quantity: 5
// })

// console.log(newProductName)

// 2.Ders sonu



// 2. Hafta ödev
//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
// (Araştırma konusu : şart blokları : if )

function asalMi(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == 2) {
            console.log("Asal: 2")
            continue
        }
        for (let j = numbers[i] - 1; j >= 2; j--) {

            if (numbers[i] % j == 0) {
                break
            }
            if (j == 2) {
                console.log("Asal: " + numbers[i])
            }
        }

    }
}

asalMi(3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 17)
asalMi(6, 7, 8, 9, 10, 11, 13, 15, 16, 17)



// Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız
// İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.
// Örnek: 220 ve 284
// 220 : 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284 
// 284 : 1 + 2 + 4 + 71 + 142 = 220


console.log("---------------------------------")
console.log("Arkadas sayilar")

function arkadasSayiMi(sayi1, sayi2) {
    let sayi1BolenleriToplami = 0
    let sayi2BolenleriToplami = 0

    for (let i = 1; i < sayi1; i++) {
        if (sayi1 % i == 0) {
            sayi1BolenleriToplami = sayi1BolenleriToplami + i
        }
    }

    for (let i = 1; i < sayi2; i++) {
        if (sayi2 % i == 0) {
            sayi2BolenleriToplami = sayi2BolenleriToplami + i
        }
    }

    if (sayi1BolenleriToplami == sayi2 && sayi2BolenleriToplami == sayi1) {
        console.log(sayi1 + " ve " + sayi2 + " arkadaş sayılardır")
    } else {
        console.log(sayi1 + " ve " + sayi2 + " arkadaş sayı değillerdir")
    }
}

arkadasSayiMi(220, 284)


//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
//Mükemmel sayı, sayılar teorisinde, kendisi hariç pozitif tam bölenlerinin toplamı kendisine eşit olan sayı.
// Diğer bir ifadeyle, bir mükemmel sayı, bütün pozitif tam bölenlerinin toplamının yarısına eşittir
// 6 --> 1 + 2 + 3
// 28 --> 1 + 2 + 4 + 7 + 14

console.log("---------------------------------")
console.log("Mükemmel sayilar")

function mukemmelSayiMi() {

    for (let i = 2; i < 1000; i++) {
        let bolenlerToplami = 0
        for (let j = i - 1; j > 0; j--) {
            if (i % j == 0) {
                bolenlerToplami = bolenlerToplami + j
            }
            if (j == 1) {
                if (bolenlerToplami == i) {
                    console.log(i + " mükemmel sayıdır")
                }
            }
        }
    }
}

mukemmelSayiMi()


// 1000'e kadarki tüm asal sayıları listeleyiniz

console.log("-------------------")
console.log("1000 e kadarki asal sayılar")

function asalMi(sayi) {
    if (sayi == 2) {
        console.log("Asal: 2")
    } else {
        for (let i = 2; i < sayi; i++) {
            if (sayi % i == 0) {
                break
            }
            if (i == (sayi - 1)) {
                console.log("Asal: " + sayi)
            }
        }
    }
}

for (let i = 2; i < 1000; i++) {
    asalMi(i)
}