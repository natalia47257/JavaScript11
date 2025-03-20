// Проверить слово на палиндром
// Казак, шалаш, Анна

// let word = "hello" // Проверяемое слово
// //console.log(word[4]); // o
// //console.log(word[3]); // e
// //console.log(word[2]); // l
// //console.log(word[1]); // l
// //console.log(word[0]); // h
// let reversedWord = ""; // Переменная для хранения перевернутого слова

// // Переворачиваем слово с помщью цикла
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

//  //let word ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
//  console.log(result);
 




// Дана строка где есть и числа и строки -> "hello 51 asdf 125 10 sdffg lll 4 as45 65aa 7 8" 
// надо найти все строки и в самом конце выводить итоговую длину всех строк вместе

// Разделяем строку на массив
// let mix = "hello 51 asdf 125 10 sdffg lll 4 as45 65aa 7 8"
// let newmix = mix.split(" ")
// let sum = 0
// for (let i = 0; i < newmix.length; i++) {
//     // if (isNaN(newmix[i])) {
//     //     sum += newmix[i].length
//     // }

//     //или можно вместо if  использовать тернарный оператор
//     //let result = isNaN(newmix[i]) ? newmix[i].length : 0
//     //sum = sum +result

//     sum += isNaN(newmix[i]) ? newmix[i].length : 0
// }
// //console.log(sum);

// reverse
// let word = "hello"
// let arrayOfSymbols = word.split("") // ['h', 'e', 'l', 'l', 'o']
// console.log(arrayOfSymbols);
// let reversedArray = arrayOfSymbols.reverse()
// console.log(reversedArray); // ['o', 'l', 'l', 'e', 'h']
// let reversedWord = reversedArray.join("")
// console.log(reversedWord); // [olleh]

// word.split("").reverse().join("") ->
// -> ['h', 'e', 'l', 'l', 'o'].reverse().join("")
// -> ['o', 'l', 'l', 'e', 'h'].join("")
// -> "olleh"


//console.log(word.split("").reverse().join("") === word ? "Палиндром" : "Не палиндром");

// дан массив чисел [5, 2, -6, 2, 10, 15, 23, -13, 51, -37]
// получить сумму только положительных чисел и вывести результат в консоли в виде такой строки
// "5+2+2+10+15+23+51=результат"

// let array = [5, 2, -6, 2, 10, 15, 23, -13, 51, -37];

// let positiveNumbers = [];
// let result = 0;

// for (let i = 0; i < array.length; i++) {
//     if(array[i] > 0){
//         positiveNumbers.push(array[i]) 
//         result += array[i]   
//     }
// }
// let resultString = positiveNumbers.join('+');
// //console.log(`${resultString}=${result}`)

//let numbers = [5, 2, -6, 2, 10, 15, 23, -13, 51, -37]
//  let sum = 0
//  let results = []
// for (let i = 0; i < numbers.length; i++) {
//     if ( numbers[i]> 0){
//         sum += numbers[i]
//         results.push(numbers[i])
//     }
    
// }
 
//   console.log(`${results.join("+")} = ${sum}`);

// let nums = [5, 2, -6, 2, 10, 15, 23, -13, 51, 15, -37]
// // includes
// // === проверять, есть элемент или нет элемента
// console.log(nums.includes(15)); // true
// console.log(nums.includes(30)); // false

// // indexOf -> // Ищет сначала массива
// // LastIndexOf <- // Ищет сконца массива
// console.log(nums.indexOf(15)); // 5
// console.log(nums.indexOf(30)); // -1 // Если ничего не находят, то возвращает -1

// console.log(nums.lastIndexOf(15)); // 9
// console.log(nums.lastIndexOf(30)); // -1

let arr = [3, 2, 1]
let secondArr = arr
secondArr[1] = 10;

console.log(arr); // [3 10 1]
console.log(secondArr); // [3 10 1]

//structuredClone
let thirdArr = structuredClone(secondArr)
thirdArr[1] = 100

console.log(arr); // [3 10 1]
console.log(secondArr); // [3 10 1]
console.log(thirdArr); // [3 10 1]

// random псевдослучайное число
// Math.random() [0 -1]
// Math.random() * n [0 -1 * n]
console.log(Math.random() *10);

// в нижнюю сторону
console.log(Math.floor(7.9)); // 7
console.log(Math.floor(7.1)); // 7

// в верхнюю сторону
console.log(Math.ceil(7.9)); // 8
console.log(Math.ceil(7.9)); // 8

// Округляет как в математике
console.log(Math.round(7.9)); // 8
console.log(Math.round(7.9)); // 7

console.log(Math.round(Math.round(7.9) *10)); // 

// [0 - 100)
// 99.9 => 99
// 99 + 1 = 100
let rand = Math.floor(Math.random() * 100) + 1;










    











