import axios from "axios";
import { useEffect, useState } from "react";



export function useCategories() {

    const [categories, setcategories] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState({})


    useEffect(() => {

        axios.get("https://northwind.vercel.app/api/categories")
            .then(res => {
                setcategories(res.data)
                setloading(false)
            })
            .catch(err => {
                seterror(err)
                setloading(false)
            })

    }, [])

    return { categories, loading, error }


}