import React, {useState} from 'react';
import styles from './index.module.css';
import logo from '../../../image/laoma-logo.png';
import { NavItems } from "./NavItems/NavItems";
import { Link } from 'react-router-dom';

function HeaderNav (){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    return (
            <nav className={styles.NavItems}>
                <div> 
                    <Link to='/'>
                    <img className={styles.NavLogo} src={logo} alt='LaoMa Logo'/>
                    </Link>
                </div>
                <div className={styles.menu_icon} onClick={handleClick}>
                    <i className={click ? 'fas fa-times':'fas fa-bars'}>
                    </i>
                </div>
                <ul className={click ? styles.nav_menu.active : styles.nav_menu}>
                    {NavItems.map((item, index)=> {
                        return (
                            <li key={index}>
                                    <Link onClick={closeMobileMenu} className={`styles.${item.cName}`} to={item.url}>
                                        {item.title}
                                    </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        );
}

export default HeaderNav;