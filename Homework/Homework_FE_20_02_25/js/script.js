// 1 уровень сложности: 1. Создайте класс Car с свойствами mark (марка), model (модель) и year (год выпуска). Добавьте метод age(), который вычисляет возраст автомобиля (на основе текущего года).
class Car {
    constructor (mark, model, year =1999){
        this.mark = mark
        this.model = model
        this.year = year
    }
    age() {
        const currentYear = new Date().getFullYear()// date содержит текущую дату и время, .getFullYear() - извлечет только год
        return currentYear - this.year
    }
}

// Создаем экземпляр класса
let car1 = new Car("Toyota", "Carolla", 2000);
console.log(`Возраст автомобиля: ${car1.age()} лет`); // 25 лет

let car2 = new Car("Tesla", "Model S", 2025);
console.log(`Возраст автомобиля: ${car2.age()} лет`); //0 лет

let car3 = new Car("Ford", "Mustang", 2027);
console.log(`Возраст автомобиля: ${car3.age()} лет`); //-2 лет

const currentYear = new Date().getFullYear()
console.log(currentYear);// 2025 год



// 2.Модифицируйте класс Person, добавив новое свойство email и метод change_email(newEmail), который меняет email только если новый email содержит символ "@" и ".", иначе выбрасывает исключение.
class Person {
    static roles = ["student", "lecturer", "employer"]
    static createdPersons = [] // массив, который принадлежит самому классу, а не отдельному обьекту. Он общий для всех экземпляров класса. В нем будут хранится все созданные обьекты.
    #card;
  
    constructor(firstname, lastname, age = 18, balance = 0, cardData, email) {
      this.firstname = firstname
      this.lastname = lastname
      this.age = age
      this.balance = balance
      this.#card = cardData

      //Проверяем email перед установкой    
      this.setEmail(email);
  
      // Добавляем созданный обьект в статический массив createdPersons, который хранит всех созданных людей (Person)
      Person.createdPersons.push(this) 
        }
        //
        change_email(newEmail) {
            this.setEmail(newEmail)
        }
        //
       setEmail(email) {
        if (email.includes('@') && email.includes('.')) {
            this.email = email
        } else {
            throw new Error ("Неверный формат Email");
        }
       }
    //   if (email.includes('@') && email.includes('.')){
    //     this.email = email
    //     } else {
    //     throw new Error ("Неверный формат Email");
    //     }

   
    // change_email(newEmail){
    //     if (newEmail.includes('@') && newEmail.includes('.')){
    //         this.email = newEmail
    //     } else {
    //         throw new Error ("Неверный формат Email");
    //     }
}


// Оператор new Person (...) cоздает новый обьект person1 по шаблону класса Person,заполняя его данными и добавляя в общий список Person.createdPersons
// person1 - новый обьект класса Person - это экземпляр класса Person, созданный с помощью оператора new.  Oн создается с помощью конструктора Person, который задает свойства обьекта
const person1 = new Person("Natalia", "P", 25, 1000, "1234-1234-1234-1234", "nataliP.3446@gmail.com")
console.log(`Текущий Email: ${person1.email}`);
console.log(`Имя: ${person1.firstname}`);
console.log(person1.email);


const person2 = new Person("Katia", "N", 20, 800, "2234-2234-2234-2234", "katiaN.3446@gmail.com")
console.log(person2.email);

person1.change_email("new.email@example.com")
//console.log(`Новый Email: ${person1.newEmail}`);
console.log(person1.email);

// что-то не то выводит???
//person1.change_email("newemail@examplecom")
//console.log(`Новый Email: ${person1.newEmail}`);
//console.log(person1.email);



// 3. Создайте класс Library, который хранит статический массив книг. Каждая книга – это объект с свойствами title и author. Добавьте статический метод addBook(book), который добавляет книгу в библиотеку, и статический метод listBooks(), который выводит список книг в консоль.
class Library{
    static books = []; // статический массив для хранения книг

    // Статический  метод для добавления книги
    static addBook(book) {
        try{
            if (book.title.trim() && book.author.trim()) {
            this.books.push(book); // добавление обьекта book в массив books
            } else {
                throw new Error("Каждая книга должна иметь название и автора");
        } 
     } catch (error) {
             console.error("error.message")
            }
        }
    
    // Метод для вывода списка книг
    static listBooks(){
        if (this.books.length === 0) {
            console.log("В библиотеке нет книг");
        } else {
            console.log("Список книг в библиотеке:");
            this.books.forEach((book, index) => {
                console.log(`${index + 1}. "${book.title}" - ${book.author}`);  
            });
        }
    }
}

// this.books - обращение к статическому свойству books внутри класса Library
// push(book) - метод массива, который добавляет новый элемент (book) в конец массива books
// метод trim удаляет все пробелы в начале и в конце строки и возвращает новую строку без пробелов, проверяет строку на пустоту

