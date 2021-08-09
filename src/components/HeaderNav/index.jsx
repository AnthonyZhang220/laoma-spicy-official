import React, { Component } from 'react';
import './index.css'
import logo from '../../image/laoma-logo.png'
import { NavItems } from "./NavItems/NavItems";
import { Link } from 'react-router-dom';

class HeaderNav extends Component {
    state = {clicked: false}
    state = {mobileclicked: false}

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
        this.setState({mobileclicked: !this.state.mobileclicked})
    }

    render() {
        return (
            <nav className="NavItems">
                <div> 
                    <Link to='/'>
                    <img className="NavLogo" src={logo} alt='LaoMa Logo'/>
                    </Link>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}>
                    </i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {NavItems.map((item, index)=> {
                        return (
                            <li key={index}>
                                    <Link className={item.cName} to={item.url}>
                                        {item.title}
                                    </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        );
    }
}

export default HeaderNav;