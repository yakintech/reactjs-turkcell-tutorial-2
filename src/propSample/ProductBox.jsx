import React from 'react'

function ProductBox(props) {

  return <>
        <h1>Title: {props.title}</h1>
        <h2>Price: {props.price}</h2>
        <img src={props.image} alt={props.title} width={200} height={300} />
        <hr />
        <p>{props.description}</p>

        <hr />
        <ul>
          {
            props.points?.map(item => <li>{item}</li>)
          }
        </ul>
        <hr />
        <button onClick={props.hello}>Test</button>
  </>
}

export default ProductBox

