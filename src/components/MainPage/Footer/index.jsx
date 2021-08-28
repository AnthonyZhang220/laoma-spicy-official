import React, { Component } from 'react'
import styles from './index.module.css';

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.text_footer}>
          <div className={styles.follow}>
            <h3>Follow</h3>
            <h3>Address</h3>
            <address>
              <p>58 E. 8th Street, New York 10003</p>
              </address>
            <h3>Contacts</h3>
          </div>
          <div className={styles.copyright}>
            <p>Copyrights &copy; {new Date().getFullYear()} by LAO MA SPICY INC. All rights reserved. </p> 
            <p>Created & Designed by Anthony Zhang</p>
          </div>
        </div>
      </div>
    )
  }
}
