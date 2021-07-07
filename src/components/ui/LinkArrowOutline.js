import React from "react"
import PropTypes from 'prop-types';
import { Link } from "gatsby"
import styled from 'styled-components'


//Icons
import IconRightArrow from "../../images/icons/arrow-right"

const handleColor = theme => {
  switch (theme) {
    case "sprinklr":
      return "#dae2eb";
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
const handleHoverColor = theme => {
  switch (theme) {
    case "sprinklr":
      return "#000";
    case "sightbox":
      return "#fff";
    case "inquicker":
      return "#fff";
    case "invision":
      return "#fff";
    default:
      return "#fff";
  }
};


const StyledLink = styled(Link)`
  color: ${({ theme }) => handleColor(theme)};
  font-size: 16px;
  text-decoration: none;
  position: relative;
  border: solid 1px ${({ theme }) => handleColor(theme)};
  border-radius: 30px;
  padding: 10px 14px 8px;
  display: inline-block;
  white-space: nowrap;
  transition: 0.7s;

  .icon-arrow {
    fill: ${({ theme }) => handleColor(theme)};
    vertical-align: middle;
    padding-bottom: 3px;
    transition: 0.5s transform ease;
  }
  &:hover {
    text-decoration: none;
    background-color: ${({ theme }) => handleColor(theme)};
    color: ${({ theme }) => handleHoverColor(theme)};
    .icon-arrow {
      transform: translateX(3px);
      fill: ${({ theme }) => handleHoverColor(theme)};
    }
  }
`

const LinkArrowOutline = (props) => {

  return (
    <StyledLink to={`${props.url}`} theme={props.theme} >
      {props.label}
      <IconRightArrow className="icon-arrow" />
    </StyledLink>
  );
}

LinkArrowOutline.defaultProps = {
  url: ``,
  label: `Go`,
  theme: `default`,
}

LinkArrowOutline.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.string,
}

export default LinkArrowOutline;