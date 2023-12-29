import React from 'react'
import Box from '@mui/material/Box';
import { Tooltip, Typography } from '@mui/material';

import "./Hero.scss"

export default function Hero() {

    return (
        <Box className="hero">
            <Box className="hero-logo-container">
                <img className="hero-logo" src="images/laoma.png" alt="images/laoma.png" />
            </Box>
            <Box className="hero-title" sx={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
            }} >
                <Box className="hero-title-line">
                    <Typography variant='h4' style={{ display: "inline-flex" }}>
                        Spicy Dry Hotpot & Stew
                    </Typography>
                </Box>
            </Box>
            <Box className="hero-delivery-icon-container">

                <Box sx={{ display: "flex", m: 1, p: 1, justifyContent: "center", alignItems: "center", }}>
                    <Box
                        component="a"
                        href='https://www.instagram.com/laomaspicy/' target="_blank" rel='noreferrer'
                        className="skill-icon-item" sx={{
                            backgroundColor: "#ffffff",
                            borderRadius: "50%",
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;',
                            m: 1,
                            p: 1.5,
                        }}>
                        <Tooltip title={"Instagram"}>
                            <img src="./images/icons/instagram.png" style={{ display: "block" }} alt="instagram" height="40px" width="40px" />
                        </Tooltip>
                    </Box>
                    <Box
                        component="a"
                        href='https://www.yelp.com/biz/laoma-spicy-new-york-2' target="_blank" rel='noreferrer'
                        className="skill-icon-item" sx={{
                            backgroundColor: "#ffffff",
                            borderRadius: "50%",
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;',
                            m: 1,
                            p: 1.5,
                        }}>
                        <Tooltip title={"Yelp"}>
                            <img src="./images/icons/yelp.png" alt="yelp" height="40px" width="40px" style={{ display: "block" }} />
                        </Tooltip>
                    </Box>
                    <Box
                        component="a"
                        href='https://www.ubereats.com/store/lao-ma-spicy-%E8%80%81%E5%AA%BD%E9%BA%BB%E8%BE%A3%E7%87%99/7BL09unDTgOoPhVr8lEmVw' target="_blank" rel=' noreferrer'
                        className="skill-icon-item" sx={{
                            backgroundColor: "#ffffff",
                            borderRadius: "50%",
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;',
                            m: 1,
                            p: 1.5,
                        }}>
                        <Tooltip title={"Uber Eat"}>
                            <img src="./images/icons/ubereats.png" style={{ display: "block" }} alt="instagram" height="40px" width="40px" />
                        </Tooltip>
                    </Box>
                    <Box
                        component="a"
                        href='https://www.facebook.com/laomaspicy/' target="_blank" rel='noreferrer'
                        className="skill-icon-item" sx={{
                            backgroundColor: "#ffffff",
                            borderRadius: "50%",
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;',
                            m: 1,
                            p: 1.5,
                        }}>
                        <Tooltip title={"Hungry Panda | 熊猫外卖"}>
                            <img src="./images/icons/panda.png" style={{ display: "block", borderRadius: "1rem" }} alt="hungrypanda" height="40px" width="40px" />
                        </Tooltip>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}
