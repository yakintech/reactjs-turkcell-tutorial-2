import React from 'react'

function ProductBox({title, price, image, description, points, hello, country = "Türkiye"}) {

  return <>
        <h1>Country: {country}</h1>
        <h1>Title: {title}</h1>
        <h2>Price: {price}</h2>
        <img src={image} alt={title} width={200} height={300} />
        <hr />
        <p>{description}</p>

        <hr />
        <ul>
          {
            points?.map(item => <li>{item}</li>)
          }
        </ul>
        <hr />
        <button onClick={hello}>Test</button>
  </>
}

export default ProductBox

