import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'

function Contact() {

  const { data, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      return axios.get("https://northwind.vercel.app/api/categories")
    }
  })

  return <>
    <h1>Contact</h1>
    <hr />
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

export default Contact