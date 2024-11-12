import React, { useState } from 'react'

function StateIntro3() {

    const [numbers, setnumbers] = useState([5, 2, 77, 45, 21])

    const addRandom = () => {
        const newRandomNumber = Math.floor(Math.random() * 100)

        //state güncellediğimde yeni referans vermek zorundayım bu yüzden spread operatörü kullanıyorum.
        setnumbers([...numbers, newRandomNumber])
    }

    return <>
        <div style={{ padding: '5%' }}>
            <hr />
            <button onClick={() => setnumbers([])}>Clear</button>
            <hr />
            <button onClick={addRandom}>Add Random</button>
            <hr />
            <h1>Length: {numbers.length}</h1>
            <ul>
                {
                    numbers.map(number => <li>{number}</li>)
                }
            </ul>
        </div>
    </>
}

export default StateIntro3