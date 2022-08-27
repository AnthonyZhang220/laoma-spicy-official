import React from 'react';
import Video from './Cover.mp4';
import styles from './index.module.css';
import logo from './laoma-logo3.png';
import IconButton from "@mui/material/IconButton";
import Fingerprint from '@mui/icons-material/Fingerprint';
import Typography from '@mui/material/Typography';

export default function Cover() {

  const handleEnterSite = () => {
    const home = document.getElementById("home");
    const cover = document.getElementById("cover");
    home.style.display = "block";
    cover.style.display = "none";


  }

  return (
    <div className={styles.cover} id="cover">
      <div className={styles.center}>
        <img className={styles.Logo} src={logo} alt='LaoMa Logo' />
        <Typography>
          “天下大事必做於細，天下難事必做於易。"
        </Typography>
        <Typography>
          Enter
        </Typography>
        <IconButton aria-label="fingerprint" onClick={handleEnterSite} sx={{ color: "white", fontSize: 40 }}>
          <Fingerprint />
        </IconButton>
      </div>
      <div className={styles.background}>
        <video className={styles.video} autoPlay loop muted playsInline src={Video} type='video/mp4' />
      </div>
    </div>
  )
}
