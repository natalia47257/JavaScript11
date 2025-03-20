// Создать класс с именем Transaction,который в конструкторе получает сумму транзакции(amount), описание транзакции(description), категорию(actegory), где поле amount является приватным. И создать геттер для получения amount

class Transaction{
  #amount;
  test = "Тестовое поле"
  constructor (description, category, amount, ) {
    if(typeof amount !== "number") {
      throw new Error("Сумма должна быть чмслом")
    }
    this.description = description
    this.category = category
    this.#amount = amount

    //this.test = "Тестовое поле"
  }

  get amount() {
  return this.#amount; // Геттер для получения суммы транзакции
  }
}

// Добавить валидацию для числа

let trans1 = new Transaction ("Buying", "Product", 500)

console.log(trans1);

// super ссылается на constructor класса справа от extends
class Income extends Transaction {  // класс Income наследуется от класса Transaction
  static type = "Доход"
  constructor(amount1, description1) {
  super(description1, Income.type, amount1) // без super будет ошибка, super инициализирует данные их transaction
  //this.test = "Hello world"
  console.log(this.amount);
  
  }
}

let i = new Income(100, "Зарплата"); // i - экземпляр класса доходов
// console.log(i.test);
// пртоттотип - это чертеж, из которого может быть наследовано ....
 


// class Animal {
//   speed = 1
//   constructor() {

//   }
// }

// move() {

// }

// __proto__ это ссылка на prototype объекта от которого создан этот элемент
// prototype это свойство которое есть у функции(кроме стрелочных) и у классов.

// Задача.
// Создать класс Account который при создании получает имя пользователья. Внутри класса Account есть статические свойсто accounts который является массивом, есть обычное свойство transactions который тоже является массивом и приватное свойство balance со значением по умолчанию 0. Каждый раз при создании экземпляра Account добавить нового пользователья в static массив accounts, выводить в консоли "Аккаунт создан для ${имя}"
// Создать метод addTransaction(trx) для класса Account который поулчает в себе параметры транзакцию, меняет баланс у Account, и выводит в консоли просто данные транзакции
// this.#balance += trx.amount
// john.addTransaction(new Income(100, "Зарплата"))
// john.balance

class Account {
  #balance = 0
  static accounts = [] 
  transactions = [] // будут транзакции конкретного пользователя
    constructor(username) { 
      this.username = username
      

      Account.accounts.push(this); // Добавление аккаунта в static массив accounts
      console.log(`Аккаунт создан для ${username}`); 
    }
    get balance() {
      return this.#balance
    }
    addTransaction(trx) {
      this.#balance += trx.amount
      this.transactions.push(trx)
    }

    get transactions() {
      return this.transactions
    }
}


const john = new Account("John")
john.addTransaction(new Income(1000, "Зарплата"))
john.addTransaction(new Income(350, "Премия"))
console.log(john.balance);
console.log(john.transactions);

//https://pastebin.com/fiQppksU


