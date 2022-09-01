import React from 'react'
import './Footer.scss';

export default function Footer() {

  return (
    <footer className="footer">
      <div className="text_footer">
        <a className="copyright" href="https://anthonyzhang.netlify.app">
          Copyright &copy; {new Date().getFullYear()} by LAO MA SPICY. All rights reserved.
        </a>
      </div>
    </footer>
  )
}
