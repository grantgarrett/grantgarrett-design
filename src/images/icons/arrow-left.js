import React from "react"
import PropTypes from "prop-types"

const IconLeftArrow = ({ className, fill }) => (
  <svg
    width="16"
    height="12"
    className={className}
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.634972 6.56015L5.61496 11.5602C5.77496 11.7202 5.97497 11.8002 6.17497 11.8002C6.37497 11.8002 6.57497 11.7202 6.73497 11.5602C7.05497 11.2402 7.05497 10.7401 6.73497 10.4201L3.11496 6.78015H14.795C15.235 6.78015 15.595 6.42015 15.595 5.98015C15.595 5.54015 15.235 5.18015 14.795 5.18015H3.11496L6.73497 1.54016C7.05497 1.22016 7.05497 0.720156 6.73497 0.400156C6.41497 0.0801563 5.91497 0.0801563 5.59497 0.400156L0.614964 5.40016C0.314964 5.74016 0.314972 6.26015 0.634972 6.56015Z"
      fill={fill}
    />
  </svg>
)

IconLeftArrow.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
}

IconLeftArrow.defaultProps = {
  className: "arrow-left",
  fill: "#CAD5E2",
}
export default IconLeftArrow
