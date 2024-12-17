import React from 'react'
import { Link } from 'react-router-dom'
import DOMPurify from 'dompurify'

export default function Card({data}) {

    const sanitizeHtml = (html) => {
        return DOMPurify.sanitize(html)
    };

    return (
        <div className="my-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.content.slice(0,500))}}></p>
                    <p className="card-text"><small className='text-muted'> Scraped at: {new Date(data.ScrapedAt).toGMTString()}</small></p>
                    <Link to={`/scraped_data/${data.id}`}  className="btn btn-sm btn-dark">Continue reading</Link>
                </div>
            </div>
        </div>
    )
}
