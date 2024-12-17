import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter, faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
    
    return (
        <>
            <div className="b-example-divider" style={{marginTop: '90px', backgroundColor: 'grey', height: '40px'}}></div>

            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <Link to="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <img src=".\favicon-32x32.png" alt="..."/>
                        </Link>
                        <span className="mb-3 mb-md-0 text-body-secondary">Made with &hearts; by MFA &copy; {new Date().getFullYear()}, Web Scraper.<br /> All rights reserved.
                        </span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3">
                            <Link className="text-body-secondary" to="https://x.com/Fa90959Adil">
                                <FontAwesomeIcon icon={faSquareTwitter} className='fa-xl' style={{color: '#36c6f6'}}/>
                            </Link>
                        </li>
                        
                        <li className="ms-3">
                            <Link className="text-body-secondary" to="https://instagram.com/_a_dil_9964">
                                <FontAwesomeIcon icon={faInstagram} className='fa-xl' style={{color: '#ff0000'}} />
                            </Link>
                        </li>

                        <li className="ms-3">
                            <Link className="text-body-secondary" to="https://facebook.com/mohammed.adil.963">
                                <FontAwesomeIcon icon={faFacebook} className='fa-xl' style={{color: '#00b2ff'}} />
                            </Link>
                        </li>

                        <li className="ms-3">
                            <Link className="text-body-secondary" to="https://linkedin.com/in/mohammed-faheem-adil-a40525202">
                                <FontAwesomeIcon icon={faLinkedin} className='fa-xl' style={{color: '#00b2ff'}} />
                            </Link>
                        </li>

                        <li className="ms-3">
                            <Link className="text-body-secondary" to="https://github.com/Mohammedadil878">
                                <FontAwesomeIcon icon={faGithub} className='fa-xl' style={{color: '#313131'}} />
                            </Link>
                        </li>
                    </ul>
                </footer>   
            </div> 
        </>
    )
}
