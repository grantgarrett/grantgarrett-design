// import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import GLogo from "../images/icons/g-logo"
//https://www.npmjs.com/package/react-tooltip
import ReactTooltip from "react-tooltip"



const Footer = () => {
  const [emailTooltipText, setEmailTooltipText] = useState("Click to copy");

  return (
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
            <button
              className="email-copy-button"
              onClick={() => { setEmailTooltipText("Copied!"); navigator.clipboard.writeText("grant@grantgarrett.com") }}
              data-tip={emailTooltipText}
              data-for="emailContent"
            >
              email <span>grant@grantgarrett.com</span>
            </button>
          </li>

        </ul>
      </div>
      <ReactTooltip id="emailContent" className='tooltip' effect="solid" getContent={() => emailTooltipText} afterShow={() => setEmailTooltipText("Click to copy")} />
    </footer>
  )
}

export default Footer