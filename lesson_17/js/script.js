// function Person(name, age) {
// // let this = {}
// this.name = name
// this.age = age

// // return 5 // не влияет на результат
// // return {
// // test: "test object"
// // }
// // return this
// }
// const user1 = new Person("John", 25)
// console.log(user1)

// class Person {
//   constructor(username, age=18) { // если пошьзователь не указывает возраст, то будет 18лет
//     this.name = username
//     this.age = age
//   }

// //   setName(username){
// //     this.name = username
// //   }
// //   setAge(age) {
// //     this.age = age
// //   }
// // }


//   setName(username) {
//     // ...
//     this.name = username
//   }

//   incrementAge() {
//     this.age++
//   }
// }

// let user1 = new Person("John", 25)
// user1.name = "Jack"
// user1.incrementAge()
// console.log(user1);

// this - способ при помощи которого мы обращаемся к классу внутри которого мы находимся
//

// Создать класс для создания продукта, у которого есть имя, описание, цена, количество. Создать методы для изменения цены и метод sale() который уменьшает на 1 колисечство продукта 

// description

class Product {
  constructor(title, description, price, count) {
    this.title = title
    this.description = description
    this.price = price
    this.count = count
  }
  
  sale() {
    if (this.count !== 0) {
      this.count--
      return
    }
    throw new Error("Продукта больше нет")
  }
  
  setPrice(price) {
    if (price >= 0) {
      this.price = price
    return
    }
  throw new Error("Отрицательная цена не принимается")
  }
}

let notebook = new Product("Notebook", "asgasg", 1000, 15)
console.log(notebook)
notebook.sale()
console.log(notebook)
notebook.setPrice(100)
console.log(notebook)

//https://pastebin.com/H6uM1VGG 
class Person {
  static roles = ["student", "lecture", "employer"]
  static createdPerson = [] //

  // let this = {
  //   card: "0000000 465"
  // }
  #card = "0000000 465" // # свойство доступно только внутри класса
 


  constructor(firstname, lastname, age = 18, balance) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.balance = balance
    //this.card = "0000000 465"

    Person.createdPerson.push(this) //
  }

  get card() { // для чтения, Гетеры и сетеры можно создать только внутри класса
    return this.#card
  }
  
  set card(value) { // для изменеия
    this.#card = value
  }
  
  static getTotalBalance() {
    return Person.createdPerson.reduce((acc, user) =>
    acc + user.balance, 0)
  }


  setRole(role) {
    console.log(role);
    if (Person.roles.includes(role)) {
      this.role = role
      return
    }
    throw new Error("Недопустимая роль")
  }

  incrementAge() {
    this.age++
  }
}

let person1 = new Person("John", "Doe", "student", 25, 100)
person1.setRole("student")
console.log(Person.roles)
console.log(person1);
console.log(person1.card);


let person2 = new Person("Jane", "Doe", 25, 123)
let person3 = new Person("Jane", "Doe", 25, 124)
let person4 = new Person("Jane", "Doe", 25, 50)

let getTotalBalance = Person.getTotalBalance()
console.log(getTotalBalance);

// сравнисть содержание кода с ссылкой  и исправить


