import React from "react"
import PropTypes from "prop-types"

const IconDownArrow = ({ className, fill }) => (
  <svg
    width="12"
    height="16"
    viewBox="0 0 12 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5.24002 14.96L0.240018 9.98001C0.0800186 9.82 1.67456e-05 9.62 1.67544e-05 9.42C1.67631e-05 9.21999 0.0800186 9.02 0.240018 8.86C0.560019 8.54 1.06002 8.54 1.38002 8.86L5.02002 12.48L5.02002 0.8C5.02002 0.36 5.38002 -2.73633e-07 5.82002 -2.544e-07C6.26002 -2.35167e-07 6.62002 0.36 6.62002 0.8L6.62002 12.48L10.26 8.86C10.58 8.54 11.08 8.54 11.4 8.86C11.72 9.18 11.72 9.68 11.4 10L6.40001 14.98C6.06002 15.28 5.54002 15.28 5.24002 14.96Z"
      fill={fill}
    />
  </svg>
)

IconDownArrow.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
}

IconDownArrow.defaultProps = {
  className: "arrow-down",
  fill: "#ABB9C9",
}
export default IconDownArrow
