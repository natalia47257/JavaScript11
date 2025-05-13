import { useState, useEffect } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)
  const [randomRecipeId, setRandomRecipeId] = useState(1)
  const handleClick = () => {
    setCount(prevCount => prevCount + 1)
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     setCount(prevCount => prevCount + 1)
  //   }, 1000);
  // }, [])

  // useEffect(() => {
  //   let intervalId = setInterval(() => {
  //     setCount(count + 1)
  //   }, 1000);
  //   return () => {
  //     clearInterval(intervalId)
  //   }
  // }, [count])

  return (
    <>
      <button onClick={() => handleClick()}>
        count is {count}
      </button>
      <GreetUser username="" />
      <button
        onClick={() => {
          // [0 - 1) * 100 = [0 - 100) + 1 = [1 - 101)
          setRandomRecipeId(Math.floor(Math.random() * 100) + 1)
        }}
        style={{ marginBottom: 10 }}>
        Get random recipe
      </button>
      <RecipeCard recipeId={randomRecipeId} />
    </>
  )
}

function RecipeCard({ recipeId }) {
  // 1 после получения ответа от сервера обновить состояние recipe
  // 2 отобразить данные на карточке
  // 3 Добавить лоадер (текст идет заргузка рецепта)
  // 4 Добавить обработку ошибок и отобразить на страницу

  useEffect(() => {
    const controller = new AbortController()

    fetch(`https://dummyjson.com/recipes/${recipeId}`, {
      signal: controller.signal,
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

    return () => {
      controller.abort("Не хочется больше получать данные")
    }
  }, [recipeId])

  return (
    <>
      <div className='recipe-card'>
        <div className='recipe-card__image'>
          <img src="https://cdn.dummyjson.com/recipe-images/1.webp" alt="recipe" />
        </div>
        <div className='recipe-card__content'>
          <h3 className='recipe-card__title'>Recipe Title</h3>
          <p className='recipe-card__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
      </div>
    </>
  )
}

function GreetUser({ username }) {
  const [greeting, setGreeting] = useState('')
  // 1 написать ueEffect который слушает изменения username
  // 2 если username не пустой то обновить greeting

  useEffect(() => {
    if (username) {
      setGreeting(`Hello ${username}`)
    }

    return () => {
      setGreeting('')
    }
  }, [username])

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  )
}

export default App
