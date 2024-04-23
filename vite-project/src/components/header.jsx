import React from 'react'

function Header() {
    return (
    <div className="header">
            <div className="logo">
                <span className="black">MIN</span>
                <span className="yellow">FILM</span>
            </div>

            <div className="search-box">
                <input type="text" placeholder="Hitta din film..." />
            </div>
    </div>
        )
}

export default Header;