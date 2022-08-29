import React, { useState } from 'react';
import { NavItems } from "./NavItems/NavItems";
import { Link, Outlet } from 'react-router-dom';
import nav_logo from "./nav_logo.png";
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './HeaderNav.scss';

function HeaderNav() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);

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
        <React.Fragment>
            <nav className={`NavItems ${navbar ? "active" : ""}`}>
                <Box className="menu_icon" onClick={handleClick}>
                    {click ? <CloseIcon sx={{ fontSize: 40 }} /> : <MenuIcon sx={{ fontSize: 40 }} />}
                </Box>
                <Box className={`nav_menu ${click ? "active" : ""}`}>
                    {NavItems.map((item, index) => {
                        return (
                            <Box key={index}
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    justifyContent: "center",
                                    "&:first-child > a":
                                    {
                                        marginRight: "auto",
                                        justifySelf: "flex-start",
                                    },
                                    "&:last-child  > a":
                                    {
                                        marginLeft: "auto",
                                        justifySelf: "flex-end",
                                    }
                                }}>
                                <Link onClick={closeMobileMenu} className={`nav_links ${navbar ? "active" : ""}`} to={item.url}>
                                    {
                                        item.title === "Home"
                                            ?
                                            <img src={nav_logo} height="50px" width="auto" alt="nav logo" />
                                            :
                                            item.title.toUpperCase()}
                                </Link>
                            </Box>
                        )
                    })}
                </Box>
            </nav >
            <Outlet />
        </React.Fragment >
    );
}

export default HeaderNav;