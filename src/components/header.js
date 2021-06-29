import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import GLogo from "../images/icons/g-logo"


const Header = ({ siteTitle, pageTitle }) => (
  <header>
    <div className="header-wrapper section-wrapper">
      <div className="header-logo">
        <GLogo />
        <Link to="/">
          <div className="site-text">grantgarrett<span>.design</span></div>
        </Link>
      </div>

      <div className="header-title">
        {pageTitle.length > 0 ? <h1 className="page-header">{pageTitle}</h1> : null}
      </div>

      <div className="header-email">
        <a
          href="mailto:grant@grantgarrett.com?subject=Hi, from your porftolio site"
          className="email"
          target="_blank"
          rel="noopener noreferrer"
        >
          grant@<span>grantgarrett.com</span>
        </a>
      </div>

    </div>
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
