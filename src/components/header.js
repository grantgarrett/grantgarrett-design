import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, pageTitle }) => (
  <header>
    <div className="section-wrapper">
      <div>
        <Link to="/">
          grantgarrett<span>.design</span>
        </Link>
      </div>
      {pageTitle.length > 0 ? <h1>{pageTitle}</h1> : null}
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
