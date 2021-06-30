// import { Link } from "gatsby"
import React from "react"
import GLogo from "../images/icons/g-logo"

const Footer = () => (
  <footer>
    <div className="section-wrapper">
      <ul>
        <li>
          <div className="footer-logo">
            <GLogo />
            {/* <Link to="/">
              <div className="site-text">grantgarrett<span>.design</span></div>
            </Link> */}
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
            href="http://www.grantgarrett.com"
            target="_self"
          // rel="noopener noreferrer"
          >
            personal url <span>grantgarrett.com</span>
          </a>
        </li>
        <li>
          <a
            // href="#"
            className="email"
            target="_self"
            rel="noopener noreferrer"
            onClick={() => { navigator.clipboard.writeText("grant@grantgarrett.com") }}
          >
            email <span>grant@grantgarrett.com</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
