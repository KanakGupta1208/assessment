import React from 'react'
import "../buttons/button.css"

function Button() {
    return (
        <div className="buttons-container">
            <button className="button browse-btn">Browse Test Data</button>
            <button className="button connect-btn">
                <div className="circle-plus"></div>
                Connect Domain
            </button>
        </div>
    )
}

export default Button