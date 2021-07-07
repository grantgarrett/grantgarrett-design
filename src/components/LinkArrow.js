import React from "react"
import PropTypes from 'prop-types';
import { Link } from "gatsby"

//Icons
import IconRightArrow from "../images/icons/arrow-right"
import IconLeftArrow from "../images/icons/arrow-left"

const LinkArrow = (props) => {
  const arrowDirectionForward = props.arrowDirectionForward;
  return (
    <Link to={`${props.url}`} className={`suggest-case-study-link ${props.theme}`} >
      {arrowDirectionForward === false && <IconLeftArrow />}
      {props.label}
      {arrowDirectionForward === true && <IconRightArrow />}
    </Link>
  );
}

LinkArrow.defaultProps = {
  url: ``,
  label: `Go`,
  theme: `default`,
  arrowDirectionForward: true
}

LinkArrow.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.string,
  arrowDirectionForward: PropTypes.bool
}

export default LinkArrow;