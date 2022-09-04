import React, { useRef, useEffect } from 'react';
import Video from './Cover.mp4';
import laoma_cover from './laoma_cover.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'

import './Cover.scss';


export default function Cover() {

  const canvasRef = useRef();


  useEffect(() => {
    // const video = canvasRef.current;
    // const ctx = video.getContext("2d");
    // let animationFrameId;

    // function drawVideo() {
    //   ctx.canvas.width = video.clientWidth;
    //   ctx.canvas.height = video.clientWidth;
    //   ctx.drawImage(video, 0, 0, ctx.canvas.width, ctx.canvas.height);
    // }

    // drawVideo();
    // animationFrameId = window.requestAnimationFrame(drawVideo)

    // return () => {
    //   window.cancelAnimationFrame(animationFrameId)
    // }
  }, [])

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
        <canvas id="canvas" ref={canvasRef}>
          <video className="video" autoPlay loop muted playsInline src={Video} type='video/mp4' />
        </canvas>
      </Box>
    </React.Fragment>
  )
}
