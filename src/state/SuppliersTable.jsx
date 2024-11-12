import React, { useState } from 'react'
import { suppliersData } from '../data/suppliersData'

function SuppliersTable() {

    const [suppliers, setsuppliers] = useState(suppliersData)
    const [isSorted, setisSorted] = useState(false)


    const deleteSupplier = (id) => {

        var result = window.confirm("Are u sure?")
        if(result){
            var filteredSuppliers = suppliers.filter(item => item.id != id)
            setsuppliers(filteredSuppliers)
        }

    }

    const sortByCompanyName = () => {
        var sortedSuppliers = [...suppliers]
        if(isSorted)
            sortedSuppliers.sort((a,b) => a.companyName.localeCompare(b.companyName))
        else
            sortedSuppliers.sort((a,b) => b.companyName.localeCompare(a.companyName))
        
        setsuppliers([...sortedSuppliers])
        setisSorted(!isSorted)
    }

    return <>
        <h1>Length: {suppliers.length}</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th style={{cursor:'pointer'}} onClick={sortByCompanyName}>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers.map(supplier => <tr>
                        <td>{supplier.id}</td>
                        <td>{supplier.companyName}</td>
                        <td>{supplier.contactName}</td>
                        <td>{supplier.contactTitle}</td>
                        <td><button onClick={() => deleteSupplier(supplier.id)}>Delete</button></td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default SuppliersTable