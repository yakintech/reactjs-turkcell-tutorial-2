import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CustomerDetail() {

    const [detail, setdetail] = useState({})

    const { id } = useParams()

    useEffect(() => {

        axios.get("https://northwind.vercel.app/api/customers/" + id)
            .then(res => {
                setdetail(res.data)
            })

    }, [])


    return <>
        <h1>Detail</h1>
        <hr />
        <h2>Name: {detail.companyName}</h2>
        <p>Contact: {detail.contactName}</p>
        <p>Contact Title: {detail.contactTitle}</p>
        <p>Street: {detail.address?.street}</p>
        <p>City: {detail.address?.city}</p>
        <p>Country: {detail.address?.country}</p>
    </>
}

export default CustomerDetail