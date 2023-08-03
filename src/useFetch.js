import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch(url)
        .then(res => {
            if (!res.ok) {
                setIsPending(false);
                throw Error("Seems like we don't have what your looking for")
            }
           return res.json()
        })
        .then(data => {
            console.log(data)
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            setError(err.message);
            setIsPending(false)
        })
    }, [url])
    return {data, isPending, error};
}
 
export default useFetch;