import React from 'react'

function Product() {

  let title = "IPhone 12"
  let price = 799.99
  let stock = 0
  let supplier = {
    companyName: "Apple",
    address: "Cupertino, CA"
  }

  return <>
    <h1>{title}</h1>
    <h2>{price}</h2>
    {
      stock > 0 ? <p>In Stock</p> : <p>Out of Stock</p>
    }
    <p>{supplier.companyName.toUpperCase()} {supplier.address}</p>
  </>
}

export default Product