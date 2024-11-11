import React from 'react'

function Users() {

    let names = ["Ece", "Çağatay", "Ufuk", "Mehmet", "Ayşe"]

    let title = <h1>Names</h1>

    return <>
        {title}
        <ul>
            {
                names.map(item => <li>{item}</li>)
            }
        </ul>
    </>
}

export default Users