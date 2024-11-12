import React from 'react'
import { useCategories } from '../hooks/useCategories'

function Home() {

  const { categories } = useCategories()

  return (
    <>
      <h1>Home</h1>
      <ul>
        {
          categories.map(category => (
            <li key={category.id}>{category.categoryName}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Home