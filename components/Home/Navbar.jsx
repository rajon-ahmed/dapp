import React from 'react';
import styles from '../../styles/Home.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.navbar}> 
            <ul>
                <li><span>Home</span></li>
                <li><span>About</span></li>
                <li><span>Services</span></li>
                <li><span>Gallary</span></li>
                <li><span>Contact</span></li>
            </ul>
        </nav>
    )
}

export default Navbar