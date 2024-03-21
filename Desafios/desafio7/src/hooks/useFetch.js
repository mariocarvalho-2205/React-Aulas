import { useState, useEffect } from "react";

const url = "http://localhost:3000/produtos"

export const useFetch = () => {

    // const [loading, setLoading ] = useState(false)
    
    useEffect(() => {
        const [ data, setData ] = useState(null)
        const fetchData = async () => {
            const res = await fetch(url)
            const data = res.json()

            setData(data)
        }

        console.log(data)
        
        return { data }

    }, [url])
    
}