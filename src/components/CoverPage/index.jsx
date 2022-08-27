import React from 'react';
import Video from './Cover.mp4';
import styles from './index.module.css';
import logo from '../../../../../image/laoma-logo3.png';
import IconButton from "@mui/material/IconButton";
import Fingerprint from '@mui/icons-material/Fingerprint';
import Typography from '@mui/icons-material/Typography';

export default function Cover() {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <img className={styles.Logo} src={logo} alt='LaoMa Logo' />
        <Typography>
          “天下大事必做於細，天下難事必做於易。"
        </Typography>
        <Typography>
          Enter
        </Typography>
        <IconButton aria-label="fingerprint">
          <Fingerprint />
        </IconButton>
      </div>
      <div className={styles.background}>
        <video className={styles.video} autoPlay loop muted playsInline src={Video} type='video/mp4' />
        <div className={window.scrollY <= 50 ? styles.arrow : styles.arrow_none}></div>
      </div>
    </div>
  )
}
