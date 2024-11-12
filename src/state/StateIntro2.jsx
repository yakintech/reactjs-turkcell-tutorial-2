import React, { useState } from 'react'

function StateIntro2() {

    const [color, setcolor] = useState("red")

    return <>
        <button onClick={() => setcolor('black')}>Change Color</button>
        <div style={{ backgroundColor: color, width: 300, height: 300 }}>

        </div>
    </>
}

export default StateIntro2