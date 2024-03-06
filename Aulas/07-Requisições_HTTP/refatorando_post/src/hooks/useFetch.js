import { useState, useEffect } from "react";

const url = "http://localhost:3000/cars"
// 4 Custom hook
export const useFetch = () => {

    const [data, setData] = useState(null);

    // 5 refatorando o post
    const [ config, setConfig ] = useState(null);
    const [ method, setMethod ] = useState(null);
    const [ callFetch, setCallFetch ] = useState(null);

    const httpConfig = (data, method) => {

        if ( method === "POST" ) {
            setConfig({
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }
    }


    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch(url)

            const json = await res.json()

            setData(json)
        }

        fetchData()
    }, [url, callFetch])

    // 5 refatorando post
    useEffect(() => {
        const httpRequest = async () => {
            if ( method === "POST") {
                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);

                const json = await res.json();

                setCallFetch(json)

            }
        }

        httpRequest()
    }, [config, method, url])

    return { data, httpConfig }

}