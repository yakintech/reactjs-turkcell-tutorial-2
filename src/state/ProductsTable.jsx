import React, { useState } from 'react'
import { productsData } from '../data/productsData'

function ProductsTable() {

    const [products, setproducts] = useState(productsData)

    return <>
        <table className='w3-table w3-striped'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Units In Stock</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(item => <tr>
                        <td>{item.name}</td>
                        <td>{item.unitPrice}</td>
                        <td>{item.unitsInStock}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default ProductsTable