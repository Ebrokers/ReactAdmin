import React from 'react'



export default function Header() {
    return (
             <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/properties">Properties</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Merchants">Merchants</a>
                </li>
            </ul>
    )
}