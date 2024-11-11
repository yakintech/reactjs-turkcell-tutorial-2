import React from 'react'

function JsxEvents() {

  const hello = () => {
    alert("Hello JSX Events")
  }

  const hello2 = (name) => {
    alert("Hello " + name)
  }

  return <>
    <button onClick={hello}>Hello</button>
    <button onClick={() => hello2("Çağatay")}>Merhaba</button>
  </>
}

export default JsxEvents