import React,{useEffect, useState} from 'react';
import axios from "axios";

const useWordSearch = (query,pageNumber) => {
    
    //using loading hook to load data
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [books,setBooks] = useState([]);
    const [hasMore,setHasMore] = useState(false);

    //using this useEffect call Hook for every query 
    useEffect(()=>{
        setBooks([]);
    },[query]);

    //using this useEffect hook for api request the data from the server
    useEffect(()=>{

        setLoading(true);
        setError(false);
        let cancel;

        axios({
            method:"GET",
            url:"http://openlibrary.org/search.json",
            params:{
                q:query,
                page:pageNumber,
            },
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
        .then((response)=>{

            //Set unique book value in an array
            setBooks((prevBooks) => {
                return [...new Set([...prevBooks,...response.data.docs.map(p => p.title)])]
            })

            //set true value if docs array length is greater than 0
            setHasMore(response.data.docs.length > 0);
            setLoading(false);
        })
        .catch((err)=>{

                //if request is cancel then returns
                if(axios.isCancel(err)){
                    return
                }
                setError(true);
        });

        return () => cancel();
    },[query,pageNumber]);

    //returning an object value
    return { loading,error,books,hasMore };
}

export default useWordSearch;
