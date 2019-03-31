import React from "react"
import PropTypes from "prop-types"

const IconRightArrow = ({ className, fill }) => (
  <svg
    width="24"
    height="24"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    alt="arrow"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.3651 12.56L14.3851 17.56C14.2251 17.72 14.0251 17.8 13.8251 17.8C13.6251 17.8 13.4251 17.72 13.2651 17.56C12.9451 17.24 12.9451 16.74 13.2651 16.42L16.8851 12.78H5.20509C4.76509 12.78 4.40509 12.42 4.40509 11.98C4.40509 11.54 4.76509 11.18 5.20509 11.18H16.8851L13.2651 7.54004C12.9451 7.22004 12.9451 6.72003 13.2651 6.40003C13.5851 6.08003 14.0851 6.08003 14.4051 6.40003L19.3851 11.4C19.6851 11.74 19.6851 12.26 19.3651 12.56Z"
      fill={fill}
    />
  </svg>
)

IconRightArrow.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
}

IconRightArrow.defaultProps = {
  className: "arrow-right",
  fill: "#ee3124",
}
export default IconRightArrow
