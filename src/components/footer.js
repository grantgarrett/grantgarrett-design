// import { Link } from "gatsby"
import React, { useState, useRef } from "react"
import GLogo from "../images/icons/g-logo"
import Tippy from '@tippyjs/react';

const Footer = () => {
  const [emailTooltipText, setEmailTooltipText] = useState("Click to copy my email");
  // tooltip stuff
  const ref = useRef();
  // const [source, target] = useSingleton();

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
            >
              personal url <span>grantgarrett.com</span>
            </a>
          </li>
          <li>
            <button
              className="email-copy-button"
              onClick={() => { setEmailTooltipText("Copied! Email me!"); navigator.clipboard.writeText("grant@grantgarrett.com") }}
              ref={ref}
            >
              email <span>grant@grantgarrett.com</span>
            </button>
          </li>

        </ul>
      </div>
      <Tippy
        content={emailTooltipText}
        className="tooltip"
        placement="top"
        reference={ref}
        hideOnClick={false}
        offset={[0, 4]}
        animation={false}
        onHidden={() => setEmailTooltipText("Click to copy my email")}
      />
    </footer>
  )
}

export default Footer