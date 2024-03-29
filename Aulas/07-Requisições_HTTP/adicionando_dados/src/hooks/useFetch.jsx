import { useState, useEffect } from "react";

// 4 custom hook

export const useFetch = (url) => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);

            const dataJson = await res.json();

            setData(dataJson);
        }
        fetchData();
    }, [url]);

    return { data };
}