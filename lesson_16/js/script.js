console.log(1);

try { 
  const usernameElem = document.querySelector(".test")
  usernameElem.innerText = "John"
} catch (error) {
  console.log(error.message);
  // console.log(error.name);
  // console.log(error.stack);
}

console.log(2);

function valueToArray(val) {
    try {
    return Array.from(val)
  } catch (error) {
    return []
  }
}

// console.log(valueToArray("Hello"));
// console.log(valueToArray([1, 2, 3]));
// console.log(valueToArray(null));
// console.log(valueToArray(undefined));

// написать функцию getTextContent, которая возвращает текстовый контент html элемента, указатель на которого получает в аргументах, если html элемент не существует, то вернуть пустую строку
// getTextContent(".test") // Test
// getTextContent("#test") // ""


// Эта строка создает функцию getTextContent, которая принимает один аргумент selector (CSS-селектор для поиска элемента в DOM).function getTextContent(selector) {
//   try {
//     // Пытаемся получить элемент по селектору
//     // В блоке try мы используем document.querySelector(selector), чтобы найти первый HTML-элемент, соответствующий переданному селектору.
//     // Затем пытаемся получить его текстовое содержимое с помощью innerText.
//     const htmlElement = document.querySelector(selector);
//     return htmlElement.innerText

//     //Обработка ошибки в catch
//     } catch (error) {
//     return ""  // Возвращаем пустую строку в случае ошибки
//     }
//   ///      !!!!!!!!!!!!!!!!!!! ошибка

// console.log(getTextContent(".test")); // Test
// console.log(getTextContent("#test")); // ""


// try {
//   const usernameElem = document.querySelector(".test");
//   usernameElem.innerText = "John"
// } catch (error) {
//   console.log(error.message)
// } finally {
// console.log("finally");
// }



function getTextContent(selector) {
  try {
    const htmlElement = document.querySelector(selector);
    return htmlElement ? htmlElement.innerText : ""; // Проверяем, найден ли элемент
  } catch (error) {
    return ""
  }
}


// Создать функцию котоаря принимает в аргументах callback и вызивает эту функцию, если такой функции нет то в консоли вывести строку "Такой функции не существует"

// function test() {
//   console.log("test")
//   }

  // let greet = ""
  // callFn(test) // test
  // callFn(greet) // "Такой функции не существует"

function test() {
  console.log(2)
}
function callFn (callback)  {
  try {
    callback()
  } catch (error) {
    console.log("нет такой функции");
  }
}
callFn(test)
let greet = 2
callFn(greet)

//throw
function getTextContent2(elemSelector) {
  try {
  const htmlElem = document.querySelector(elemSelector)
  if (htmlElem === null) {
  // throw `Элемент по указателю ${elemSelector} не существует`
  // throw {
  // element: elemSelector,
  // message: "Элемент не существует"
  // }
  throw new Error(`Элемент по указателю ${elemSelector} не существует`)
  }
    return htmlElem.innerText
  } catch (error) {
    console.log(error.stack);
    return ""
  }
}

console.log(getTextContent2("#test"));
console.log(getTextContent2(".test"));
// console.log(getTextContent2("#test"));

const getUserWithPostsByName = async (username, callback) => {
  try {
    let searchResponse = await fetch(`https://dummyjson.com/users/search?q=${username}`)
    //searchResponse.ok === false
    //searchResponse.ok !== true
    //!searchResponse.ok
    // !false = true
    // !true = false
    if (!searchResponse.ok) {
      throw new Error(`Неуспешный ответ со статусом ${searchResponse.status}`)
    }

    let data = await searchResponse.json()
    if (data.users.length === 0) {
      throw new Error(`Пользователь по имени ${username} не найден`)
    }

    let user = data.users[0]
    let postsResponse = await fetch(`https://dummyjson.com/users/${user.id}/posts`)
    let postsObj = await postsResponse.json()
    let payload = {
      user: user,
      posts: postsObj.posts
    }
    callback(payload)
    return
  } catch (error) {
    console.log(error.message)
  }
};

getUserWithPostsByName('Test', (data) => {
  console.log(data)
}); 