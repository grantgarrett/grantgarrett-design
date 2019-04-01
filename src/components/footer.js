import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer>
    <div className="section-wrapper">
      <Link to="/">
        grantgarrett<span>.design</span>
      </Link>
      <a
        href="http://twitter.com/grantgarrett"
        target="_blank"
        rel="noopener noreferrer"
      >
        @grantgarrett
      </a>
    </div>
  </footer>
)

export default Footer
