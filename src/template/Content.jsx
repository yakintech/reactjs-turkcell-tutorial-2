import React from 'react'
import About from './About'
import Menu from './Menu'
import Contact from './Contact'

function Content() {
    return <div className="w3-content" style={{ maxWidth: 1100 }}>

        <About />
        <hr />
        <Menu />
        <hr />
        <Contact />
       
    </div>

}

export default Content