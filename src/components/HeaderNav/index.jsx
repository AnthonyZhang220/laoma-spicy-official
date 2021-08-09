import React, {useState} from 'react';
import './index.css'
import logo from '../../image/laoma-logo.png'
import { NavItems } from "./NavItems/NavItems";
import { Link } from 'react-router-dom';

function HeaderNav (){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    return (
            <nav className="NavItems">
                <div> 
                    <Link to='/'>
                    <img className="NavLogo" src={logo} alt='LaoMa Logo'/>
                    </Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times':'fas fa-bars'}>
                    </i>
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    {NavItems.map((item, index)=> {
                        return (
                            <li key={index}>
                                    <Link onClick={closeMobileMenu} className={item.cName} to={item.url}>
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