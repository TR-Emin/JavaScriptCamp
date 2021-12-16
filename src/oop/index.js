// Kamp 1. hafta ödevi

// Obje tanımlama
let student = {
    id: 1,
    name: "Muhammet"
}
console.log(student.id)
console.log(student)
console.log(student.name)

function save(ogrenci, puan = 10) {
    console.log(ogrenci.name + " " + puan)
}

save(student, 80)

// typeof --> Değişken tipi öğrenmek 
console.log("Save in tipi: " + typeof save)

// rest parameter --> ...
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products[0])

}

console.log("showProducts in tipi: " + typeof showProducts)

showProducts(10, ["Elma", "Armut", "KelMahmut"])

// spread --> ... diziyi parçalamak
let points = [1, 2, 3, 4, 50, 4, 60, 14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC", "D", ..."EFG", "H")


// Destructuring
let populations = [10000, 20000, 30000,[40000,100000]]
let [small, medium, high,[veryHigh,maximum]]=populations   
// small medium ve high değişkenleri oluşturuldu, populations un içindeki değerler sırasıyla bu değişkenlere atandı
// buna destructuring denir.

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)


// Fonksiyon parametrelerinden [small1] in anlamı
// --> bana bir dizi gelecek, o dizinin il elemanını small1 e atayacağım
// burada da destructuring yapıldı
function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)


let category={id:1, name:"içecek"}
console.log(category.name)
console.log(category["name"])

// obje destructuring
let {id,name}=category
console.log(id)
console.log(name)
console.log(typeof name)
console.log(typeof id)



class Customer {

    constructor(id, customerNumber) {
        // prototyping --> this kelimesi ile Customer in oluşturulan bir örneğine id ve customerNumber 
        // isimlerinde özellikler oluşturup değerlerine de constructor dan gelen değerleri atadık.
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1, "12345")

// prototyping --> nesnenin bir örneğine(customer) sahip olmadığı bir özellik verdik (name) ve içini doldurup logladık.
customer.name = "Muhammet Emin Aslangil"
console.log(customer.name)

// prototyping --> nesneye(Customer) sahip olmadığı bir özellik verdik (bisey) ve içini doldurup logladık.
Customer.bisey = "bişey"
console.log(Customer.bisey)

console.log(customer.id)
console.log(customer.customerNumber)

class IndividualCustomer extends Customer {
    constructor(firstName, id, customerNumber) {
        super(id, customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer {
    constructor(companyName, firstName, id, customerNumber) {
        super(id, customerNumber)
        this.companyName = companyName
    }
}

let individualCustomer= new IndividualCustomer("muhammet",1,15)
console.log(individualCustomer.id+"  "+individualCustomer.firstName+"  "+individualCustomer.customerNumber)

let products=[
    {id:1, name:"Acer Laptop", unitPrice:15000},
    {id:2, name:"Asus Laptop", unitPrice:16000},
    {id:3, name:"Hp Laptop", unitPrice:13000},
    {id:4, name:"Dell Laptop", unitPrice:12000},
    {id:5, name:"Toshiba Laptop", unitPrice:17000},
    
]

console.log("<ul>")
products.map(product => console.log("<li> "+ product.name +"</li>"))
products.map(product => console.log(`<li> ${product.name} </li>`))
console.log("</ul>")

products.map(product => {
    console.log(product)
    console.log(`<li> ${product.name} </li>`)
})

let filterProducts = products.filter(product => product.unitPrice>12000)
console.log(filterProducts)


// acc --> toplam değer
let cartTotal = products.reduce((acc,product) => acc+product.unitPrice,0)
console.log(cartTotal)
