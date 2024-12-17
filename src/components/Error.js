import React from 'react'

export default function Error({ message }) {
    
    return (
        <div className="container">
            <div className='alert alert-danger my-3' role='alert'>{ message }</div>
        </div>
    )
}
