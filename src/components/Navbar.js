import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ onSearch }) {

    const [query, setQuery] = useState("");

    const handleSearch = (element) => {
        element.preventDefault();
        onSearch(query);
        setQuery("")
    }

    const handleOnChange = (element) => {
        setQuery(element.target.value)
    }

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">WebScraper</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="nav-link active" aria-current="page" to="/scrapedList">Scraped List</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={handleSearch}>
                            <input className="form-control me-2" type="search" placeholder="Search by title or keyword" value={query} onChange={handleOnChange} aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
