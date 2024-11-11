import React from 'react'

function Users() {

    let names = ["Ece", "Çağatay", "Ufuk", "Mehmet", "Ayşe"]

    let title = <h1>Names</h1>

    var imgSource = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Koala_climbing_tree.jpg/640px-Koala_climbing_tree.jpg"

    return <>
        <img src={imgSource} alt="Koala" width="200" />
        {title}
        <ul>
            {
                names.map(item => <li>{item}</li>)
            }
        </ul>
    </>
}

export default Users