import React, {useState} from 'react';
import styles from './index.module.css';
import { NavItems } from "./NavItems/NavItems";
import { Link } from 'react-router-dom';

function HeaderNav (){
    const [click, setClick] = useState(false);
    const [navbar,setNavbar] = useState(false);
    const [isHome,setIsHome] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const changeBackground= () =>{
        if(window.scrollY >= 50){
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
                    {NavItems.map((item, index)=> {
                        return (
                            <li key={index}>
                                    <Link onClick={closeMobileMenu} className={styles[item.cName]} to={item.url}>
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