import { Link } from "gatsby"
import React from "react"
import GLogo from "../images/icons/g-logo"

const Footer = () => (
  <footer>
    <div className="section-wrapper">
      <ul>
        <li>
          <div className="footer-logo">
            <GLogo />
            <Link to="/">
              <div className="site-text">grantgarrett<span>.design</span></div>
            </Link>
          </div>

        </li>
        <li>
          <a
            href="http://twitter.com/grantgarrett"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter <span>@grantgarrett</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:grant@grantgarrett.com?subject=Hi, from your porftolio site"
            className="email"
            target="_blank"
            rel="noopener noreferrer"
          >
            email <span>grant@grantgarrett.com</span>
          </a>
        </li>
        <li>
          <a
            href="http://www.grantgarrett.com"
            target="_self"
          // rel="noopener noreferrer"
          >
            personal site <span>grantgarrett.com</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
