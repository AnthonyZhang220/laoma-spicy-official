import React, { useState } from 'react';
import styles from './index.module.css';
import { NavItems } from "./NavItems/NavItems";
import { Link } from 'react-router-dom';
import uber_logo1 from './Uber-Eats-logo.png'
import uber_logo from './uber-eats.svg'

function HeaderNav() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);
    // const [isHome, setIsHome] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={`${navbar && styles.active} ${styles.NavItems}`}>
            <div className={styles.menu_icon} onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}>
                </i>
            </div>
            <ul className={`${click && styles.active} ${styles.nav_menu}`}>
                {NavItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link onClick={closeMobileMenu} className={`${navbar && styles.active} ${styles[item.cName]}`} to={item.url}>
                                {item.title.toUpperCase()}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <div className={styles.delivery_icon}>
                <a href="https://www.ubereats.com/store/lao-ma-spicy-%E8%80%81%E5%AA%BD%E9%BA%BB%E8%BE%A3%E7%87%99/7BL09unDTgOoPhVr8lEmVw" target="_blank" rel='noreferrer'>
                    <img className={styles.uber_logo} src={uber_logo} alt="uber eat" />
                </a>
                <a href='https://www.yelp.com/biz/laoma-spicy-new-york-2' target="_blank" rel='noreferrer'>
                    <i className="fab fa-yelp"></i>
                </a>
                <a href='https://www.instagram.com/laomaspicy/' target="_blank" rel='noreferrer'>
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </nav>

    );
}

export default HeaderNav;