// console.log("Hi")


// проверить число на четность или нечетность и присвоить соотвествующую строку к переменной result

// let result = ""

// let num = 5

// if (num % 2 === 0) {

// result = "четное"

// } else {

// result = "нечетное"

// num % 2 === 0 ? console.log("число четное") : console.log("число нечетное")

//условие ? выполняется код если условие верное : выполняется если код неверный

// result = num % 2 === 0 ? "четное" : "нечетное"
// console.log(result)

// циклы
// console.log(1** 2)
// console.log(2** 2)
// console.log(10** 2)

// for(let i = 0; i<= 10; i++) {
// console.log(i ** 2)}

// выводить числа от 20 до 11 в таком же обратном порядке

// for (let i = 20; i >= 11; i--) {
//     console.log(i);
//   }

  // for (инициализация; условие; шаг) {
 // тело цикла
 // }

 // i++ инкремент
// i = i + 1
// i += 1
// i-- декремент
// i = i - 1
// i -= 1

// Выводить четные числа от 40 до 60
// for (let i = 40; i <= 60; i += 2) {
//     console.log(i); 
// }

// циклом пройтись по числам от 0 до 10
// проверить каждое число на четность и нечетность и результат в виде строки("2-четное" "3-нечетное") хранить в переменной в таком ввиде 
// "...2-четное 3-нечетное 4-четное..."
// можно использовать тернарный оператор и интерполяцию

// let result = ""; // Переменная для хранения результата

// for (let i = 0; i <= 10; i++) {
//   result += `${i}-${i % 2 === 0 ? "четное" : "нечетное"} `; // Проверка и добавление к строке
// }
// result = result.trim();
// console.log(result);


// //второе решение
// let result1 = ""; // Переменная для хранения результата
//  for (let i = 0; i <= 10; i++) 
//     { 
//         if (i % 2 === 0) { 
//             result1 += `${i}-четное `; 
//         } else {
//              result1 += `${i}-нечетное `; 
//             } 
//         } result1 = result1.trim(); 
        
//         console.log(result1);
// //Еще одно решение от учителя 
//         let result2 = ""; // Переменная для хранения результата
//  for (let i = 0; i <= 10; i++) 
//     { 
//         if (i % 2 === 0) { 
//             result2 = result2 + `${i}-четное `; 
//         } else {
//              result2 = result2 + `${i}-нечетное `; 
//             } 
//     }
        
//         console.log(result2);

// //Еще одно решение от учителя 
//         let resultString= ""; // Переменная для хранения результата
//  for (let i = 0; i <= 10; i++) 
//     { 
//         resultString += i % 2 === 0 ? `${i}-четное ` : `${i}-нечетное `
//     }  
//         console.log(resultString);

// let greeting = "Hello"
// let name = "John"
// //greeting = greeting + " " + name
// greeting += " " + name

// console.log(greeting);

// let arr = [0, "hello", ["0", true]]
// console.log(arr[1]);
// console.log(arr[0]);

// arr[1] = ["hello", "world"]
// console.log(arr);

// let arr = [6, 9, 7 -3, 0]
// console.log(arr);

// let lastElemFromArray = arr.pop() // удаляет последний элемент из массива и возвращае его
// console.log(arr);
// console.log(lastElemFromArray); // [6, 9, 7, -3]

// let newArrayLength = arr.push(4, 5, 8)
// console.log(newArrayLength); // 7
// console.log(arr); // [3, 2, 1, 6, 9, 7,-3, 4, 5, 8]

// arr.unshift() // добавляет элементы в начало массива

// newArrayLength = arr.unshift(3, 2, 1)
// console.log(newArrayLength);  // 10
// console.log(arr); // [6, 9, 7, -3, 4, 5, 8]

// // a = индекс элемента, с которого начинаем удаление
// // b = количество элементов, которые удаляем
// // c, d = новые элементы, которыми заменяем удаленные
// // splice(a, b, c, d) 

// let firstElementFromArray = arr.shift()
// console.log(firstElementFromArray);  
// console.log(arr); // [2, 1, 6, 9, 7, -3, 4, 5, 8]

// let removedElemsFromArray = arr.splice()
// console.log(removedElemsFromArray);  [6, 9, 7]
// console.log(arr); // [2, 1, -3, 4, 5, 8]

// arr.splice(2, 2, 8, 9, 6, 8, 5, 1)
// console.log(arr); // [2, 1, 8, 9, 6, 8, 5, 1, 5, 8]

// arr.splice(3, arr.length)
// console.log(arr); // [2, 1, 8]


