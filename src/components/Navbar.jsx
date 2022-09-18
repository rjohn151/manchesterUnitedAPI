import React from 'react';
import './Navbar.css'
import logo from './img/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className='navbar'>
            {/* <h1>Manchester United</h1> */}
            <img src={logo} alt="manchester united logo" />
            {/* <div class="bottom-line"></div> */}
            <ul>
                {/* <li>
                    <div>Players</div> 
                </li> */}
                <Link to='/players'>Players</Link>

                {/* <li>
                    <div>Standings</div>
                </li> */}
                <Link to='/standings'>Standings</Link>
                {/* <li>
                    <div>Statistics</div>
                </li> */}
                <Link to='/fixtures'>Fixtures</Link>
                {/* <li>
                    <div>Old Trafford</div>
                </li> */}
                <Link to='/stadium'>Old Trafford</Link>
            </ul>
        </nav>
    )
}

export default Navbar
