import React from 'react'

function Categories({ categoriesData }) {

    //const { categoriesData } = props

    return <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {
                categoriesData.map(item => <CategoryItem item={item} />)
            }
        </tbody>
    </table>
}

export default Categories




function CategoryItem(props) {
    return <tr>
        <td>{props.item.id}</td>
        <td>{props.item.name}</td>
        <td>{props.item.description}</td>
    </tr>
}