// есть массив чисел, найти все числа кратные 4, сохранить их в новом массиве и в конце выводить в консоли разницу между первым и последним элементов этого нового массива
// let nums = [4, 10, 12, 9, 11, 10, 2, 3, 11, 2, 3, 5, 4, 3, 7, 2, 8, 6, 10, 5, 5, 9, 3, 4, 8, 4, 7, 10, 8, 4, 5, 9, 9, 8, 2, 5, 6]
// let resultNums = []; // Новый массив для чисел, кратных 4
// for (let i = 0; i < nums.length; i++) {
// if (nums[i] % 4 === 0) {
// resultNums.push(nums[i])
// }
// }
// [5, 9, 6, 8]
// .lenght 4 - 1 = 3
// console.log(resultNums[0] - resultNums[resultNums.length - 1])

// let firstElem = resultNums.shift()
// let lastElem = resultNums.pop()
// console.log(firstElem - lastElem)
  
// Проверить слово на палиндром
// Казак, шалаш, Анна

// let word = "hello" // Проверяемое слово
// //console.log(word[4]); // o
// //console.log(word[3]); // e
// //console.log(word[2]); // l
// //console.log(word[1]); // l
// //console.log(word[0]); // h
// let reversedWord = ""; // Переменная для хранения перевернутого слова

// // Переворачиваем слово с помощью цикла
// for(let i = word.length - 1; i >= 0; i--) {
//     reversedWord += word[i]
// }
// // Проверяем, является ли слово палиндромом
// if (word === reversedWord) {
//     console.log("Палиндром");
// } else {
//     console.log("Палиндром");
// }

// // Альтернативный способ с использованием встроенных методов
// console.log(word.split("").reverse().join("") === word ? "Палиндром" : "Палиндром");

 


////// ДЗ
// 1 - в задаче повыше учесть еще и регистр букв.
// Anna !== annA (надо исправить чтобы регистр не вляил на результат)

let word1 = "Anna"; // Проверяемое слово

let reversedWord1 = ""; // Переменная для хранения перевернутого слова

// Переворачиваем слово с помощью цикла
for (let i = word1.length - 1; i >= 0; i--) {
    reversedWord1 += word1[i];
}

// Приводим к одному регистру перед сравнением
if (word1.toLowerCase() === reversedWord1.toLowerCase()) {
    console.log("Палиндром");
} else {
    console.log("Не палиндром");
}

// Альтернативный способ с использованием встроенных методов
console.log(
    word1.toLowerCase().split("").reverse().join("") === word1.toLowerCase()
        ? "Палиндром"
        : "Не палиндром"
);

// уровень сложности: ////// ДЗ // 1 - в задаче повыше учесть еще и регистр букв. 
// Anna !== annA (надо исправить чтобы регистр не вляил на результат)

// Средняя задача
// Напишите программу, которая принимает строку из чисел, разделенных запятыми (например, "1,2,3,4,5") и выводит сумму всех чисел.

// Простая задача
// Дана массив их строк. Программа должна подсчитать количество слов, которые содержат больше 5 символов.

// Простая задача
// Создайте массив чисел от 1 до 20. Выведите все четные числа из этого массива.

// Сложная задача
// Дана строка из нескольких слов, разделенных пробелами. Напишите программу, которая переворачивает каждое слово в строке и выводит полученный результат.

// Средняя задача
// Сгенерируйте массив из 10 случайных чисел от 1 до 100. Найдите максимальное и минимальное число в массиве, а также их разницу.

// Сложная задача
// Дан массив чисел, например [10, 15, 3, 7, 20, 8, 25]. Найдите два числа, сумма которых равна 25, и выведите их. Если таких чисел нет, выведите сообщение об этом.

// Средняя задача
// Напишите программу, которая принимает строку из букв и цифр (например, "a1b2c3d4"), и создает два массива отдельно с числами и отдельно с буквами из этой строки: [1, 2, 3, 4] [a, b , c, d]

// Сложная задача
// Дан массив строк, например ["abcd", "def", "ghiab", "jklaf", "asdgdfhfgh"]. Объедините их в одну строку, добавив между ними символ -, но только между строками, где колиечство букв совпадает.   
    
let word = "Anna"; // Проверяемое слово

let reversedWord = ""; // Переменная для хранения перевернутого слова

// Переворачиваем слово с помощью цикла
for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}

// Приводим к одному регистру перед сравнением
if (word.toLowerCase() === reversedWord.toLowerCase()) {
    console.log("Палиндром");
} else {
    console.log("Не палиндром");
}

// Альтернативный способ с использованием встроенных методов
console.log(
    word.toLowerCase().split("").reverse().join("") === word.toLowerCase()
        ? "Палиндром"
        : "Не палиндром"
);








