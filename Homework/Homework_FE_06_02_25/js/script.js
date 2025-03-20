// (Lesson_11 , Lesson3)
// let product = {
//     title: "Велосипед",
//     img: "ссылка на картинку",
//     count: 10,
//     favorite: false
// }

// Создать карточку продукта по такому шаблону (размеры и цвет выберете сами).
// Использовать данные из объекта product.
// При клике на кнопку + увеличить значение count на 1.
// При клике на кнопку - уменьшить значение count на 1.
// При клике на звездочку изменить значение favorite на противоположное значение.
// После каждого изменения сохранить обьект в виде JSON в localStorage

// Решение
// Инициализация обьекта продукта
let product = {
    title: "Велосипед",
    img: "https://st3.depositphotos.com/9880800/14098/i/450/depositphotos_140980460-stock-photo-hipster-bicycle-with-basket.jpg",
    count: 10,
    favorite: false
}

// Проверка сохраненных данных в localStorage
if (localStorage.getItem("product")) {
    product = JSON.parse(localStorage.getItem("product"));
}

// Функция сохранения данных в localStorage
function saveToLocalStorage() {
    localStorage.setItem("product", JSON.stringify(product));
}

// Функция, которая обеспечивает  увеличение значения count на 1 при клике на кнопку  "+".

function increaseCount() {
    product.count ++;
    saveToLocalStorage();
    console.log(`Количество увеличено: ${product.count}`)
}
// Функция, которая обеспечивает уменьшение значения count на 1 при клике на кнопку 
//  "-".
function decreaseCount() {
    if (product.count > 0) {
        product.count --;
        saveToLocalStorage();
        console.log(`Количество уменьшено: ${product.count}`)
    } else {
        console.log("Количество не может быть отрицательным");
    }
}

// Функция, которая меняет значение favorite  при клике на звездочку изменить значение "favorite" на противоположное значение.
function toggleFavorite() {
    product.favorite = !product.favorite;
    saveToLocalStorage();
    console.log(`Favorite: ${product.favorite} ? "Yes" : "No"`);
}
console.log("Текущее состояние продукта:", product);
increaseCount(); // Увеличиваем количество
decreaseCount(); // Уменьшаем количество
toggleFavorite(); // Изменяем статус "Избранное"
console.log("Обновлённое состояние продукта:", product);

// Связывание кнопок с функциями
document.getElementById("increase-button").addEventListener("click", increaseCount);
document.getElementById("decrease-button").addEventListener("click", decreaseCount);
document.getElementById("favorite").addEventListener("click", toggleFavorite);

// Начальное состояние продукта
console.log("Начальное состояние продукта:", product);
