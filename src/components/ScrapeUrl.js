import React, { useState } from 'react'
import axios from 'axios';
import Loader from './Loader';
import Error from './Error';

export default function ScrapeUrl({ setProgress }) {
    
    const [url, setUrl] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null); // Clear previous error
        setResult(null); // Clear previous result
        setSuccess(null);
        setProgress(0);
        console.log({loading, error, result, success});
        try {
            setProgress(10);
            const response = await axios.post('http://127.0.0.1:8000/api/scrape/',{url});
            setProgress(30);
            if (response.data) {
                setResult(response.data); 
                setError(null);
                console.log({loading, error, result, success});
            }
            setSuccess('Successfully, Scraped the URL with data and stored in the Database!')
            setProgress(100);
            console.log({loading, error, result, success});
        } catch (error) {
            setError('Failed to Scrape the URL. Please Check the URL and try again.');
            setResult(null);
            setProgress(100);
            console.error('Error Scraping URL : ', error.message);
            setSuccess(null)
            console.log({loading, error, result, success});
        } finally {
            setLoading(false);
        }
        console.log({loading, error, result, success});
    }

    const handleOnChange = (e) => {
        setUrl(e.target.value);
    }

    return (
        <div className='container my-3'>
            <form onSubmit={handleOnSubmit}>
                <h1 className="form-label" style={{marginTop: '90px'}}>Enter a wikipedia URL to Scrape</h1>
                <input type="text" className="form-control" id="inputUrl" value={url} onChange={handleOnChange} placeholder='Enter Url'/>
                <button type="submit" className="btn btn-primary my-2">Scrape</button>
            </form> 

            {/* Show loader when loading */}
            { loading && <Loader /> }

            {/* Show error message */}
            { error && <Error message={error} /> }

            {/* Show Success message */}
            { success && (
                <div className="alert alert-success my-3" role='alert'>{success}</div>
            )}

        </div>
    )
}
