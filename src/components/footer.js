// import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer>
    <div className="section-wrapper">
      {/* <Link to="/">
        grantgarrett<span>.design</span>
      </Link> */}
      <a
        href="http://twitter.com/grantgarrett"
        target="_blank"
        rel="noopener noreferrer"
      >
        @grantgarrett
      </a>

      <a
        href="http://www.grantgarrett.com"
        target="_self"
        // rel="noopener noreferrer"
      >
        grantgarrett.com
      </a>
      <a
        href="mailto:grant@grantgarrett.com?subject=Hi, from your porftolio site"
        className="email"
        target="_blank"
        rel="noopener noreferrer"
      >
        grant@<span>grantgarrett.com</span>
      </a>
    </div>
  </footer>
)

export default Footer
