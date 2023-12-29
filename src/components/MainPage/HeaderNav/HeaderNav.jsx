import React, { useEffect, useState } from 'react';
import { NavItems } from "./NavItems/NavItems";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

import './HeaderNav.scss';

function HeaderNav({ openMobileMenu, handleMobileMenu }) {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
        return () => {
            window.removeEventListener("scroll", changeBackground)
        }
    })

    return (
        <>
            <nav className={`nav nav_mobile ${navbar ? "active" : ""} ${openMobileMenu ? "" : "mobile_menu_open"}`}>
                <Box className="menu_icon" onClick={handleMobileMenu}>
                    {!openMobileMenu ? <CloseIcon sx={{ fontSize: 40 }} /> : <MenuIcon sx={{ fontSize: 40 }} />}
                </Box>
                <Box className="nav_container">
                    <Box className="nav_menu_link">
                        {NavItems.map((item, index) => {
                            return (
                                <Box key={index}>
                                    <Link onClick={openMobileMenu ? null : handleMobileMenu} className={`nav_links ${navbar ? "active" : ""}`} to={item.url}>
                                        {item.title.toUpperCase()}
                                    </Link>
                                </Box>
                            )
                        })}
                    </Box>
                    <Box className="nav-buttons">
                        <Button variant='contained' sx={{ fontSize: 20, borderRadius: "500px", backgroundColor: "#121212", color: "#ffffff" }} component="a" href="https://qmenu.us/#/lao-ma-spicy-new-york">
                            Order Now
                        </Button>
                    </Box>
                </Box>
            </nav>
        </>
    )
}

export default HeaderNav;