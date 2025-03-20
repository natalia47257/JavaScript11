// Задача 1. Дан массив чисел [12, 5, 8, 130, 44]. Создайте новый массив, содержащий только числа больше 10.

//Используем метод .filter(), который создает новый массив, содержащий только числа больше 10.
// .filter() - это метод массива, который проходит по каждому элементу и возвращает новый массив с теми элементами, которые удовлетворяют переданной функции
let numbers = [12, 5, 8, 130, 44];
let filteredNumbers = numbers.filter(num => num > 10);
console.log(filteredNumbers); // [12, 130, 44];

// или вариант2
let filteredNumbers2 = numbers.filter(function (num) {
    return num > 10;
});
console.log(filteredNumbers2); // [12, 130, 44];

// Задача 2. Напишите программу, которая принимает массив строк и возвращает массив длин этих строк по возрастанию.
// ["one", "three", "two"] -> [3, 5, 3] -> [3, 3, 5]

// Метод .map используется для создания нового массива, в котором каждый элемент получается путем преобразования элементов исходного массива с помощью переданной функции
let words = ["one", "three", "two"];
let lengths = words.map(word => word.length).sort((a, b) => a - b);
console.log(lengths); // [3, 3, 5]

// или второй вариант
let lengths1 = words.map(function (word) {
    return word.length;
});
lengths1.sort(function (a, b) {
    return a - b;
});
console.log(lengths1);

// Задача 3. Есть массив строк. Отсортируйте строки по их длине (от самой короткой к самой длинной) и выведите результат.
// ['hello', 'world', 'javascript', 'code'] => ['code', 'hello', 'world', 'javascript']
let words3 = ['hello', 'world', 'javascript', 'code'];
let sortedWords3 = words3.sort((a, b) => a.length - b.length);
console.log(sortedWords3);

// или второй вариант
let sortedWords31 = words3.sort(function (a, b) {
    return a.length - b.length;
})
console.log(sortedWords31);

// Средной сложности задачи:
// Задача 4. Подсчитайте количество гласных букв в строке. Выведите результат. // let vowels = [a, e, i, o, u] "hello" -> 2 "javascript" -> 3 "world" -> 1

function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(char => vowels.includes(char.toLowerCase())).length;
}

console.log(countVowels("hello"));      // 2
console.log(countVowels("javascript")); // 3
console.log(countVowels("world"));      // 1

// или вариант 2
function countVowels2(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i > str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(countVowels2("hello"));      // 2
console.log(countVowels2("javascript")); // 3
console.log(countVowels2("world"));      // 1


// Задача 5. Дана строка. Отсортировать её символы в алфавитном порядке. "javascript"-> "aacijprstv" "hello" -> "ehllo" 
function sortString(str) {
    return str.toLowerCase().split('').sort().join('');
}

console.log(sortString('javascript')); // aacijprstv
console.log(sortString("hello")); // ehllo
console.log(sortString("LaSuB")); // ablsu или если без .toLowerCase(), то BLSau


// Сложные задачи:
// Задача 6. Есть произвольная строка, определите, сколько раз каждый символ встречается в этой строке. Выведите результат в формате: "Символ X => Y". // "hello" Символ h => 1 Символ e => 1 Символ l => 2 Символ o => 1

function countSymbol(str) {
    let charCount = {} // Объект для хранения количества символов

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (let char in charCount) {
         
            console.log("Символ" + char + " => " + charCount[char]);
    }
}

countSymbol("hello");
countSymbol("МариАнна");

// Задача 7. Дан массив чисел [3, 1, 4, 1, 5, 9]. Найдите сумму квадратов всех четных чисел.
let numbers7 = [3, 1, 4, 1, 5, 9]
function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum = sum + arr[i] * arr[i]
        }
    }
    return sum;
}

let result = sumOfSquares(numbers7)
console.log("Cумма квадратов четных чисел: " + result);

let numbers71 = [3, 1, 2, 1, 4, 9]
let result71 = sumOfSquares(numbers71)
console.log("Cумма квадратов четных чисел: " + result71);

// Задача 8. Дан массив чисел. Проверить, упорядочены ли элементы по возрастанию. [1, 5, 9, 12, 36] => true [1, 5, 12, 9, 36, -5] => false
function sortedArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(sortedArr([1, 5, 9, 12, 36]));
console.log(sortedArr([1, 5, 12, 9, 36, -5]));


// Задача 9. Дан массив слов. Создайте объект, где ключами будут первые буквы слов, а значениями — массивы слов, начинающихся на эти буквы. Например։ ['apple', 'banana', 'apricot', 'blueberry', 'cherry'] -> { a: ['apple', 'apricot'], b: ['banana', 'blueberry'], c: ['cherry'] }

function keyWords(words) {
    let result = {};
  
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let firstLetter = word[0].toLowerCase(); // Получаем первую букву и приводим к нижнему регистру
  
      if (!result[firstLetter]) {
        result[firstLetter] = []; // Если ключа нет, создаем пустой массив
      }
  
      result[firstLetter].push(word); // Добавляем слово в массив по соответствующему ключу
    }
  
    return result;
  }
  

  const wordsList = ['apple', 'banana', 'apricot', 'blueberry', 'cherry'];
  const groupedWords = keyWords(wordsList);
  console.log(groupedWords);
  // Вывод: { a: [ 'apple', 'apricot' ], b: [ 'banana', 'blueberry' ], c: [ 'cherry' ] }

//   function keyWords(words9) {
//     let result9 = {};
  
//     for (let i = 0; i < words9.length; i++) {
//         let word = words9[i];
//         let firstLetter = word[0].toLowerCase(); // Получаем первую букву и приводим к нижнему регистру
  
//       if (!result9[firstLetter]) {
//         result9[firstLetter] = []; // Если ключа нет, создаем пустой массив
//       }
  
//       result9[firstLetter].push(word); // Добавляем слово в массив по соответствующему ключу
//     }
  
//     return result9;
//   }
  

//   const words9 = ['apple', 'banana', 'apricot', 'blueberry', 'cherry'];
//   const groupedWords = keyWords(words9);
//   console.log(groupedWords);
//   // Вывод: { a: [ 'apple', 'apricot' ], b: [ 'banana', 'blueberry' ], c: [ 'cherry' ] }