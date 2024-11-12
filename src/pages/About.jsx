import axios from 'axios'
import React from 'react'
import useSWR from 'swr'

function About() {

  const { data, isLoading } = useSWR("categories", async () => {
    return axios.get("https://northwind.vercel.app/api/categories")
  }, {refreshInterval: 5000})

  console.log("data", data)

  return <>
    <h1>About</h1>
    {
      isLoading ? <h1>Loading...</h1> : <ul>
        {
          data.data.map(category => (
            <li key={category.id}>{category.name}</li>
          ))
        }
      </ul>
    }
  </>
}

export default About