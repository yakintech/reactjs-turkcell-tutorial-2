import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddCustomer() {

    const [companyName, setcompanyName] = useState("")
    const [contactName, setcontactName] = useState("")
    const [contactTitle, setcontactTitle] = useState("")

    const navigate = useNavigate()

    const add = () => {
        let newCustomer = {
            companyName: companyName,
            contactName: contactName,
            contactTitle: contactTitle
        }

        axios.post("https://northwind.vercel.app/api/customers", newCustomer)
        .then(res => {
            navigate('/customers')
        })
        
    }

  return <>
    <div>
        <label htmlFor="">Company Name: </label>
        <input type='text' onChange={(e) => setcompanyName(e.target.value)} />
    </div>
    <hr />
    <div>
        <label htmlFor="">Contact Name: </label>
        <input type='text' onChange={(e) => setcontactName(e.target.value)} />
    </div>
    <hr />
    <div>
        <label htmlFor="">Contact Title: </label>
        <input type='text' onChange={(e) => setcontactTitle(e.target.value)} />
    </div>
    <hr />
    <div>
        <button onClick={add}>Add</button>
    </div>
  </>
}

export default AddCustomer