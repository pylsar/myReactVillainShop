import React from 'react'

import './Header.scss'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to ="/pizza">Пицца</Link></li>
                    <li><Link to ="/nutts">Орешки</Link></li>
                    <li><Link to ="/alcohol">Алкоголь</Link></li>
                    <li><Link to ="/acsessory">Аксессуары Злодея</Link></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header