import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CustomerList() {

    const [customers, setcustomers] = useState([])
    const [loading, setloading] = useState(true)



    useEffect(() => {

        loadData()
        // fetch("https://northwind.vercel.app/api/customers")
        //     .then(res => res.json())
        //     .then(data => setcustomers(data))

    }, [])


    const loadData = () => {

        axios.get("https://northwind.vercel.app/api/customers")
            .then(res => {
                setcustomers(res.data)
                setloading(false)
            })
    }


    const deleteCustomer = (id) => {
        var result = window.confirm("Are you sure you want to delete?")

        if (result == false) return;

        setloading(true)
        axios.delete("https://northwind.vercel.app/api/customers/" + id)
            .then(res => {
                loadData()
            })
    }


    return <>

        {
            loading == true ? <h1>loading...</h1> : <>
                <h1>Length: {customers.length}</h1>
                <table className='w3-table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Company Name</th>
                            <th>Contact Name</th>
                            <th>Contact Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map(item => <tr>
                                <td><Link to={'/customers/' + item.id}>{item.id}</Link></td>
                                <td>{item.companyName}</td>
                                <td>{item.contactName}</td>
                                <td>{item.contactTitle}</td>
                                <td><button onClick={() => deleteCustomer(item.id)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table></>
        }
    </>
}

export default CustomerList