import React, { useState } from 'react'

function StateIntro() {

    const [counter, setCounter] = useState(0)
    //counter değişenimin değeri
    //setcounter bu değişkeni değiştirecek ve bu sayede componenti render edecek fonksiyon
    //0 ise başlangıç değeri

    console.log("StateIntro component rendered")


    const increase = () => {
        setCounter(30)
    }

    return <>
        <h1>Counter: {counter}</h1>
        <button onClick={increase}>Increase</button>
    </>
}

export default StateIntro