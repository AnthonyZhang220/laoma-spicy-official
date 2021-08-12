import React, { Component } from 'react'
import { BrowserRouter as Router , Link } from 'react-router-dom';
import styles from './Cover.module.css';

export default class Cover extends Component {
  render() {
    return (
      <div className={styles.main_cover}>
        <Router>
        <Link to='/'>Cover Page Component........</Link>
        </Router>
      </div>
    )
  }
}
