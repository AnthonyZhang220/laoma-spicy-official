import React, { Component } from 'react';
import Video from './bgvideo.mp4';
import styles from './index.module.css';

export default class BgVideo extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.video}>
            <video autoPlay loop muted src={Video} type='video/mp4' />
          </div>
          <section className={styles.center}>
            <h1>老妈香锅</h1>
            <p>“天下大事必做於細，天下難事必做於易。”</p>
          </section>
        </div>
      </div>
    )
  }
}
