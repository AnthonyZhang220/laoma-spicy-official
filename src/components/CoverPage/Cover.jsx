import React from 'react';
import Video from './Cover.mp4';
import laoma_cover from './laoma_cover.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'

import './Cover.scss';


export default function Cover() {

  const handleEnterSite = () => {

  }

  return (
    <React.Fragment>
      <Box className="cover" id="cover">
        <Box className="cover-flex-container">
          <Box component={Link} to="/home">
            <img className="logo" src={laoma_cover} alt='LaoMa Logo' />
          </Box>
          <Button variant="contained" component={Link} to="/home" size="large" sx={{ m: 1, px: 2, opacity: 0.9, borderRadius: "8px" }}>
            Enter / 进入
          </Button>
        </Box>
        <video className="video" autoPlay loop muted playsInline src={Video} type='video/mp4' />
      </Box>
    </React.Fragment>
  )
}
