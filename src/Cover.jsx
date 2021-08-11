import React, { Component } from 'react'
import { BrowserRouter as Router , Link } from 'react-router-dom';
import './Cover.css';

export default class Cover extends Component {
  render() {
    return (
      <div className='main-cover'>
        <Router>
        <Link to='/'>Cover Page Component........</Link>
        </Router>
      </div>
    )
  }
}
