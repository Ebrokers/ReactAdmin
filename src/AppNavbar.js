import React from 'react'

export default function Header() {
    return (
             <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/properties">Properties</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/merchants">Merchants</a>
                </li>
            </ul>
    )
}