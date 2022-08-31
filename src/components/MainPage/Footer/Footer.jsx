import React, { useEffect, useState } from 'react'
import './Footer.scss';

export default function Footer() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.scrollY <= 30) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    console.log(window.scrollY)
  }, [])

  return (
    <div className="footer" style={{ opacity: visible ? 1 : 0, transition: "0.1s" }}>
      <div className="text_footer">
        <a className="tel" href='tel:+12127771887'>(212) 777-1887</a>
        <a className="address"
          href='https://goo.gl/maps/NwvfQMkCZcUZZY8u9'>
          <span>58 E 8</span>
          <sup className="sup">th</sup>
          <span>Street, New York 10003</span>
        </a>
        <a className="copyright" href="https://anthonyzhang.netlify.app">
          Copyright &copy; {new Date().getFullYear()} by LAO MA SPICY. All rights reserved.
        </a>
      </div>
    </div>
  )
}
