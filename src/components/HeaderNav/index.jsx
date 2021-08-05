import React, {Component} from 'react';
import './index.css'
import logo from '../../image/laoma-logo.png'
import {NavItems} from "./NavItems/NavItems";
import {Link} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from '../Body/Menu';

class HeaderNav extends Component {
    state = {clicked: false}

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavItems">
                <div>
                    <img className="NavLogo" src={logo} alt='LaoMa Logo'/>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}>
                    </i>
                </div>
                <ul className={this.state.clicked? 'nav-menu active': 'nav-menu'}>
                    {NavItems.map((item, index)=> {
                        return (
                            <li key={index}>
                                <Router>
                                    <Link className={item.cName} href={item.url} to={item.title}></Link>
                                </Router>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        );
    }
}

export default HeaderNav;