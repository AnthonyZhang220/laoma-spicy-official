import React, { useEffect, useState } from 'react';
import { NavItems } from "./NavItems/NavItems";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Time from '../Home/Time/Time';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';


import './HeaderNav.scss';


const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: "300px",
    },
});

function HeaderNav() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const isMobile = useMediaQuery('(min-width:900px)');


    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    function getIfOpen() {
        const date = new Date();
        const hour = ('00' + date.getHours()).slice(-2);
        const minute = ('00' + date.getMinutes()).slice(-2);
        const currentTime = hour + ":" + minute;
        if (currentTime > "11:00" && currentTime < "21:30") {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        getIfOpen();
    }, [isOpen])

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
                            <Box key={index}>
                                <Link onClick={closeMobileMenu} className={`nav_links ${navbar ? "active" : ""}`} to={item.url}>
                                    {item.title.toUpperCase()}
                                </Link>
                            </Box>
                        )
                    })}
                    <Box className="nav_menu_button"
                        sx={{
                            position: "absolute",
                            right: 0,
                            '& > a': {
                                m: 1
                            }
                        }}
                    >
                        <Tooltip
                            disableFocusListener
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 200 }}
                            title={
                                <Box className="address">
                                    <Typography variant="body1">
                                        <span>58 E 8</span>
                                        <sup className="sup">th</sup>
                                        &nbsp;
                                        <span>Street, New York 10003</span>
                                    </Typography>
                                </Box>
                            }
                        >
                            <Button variant="contained" className="address" component="a" href='https://goo.gl/maps/NwvfQMkCZcUZZY8u9' startIcon={<PlaceIcon />} sx={{ borderRadius: "500px", backgroundColor: "#121212", color: "#ffffff", letterSpacing: "0.05rem" }}>
                                Location
                            </Button>
                        </Tooltip>
                        <Tooltip
                            disableFocusListener
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 200 }}
                            title={<Typography variant='body1'>(212) 777-1887</Typography>}
                        >
                            <Button variant="contained" className="tel" component="a" href='tel:+12127771887' startIcon={<PhoneIcon />} sx={{ borderRadius: "500px", backgroundColor: "#121212", color: "#ffffff", letterSpacing: "0.05rem" }}>
                                Call Us
                            </Button>
                        </Tooltip>
                        <CustomWidthTooltip
                            disableFocusListener
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 200 }}
                            title={<Time />}
                        >
                            {isOpen ?
                                <Button variant="contained" className="working-hours" component="a" startIcon={<AccessTimeFilledIcon />} sx={{ borderRadius: "500px", backgroundColor: "#121212", color: "#ffffff", letterSpacing: "0.05rem" }}>
                                    Open
                                </Button> :
                                <Button variant="contained" className="working-hours" component="a" startIcon={<AccessTimeFilledIcon />} sx={{ borderRadius: "500px", backgroundColor: "#121212", color: "#ffffff", letterSpacing: "0.05rem" }}>
                                    Closed
                                </Button>
                            }
                        </CustomWidthTooltip>
                    </Box>
                </Box>
            </nav >
        </React.Fragment >
    );
}

export default HeaderNav;