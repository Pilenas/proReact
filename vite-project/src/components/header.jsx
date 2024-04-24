import React from 'react'

function Header() {
    return (
    <div className="header">
            <div className="logo-wrapper">
                <img className='logo' src="./src/logo/logo.png" alt="logo" />
            </div>

            <div className="search-box">
                <input className='search-input' type="text" placeholder="Hitta din film..." />
            </div>
    </div>
        )
}

export default Header;