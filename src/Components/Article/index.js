import React from 'react';
import { useState, useEffect } from 'react';
import {client} from './client';

export default function Article(){
 
    const [articles, setArticles] = useState ();
    const [loading, setLoading] = useState (false);

    useEffect(() =>{
    setLoading(true);
    client.getEntries({content_type:"blogCard"})
        .then((response) =>{setArticles(response.items)})
        .catch(console.error)
        setLoading(false)
},[])

    return(

        <div>Article</div>
    )
}