import React, { useState } from 'react'
import { productsData } from '../data/productsData'

function ProductsTable() {

    const [products, setproducts] = useState(productsData)
    const [minPrice, setminPrice] = useState(0)
    const [maxPrice, setmaxPrice] = useState(0)



    const searchProduct = (e) => {
        var name = e.target.value
        var filteredProducts = productsData.filter(item => item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
        setproducts(filteredProducts)
    }

    const search = () => {
        let min = Number(minPrice)
        let max = Number(maxPrice)

        if (!isNaN(min) && !isNaN(max)) {
            var filteredProducts = productsData.filter(item => item.unitPrice >= min && item.unitPrice <= max)
            setproducts(filteredProducts)
        }
        if(min == 0 && max == 0){
            setproducts(productsData)
        }

    }

    return <>
        <div>
            <label htmlFor="">Search:</label>
            <input type='text' onChange={searchProduct} />
        </div>
        <hr />
        <div>
            <label htmlFor="">Min Price</label>
            <input type='number' onChange={(e) => setminPrice(e.target.value)} />
            <label htmlFor="">Max Price</label>
            <input type='number' onChange={(e) => setmaxPrice(e.target.value)} />
            <button onClick={search}>Search</button>
        </div>

        <hr />
        <p>Length: {products.length}</p>
        <hr />
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