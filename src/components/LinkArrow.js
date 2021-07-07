import React from "react"
import PropTypes from 'prop-types';
import { Link } from "gatsby"
import styled from 'styled-components'


//Icons
import IconRightArrow from "../images/icons/arrow-right"
import IconLeftArrow from "../images/icons/arrow-left"

const handleColor = theme => {
  switch (theme) {
    case "sprinklr":
      return "#fff";
    case "sightbox":
      return "#0ec8ea";
    case "inquicker":
      return "#ee3124";
    case "invision":
      return "#ff3366";
    default:
      return "#cad5e2";
  }
};


const StyledLink = styled(Link)`

  font-size: 16px;
  text-decoration: none;
  color: ${({ theme }) => handleColor(theme)};
  position: relative;
  background: transparent;

  &:hover {
    text-decoration: none;
    .arrow-right {
      transform: translateX(3px);
    }
    //stretch underline on hover
    &:after {
      width: 100%;
    }
  }
  //underline
  &:after {
    content: "";
    position: absolute;
    display: block;
    border-bottom: 1px solid rgba(238, 49, 36, 0.01);
    width: 0;
    left: 0;
    transition: width 0.4s ease, 0.8s border-color ease;
  }
  &:hover:after {
    border-bottom: 1px solid ${({ theme }) => handleColor(theme)};;
  }
  .arrow-right, .arrow-left {
    vertical-align: middle;
    padding-bottom: 3px;
    transition: 0.5s transform ease;
    fill: ${({ theme }) => handleColor(theme)};
  }
  .arrow-left {
    margin-right: 3px;
  }
  &:hover .arrow-left {
    transform: translateX(-3px);
  }

  &.default {
    &:after {
      right: 0;
      left: auto;
    }
  }
`



const LinkArrow = (props) => {

  const arrowDirectionForward = props.arrowDirectionForward;

  return (
    <StyledLink to={`${props.url}`} className={`${props.theme}`} theme={props.theme} >
      {arrowDirectionForward === false && <IconLeftArrow />}
      {props.label}
      {arrowDirectionForward === true && <IconRightArrow />}
    </StyledLink>
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