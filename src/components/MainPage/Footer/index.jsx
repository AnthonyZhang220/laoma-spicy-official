import React, { Component } from 'react'
import uber_logo1 from './Uber-Eats-logo.png'
import uber_logo from './uber-eats.svg'
import styles from './index.module.css';

export default class Footer extends Component {
  state = {
    opacity: '0',
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        // console.log(maxScroll)
        if (currentScrollPos < maxScroll - 10 || null) {
          this.setState({ opacity: "0" })
          // console.log(currentScrollPos)
        } else {
          this.setState({ opacity: "1" })
        }
      }
    }
  }

  render() {
    return (
      <div className={styles.footer} style={{ opacity: `${this.state.opacity}` }}>
        <div className={styles.text_footer}>
          <a className={styles.address}
            href='https://www.google.com/maps/place/Lao+Ma+Spicy/@40.7309168,-73.9956843,17z/data=!3m2!4b1!5s0x89c2599a13c58d79:0x2d291e83dfe037ed!4m5!3m4!1s0x89c259d5fce1cc33:0xd23adc2d1feb382a!8m2!3d40.7309278!4d-73.9934832'>
            <span>58 E 8</span>
            <sup className={styles.sup}>th</sup>
            <span>Street, New York 10003</span></a>
          <a className={styles.tel} href='tel:+12127771887'>(212) 777-1887</a>
          <div className={styles.copyright}>
            Copyrights &copy; {new Date().getFullYear()} by LAO MA SPICY INC. All rights reserved.
          </div>
          <div className={styles.trademark}>
            Created & Designed by Anthony Zhang
          </div>
          <div className={styles.delivery_icon}>
            <a href="https://www.ubereats.com/store/lao-ma-spicy-%E8%80%81%E5%AA%BD%E9%BA%BB%E8%BE%A3%E7%87%99/7BL09unDTgOoPhVr8lEmVw" target="_blank" rel='noreferrer'>
              <img className={styles.uber_logo} src={uber_logo} alt="uber eat" />
            </a>
            <a href='https://www.yelp.com/biz/laoma-spicy-new-york-2' target="_blank" rel='noreferrer'>
              <i className="fab fa-yelp"></i>
            </a>
            <a href='https://www.instagram.com/laomaspicy/' target="_blank" rel='noreferrer'>
              <i className="fab fa-instagram"></i>
            </a>



          </div>
        </div>
      </div>
    )
  }
}
