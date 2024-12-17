import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'
import Loader from './Loader'
import Error from './Error'

export default function ScrapedList({ searchQuery, setProgress }) {
    
    const [scraped_datas, setScraped_datas] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchScrapedData = async (query = "") => {
        setLoading(true);
        setError(null);
        setProgress(0)

        try { 
            const endpoint = query ? `http://127.0.0.1:8000/api/search/?q=${query}` : `http://127.0.0.1:8000/api/scraped_data/`;
            setProgress(10)
            const response = await axios.get(endpoint)
            setScraped_datas(response.data);
            setLoading(false);
            setProgress(100)
        }
        catch(err) {
            setError(err.response?.data?.message || "An error occured");
            setLoading(false);
            setProgress(100)
        }
    }

    useEffect(() => {
        fetchScrapedData(searchQuery);
        // eslint-disable-next-line
    }, [searchQuery, setProgress]);

    return (
        <>
            <h1 className='text-center' style={{margin: '35px 0px', marginTop: '90px'}}>Scraped Results</h1>
            { loading && <Loader /> }
            { error && <Error message={error} /> }
            <div className="container">
                <div className="row">
                    { scraped_datas.map((data) => {
                        return ( <div className="col-md-4" key={data.id}>
                            <Card data={data} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
