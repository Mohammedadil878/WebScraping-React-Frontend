import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import Error from './Error';
import DOMPurify from 'dompurify';

export default function ScrapedDetail({ setProgress }) {
    
    const { id } = useParams();
    const [scraped_data, setScraped_data] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            setError("Invalid ID");
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);
        setProgress(10);
            
        axios.get(`http://127.0.0.1:8000/api/scraped_data/${id}/`)
        .then((response) => {
            setProgress(30);
            console.log(response.data);
            setScraped_data(response.data);
            setLoading(false);
            setProgress(100);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, [id, setProgress]);

    const sanitizeHtml = (html) => {
        return DOMPurify.sanitize(html);
    };

    return (
        <div className='container my-3'>
            { loading && <Loader /> }
            { error && <Error message={error} /> }
            { scraped_data ? (
                <>
                    <h1 style={{margin: '35px 0px', marginTop: '90px'}}>{scraped_data.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(scraped_data.content)}}></p>  
                </>
            ) : (
                !loading && <p>No data found.</p>
            )}
        </div>
    )
}
