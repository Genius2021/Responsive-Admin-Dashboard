import React from 'react'
import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
            <header className="header">
                <div className="header-brand"><Link to="/"><span className="starcodes">Starcodes</span> <span className="africa">Africa</span></Link></div>
                <nav className="header-links">
                    <li className="header-link"><Link to="/portfolio">Portfolio</Link></li>
                    <li className="header-link"><Link to="/blog">Blog</Link></li>
                    <li className="header-link"><Link to="/about">About</Link></li>
                    <li className="header-link"><Link to="/signup">Join</Link></li>
                </nav>
            </header>
        </div>

    )
}

export default Header

