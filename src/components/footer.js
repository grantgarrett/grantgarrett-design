import { Link } from "gatsby"
import React from "react"
import GLogo from "../images/icons/g-logo"

const Footer = () => (
  <footer>
    <div className="section-wrapper">
      <div className="footer-logo">
        <Link to="/">
          <GLogo />
          <div className="site-text">grantgarrett<span>.design</span></div>
        </Link>
      </div>
      <a
        href="http://twitter.com/grantgarrett"
        target="_blank"
        rel="noopener noreferrer"
      >
        twitter <span>@grantgarrett</span>
      </a>
      <a
        href="mailto:grant@grantgarrett.com?subject=Hi, from your porftolio site"
        className="email"
        target="_blank"
        rel="noopener noreferrer"
      >
        email <span>grant@grantgarrett.com</span>
      </a>
      <a
        href="http://www.grantgarrett.com"
        target="_self"
      // rel="noopener noreferrer"
      >
        personal site <span>grantgarrett.com</span>
      </a>

    </div>
  </footer>
)

export default Footer
