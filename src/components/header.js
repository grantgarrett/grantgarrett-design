import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, pageTitle }) => (
  <header>
    <div className="header-wrapper section-wrapper">
      <Link to="/">
        grantgarrett<span>.design</span>
      </Link>
      <a
        href="mailto:grant@grantgarrett.com?subject=Hi, from your porftolio site"
        className="email"
        target="_blank"
        rel="noopener noreferrer"
      >
        grant@<span>grantgarrett.com</span>
      </a>
    </div>
    {pageTitle.length > 0 ? <h1>{pageTitle}</h1> : null}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  pageTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  pageTitle: ``,
}

export default Header
