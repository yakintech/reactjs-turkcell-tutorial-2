import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CustomerList() {

    const [customers, setcustomers] = useState([])

    

    useEffect(() => {

        axios.get("https://northwind.vercel.app/api/customers")
            .then(res => {
                setcustomers(res.data)
            })

        // fetch("https://northwind.vercel.app/api/customers")
        //     .then(res => res.json())
        //     .then(data => setcustomers(data))

    }, [])


    return <>
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
                        <td>{item.id}</td>
                        <td>{item.companyName}</td>
                        <td>{item.contactName}</td>
                        <td>{item.contactTitle}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default CustomerList