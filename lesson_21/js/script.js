// function sum() {
//   console.log(this.a + this.b);
// }

// let testObj = {
//   a: 1,
//   b: 2
// }

// const sumForTestObj = sum.bind(testObj)
// sumForTestObj() // undefined + undefined = NaN

// Каррирование - частичное выполнение функции
// function multiply(a, b) {
//   console.log(a * b)
// }

// const multiplyBy2 = multiply.bind(null, 2)
// multiplyBy2(5)

// const multiplyBy3 = multiply.bind(null, 3)
// multiplyBy3(5)


// const multiplyV2 = a => b => a * b;
// замыкание
function multiplyV2(a) {
  return function (b) {
    return a * b
  }
}
const multiply2 = multiplyV2(2)
// console.log(multiply2(50))
// console.log(multiply2(25))

// ================================

const btn1 = document.querySelector(".btn_1")
const btn2 = document.querySelector(".btn_2")
const display = document.querySelector(".counter")
let counter = 0
function incrementCounter() {
this.innerText = counter
counter++
}
//const bindWithBtn2 = incrementCounter.bind(btn2)
//btn1.addEventListener("click", bindWithBtn2) // здесь можно поменять переменную и кнопка будет обращаться к другому обьекту

// btn1.addEventListener("click", () => {
// console.log(this) // Window
// })


// При клике на btn2 показать счетчик внутри p с классом counter используя call либо apply в связке с функцией incrementCounter
//btn1.addEventListener("click", function() {incrementCounter.call(display)}) // от Сергея
const pCounter = document.querySelector(".counter")
btn2.addEventListener('click', function (){
  incrementCounter.call(pCounter)
})

//const btn1 = document.querySelector('.btn_1');
// const btn2 = document.querySelector('.btn_2');
// const btn3 = document.querySelector('.btn_3');
// const btn4 = document.querySelector('.btn_4');
// const textcounter = document.querySelector('.counter');
// let counter = 0;
// function incrementCounter() {
//   this.innerText = counter;
//   counter++;
// }
// function dincrementCounter() {
//   this.innerText = counter;
//   counter--;
// }
// function multCounter() {
//   this.innerText = counter;
//   counter*=2;
// }
// function divCounter() {
//   this.innerText = counter;
//   counter/=2;
// }

// // При клике на btn2 показать счетчик внутри p с классом
// counter используя call либо apply в связке с функцией incrementCounter

// btn2.addEventListener('click', function () {
//   incrementCounter.call(textcounter);
// });

// btn3.addEventListener('click', dincrementCounter.bind(textcounter));

// btn1.addEventListener('click', multCounter.bind(textcounter));

// btn4.addEventListener('click', divCounter.bind(textcounter));

// ==============================================

const canvasElem = document.querySelector("canvas")
const ctx = canvasElem.getContext("2d")

// цвет заливки
ctx.fillStyle = "green"
// ctx.fillRect(x, y, ширина, высота)
// fillRect = rect + fill
ctx.fillRect(100, 200, 300, 200)

ctx.fillStyle = "blue"
ctx.rect(500, 200, 200, 300) // подготовить прямоугольник
ctx.lineWidth = 5 //размер контура
ctx.strokeStyle = "yellow" // цвет контур
ctx.stroke() // рисуем контур
ctx.fill() // сделать заливку цвета

ctx.clearRect(500, 300, 200, 100) // очищает эту область
// ctx.clearReact(0, 0, 800, 500)

ctx.beginPath() // даем канвасу понять, что мы рисуем что-то новое
ctx.moveTo(300, 300) // указываем начало рисовки
ctx.lineTo(500, 0) // двигаем по эти координатам
ctx.lineTo(500, 300)
ctx.lineTo(300, 300)
ctx.strokeStyle = "red"
ctx.stroke()

// класс Person, который получает размеры и отрисовывает красный прямоугольник
// moveTop
// moveDown
// moveLeft
// moveRight
// которые на 5 пикселей двигают персонажа в соответствующем направлении
// при нажатии на стрелочки двигать прямоугольник
