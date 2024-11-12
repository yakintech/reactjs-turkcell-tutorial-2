import React, { useEffect, useState } from 'react'

function LifeCycle() {

    const [number, setnumber] = useState(0)

    console.log('rendering...')

    useEffect(() => {
        var randomNumber = Math.floor(Math.random() * 100)
        setnumber(randomNumber)
    }, [])
    

    return <>
        <h1>Number: {number}</h1>
    </>
}

export default LifeCycle