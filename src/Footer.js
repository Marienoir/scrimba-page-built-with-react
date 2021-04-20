import React from 'react'

function Footer(){
    return(
        <div className = "footer">
            <div>
                <h2>Sign up to download the free PDF</h2>
                <div>
                    <input type="text" placeholder="First name"></input>
                    <input type="text" placeholder="Last name"></input>
                </div>
                <div>
                    <input type="text" placeholder="john@email.com"></input>
                    <input type="text" placeholder="Your title"></input>
                </div>
                <button>Create Account</button>
                <p>Made with love by Marynoir</p>
            </div>
        </div>
    )
}

export default Footer