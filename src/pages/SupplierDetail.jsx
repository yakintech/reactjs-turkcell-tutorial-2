import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { suppliersData } from '../data/suppliersData'

function SupplierDetail() {

    const { id } = useParams()
    
    const location = useLocation()
    console.log("location", location)

    let detail = suppliersData.find(q => q.id == id)


    return <>
        {
            detail && <>
                <h1>Supplier Detail</h1>
                <h2>{detail.companyName}</h2>
                <h3>{detail.contactName}</h3>
                <h4>{detail.contactTitle}</h4>
                <hr />
                <p>{detail.address.street}</p>
                <p>{detail.address.city}</p>
                <p>{detail.address.region}</p>
                <p>{detail.address.postalCode}</p>
                <p>{detail.address.country}</p>
            </>
        }
    </>
}

export default SupplierDetail