import React, { useRef, useEffect } from 'react';
import Video from './Cover.mp4';
import laoma_cover from './laoma_cover.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'

import './Cover.scss';


export default function Cover() {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const video = videoRef.current;
    
    const drawVideo = (fixedHeight) => {
      const videoAspect = video.videoWidth / video.videoHeight;
      
      // Define a fixed height for the video (adjust as needed)
      const fixedVideoHeight = fixedHeight;
      
      // Calculate video size based on the original aspect ratio
      const drawWidth = fixedVideoHeight * videoAspect;
      const drawHeight = fixedVideoHeight;
      
      const drawX = (canvas.width - drawWidth) / 2;
      const drawY = (canvas.height - drawHeight) / 2;
      
      ctx.drawImage(video, drawX, drawY, drawWidth, drawHeight);
    };
    
    const handleLoadedData = () => {
      video.play();
    };
    
    const handleResize = () => {
      // Adjust canvas size on window resize
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Redraw the video on the resized canvas
      drawVideo(window.innerHeight);
    }

    const handlePlay = () => {
      const animate = () => {
        if (!video.paused && !video.ended) {
          drawVideo(window.innerHeight);
          requestAnimationFrame(animate);
        }
      };

      animate();
    };

    handleResize();

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('play', handlePlay);
    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up the event listener when the component is unmounted
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('play', handlePlay);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box className="cover" id="cover">
      <Box className="cover-flex-container">
        <Box className="cover-center" component={Link} to="/home">
          <img className="logo" src={laoma_cover} alt='LaoMa Logo' />
          <Button variant="contained" component={Link} to="/home" size="large" sx={{ m: 1, px: 2, opacity: 0.9, borderRadius: "8px" }}>
            Enter / 进入
          </Button>
        </Box>
      </Box>
      <Box className="background">
        <canvas id="canvas" ref={canvasRef}></canvas>
        <video className="video" ref={videoRef} autoPlay muted playsInline loop>
          <source src={Video} type="video/mp4" />
        </video>
      </Box>
    </Box>
  )
}
