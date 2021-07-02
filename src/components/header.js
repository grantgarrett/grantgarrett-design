import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useRef } from "react"
import GLogo from "../images/icons/g-logo"
//https://www.npmjs.com/package/react-tooltip
import ReactTooltip from "react-tooltip"
import Tippy from '@tippyjs/react';

const Header = ({ siteTitle, pageTitle }) => {
  const [emailTooltipText, setEmailTooltipText] = useState("Click to copy my email");
  const ref = useRef();

  return (
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

          <button
            className="email-copy-button"
            ref={ref}
            onClick={() => { setEmailTooltipText("Copied!"); navigator.clipboard.writeText("grant@grantgarrett.com") }}
          >
            grant@<span>grantgarrett.com</span>
          </button>



          {/* <button
            className="email-copy-button"
            onClick={() => { setEmailTooltipText("Copied!"); navigator.clipboard.writeText("grant@grantgarrett.com") }}
            data-tip={emailTooltipText}
            data-for="emailTooltipHeader"
          >
            grant@<span>grantgarrett.com</span>
          </button> */}
        </div>
        {/* <ReactTooltip id="emailTooltipHeader" className='tooltip' place="bottom" effect="solid" getContent={() => emailTooltipText} afterShow={() => setEmailTooltipText("Click to copy my email")} /> */}

      </div>
      <Tippy
        content={emailTooltipText}
        className="tooltip"
        placement="bottom"
        reference={ref}
        hideOnClick={false}
        offset={[0, 8]}
        // onUntrigger={() => setEmailTooltipText("Click to copy my email")}
        onHidden={() => setEmailTooltipText("Click to copy my email")}
      />
    </header>

  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  pageTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  pageTitle: ``,
}

export default Header
