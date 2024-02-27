import { useState, useEffect} from "react";

export const useFetch = (url) => {
    const [ data, setData ] = useState(null);

    useEffect(( ) => {
        const fetchData = async () => {
            const res = await fetch(url);
            const dataJson = await res.json();

            setData(dataJson);
        }

        fetchData();
    })
    return { data };
}