// Пример добавления книг
Library.addBook({title: "Гамлет", author: "Уильям Шекспир"});
Library.addBook({title: "Война и мир", author: "Лев Толстой"});
Library.addBook({title: " ", author:  "Неивестный автор"});
Library.listBooks();


// 4. Создайте класс Rectangle с приватными свойствами #width и #height. Реализуйте геттеры и сеттеры для этих свойств, чтобы ширина и высота могли устанавливаться только положительными числами. Добавьте метод area(), который возвращает площадь прямоугольника.
class Rectangle {
// Приватные свойства
    #width;
    #height;
    //Конструктор для создания прямоугольника с заданными размерами
    constructor(width, height){
        this.setWidth(width) // устанавливаем ширину через setter
        this.setHeight(height) // устанавливаем высоту через setter
    }

    // геттеры get width() и get height() возвращают свойства приватных свойств
    get width() {
        return this.#width;
    }
    set width(value) {
        this.setWidth(value);
    }
    get height() {
        return this.#height;
    }
    set height(value) {
        this.setHeight(value);
    }
      // сеттеры set width(value) и set height(value) проверяют, что переданное значение положительное и если это так устанавливают соотв-щие значения для приватных свойств
    setWidth(width) {
        if (width > 0) {
            this.#width = width;
        } else {
           throw new Error("Ширина долдна быть положительным числом");
        }
    }
    
        setHeight(height) {
            if (height > 0) {
                this.#height = height;
            } else {
               throw new Error("Высота долдна быть положительным числом"); 
            }
        }
        //Mетод для вычисления площади прямоугодьника
        area() {
            return this.#width * this.#height
        }
}

try {
    const rect = new Rectangle(5, 8)
    console.log(`Ширина: ${rect.width}`);
    console.log(`Высота: ${rect.height}`);
    console.log(`Площадь: ${rect.area()}`);
} catch (error) {
    console.error(error.message)
}

//const rect = new Rectangle(-5, 8);
//const rect2 = new Rectangle(-5, 0);

// 5. Создайте класс BankAccount с приватным свойством #balance. Реализуйте методы для депозита и снятия средств. Добавьте геттер для получения текущего баланса. При попытке снять сумму, большую чем баланс, выбрасывайте исключение. Затем создайте статический метод, который ведёт учёт всех созданных счетов (например, массив accounts) и статический метод для расчёта общего баланса всех счетов.

class BankAccount {
    // Приватное свойство для хранения баланса, то есть он доступен только внутри класса и не может быть изменен напрямую извне
    #balance;
  
    // Статическое свойство, принадлежащее всему классу BankAccount, а не отдельным обьектам. В нем хранятся все созданные счета
    static accounts = [];
  
    // Конструктор для создания счёта с начальным балансом
    constructor(initialBalance = 0) {
      this.#balance = initialBalance; // устанавливает переданное значение в приватное свойство #balance
      // Добавляем текущий счёт (обьукт this) в список всех счетов
      BankAccount.accounts.push(this);
    }
  
    // Геттер для получения текущего баланса
    get balance() {
      return this.#balance;
    }
  
    // Метод для депозита (положения средств на счёт)
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`На счёт добавлено ${amount} единиц. Текущий баланс: ${this.#balance}`);
      } else {
        throw new Error("Сумма депозита должна быть положительной.");
      }
    }
  
    // Метод для снятия средств
    withdraw(amount) {
      if (amount > this.#balance) {
        throw new Error("Недостаточно средств на счёте.");
      } else if (amount <= 0) {
        throw new Error("Сумма снятия должна быть положительной.");
      } else {
        this.#balance -= amount;
        console.log(`Снято ${amount} единиц. Текущий баланс: ${this.#balance}`);
      }
    }
  
    // Статический метод для расчёта общего баланса всех счетов
    static getTotalBalance() {
      const totalBalance = BankAccount.accounts.reduce((sum, account) => sum + account.balance, 0);
      console.log(`Общий баланс всех счетов: ${totalBalance}`);
      return totalBalance;
    }
  }
  
  // Пример
  try {
    const account1 = new BankAccount(200); // Создаем счёт с балансом 500
    const account2 = new BankAccount(1000); // Создаем счёт с балансом 1000
  
    account1.deposit(200); // Депозит на первый счёт
    account1.withdraw(100); // Снятие с первого счёта
  
    account2.deposit(500); // Депозит на второй счёт
    account2.withdraw(300); // Снятие с второго счёта
  
    // Получаем общий баланс всех счетов
    BankAccount.getTotalBalance(); // Статический метод для подсчета общего баланса
  } catch (error) {
    console.error(error.message); // Обработка ошибок
  }

  