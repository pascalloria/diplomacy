import { useEffect, useState } from "react";

const UseFetch = (url) => {

    const [data, setData] = useState("");
    const [isPending, setIspending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
    fetch(url)
        .then (res => {
            if (!res.ok){
                throw Error ("Impossible de recupérer les données depuis cette ressource")
            }
            
        return res.json();        
    })
    .then (data => {
        setData(data);
        setIspending(false);
        setError(null);
        // console.log(data)
    })
    .catch (err => {
        if (err.name ==="AbortError") {
            console.log ("fetch aborted")
        } else {
            setIspending(false)
            setError(err.message)
        }
    });

},[url])
    return  {data,isPending,error}
}

export default UseFetch

