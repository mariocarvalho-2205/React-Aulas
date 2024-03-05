import { useState, useEffect } from "react";

const url = "http://localhost:3000/cars"
// 4 Custom hook
export const useFetch = () => {

    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch(url)

            const json = await res.json()

            setData(json)
        }

        fetchData()
    }, [url])

    return { data }

}