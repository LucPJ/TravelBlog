import React from 'react';
import { useState, useEffect } from 'react';
import {client} from './client';

export default function Article(){
 
    const [articles, setArticles] = useState ();
    const [loading, setLoading] = useState (false);

    useEffect(() =>{
    setLoading(true);
    client.getEntries({content_type:"article"})
        .then((response) =>{setArticles(response.items)})
        .catch(console.error)
        setLoading(false)
},[])

// console.log(articles)

    const listOfArticles = articles.map((article) => {
        return(
            <div>
                <h2>{article.fields.title}</h2>

            </div>
        )

    }
    )

    return(

        <div>Article</div>
    )
}