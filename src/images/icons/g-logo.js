import React from "react"
import PropTypes from "prop-types"

const GLogo = ({ className, fill }) => (
  <svg
    width="24"
    height="36"
    className={className}
    viewBox="0 0 24 36"
    // fill="none"
    alt="arrow"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.855 2.78761C18.3381 1.0885 19.8386 0.238938 21.3566 0.238938C22.1941 0.238938 22.8397 0.469027 23.2933 0.929204C23.7644 1.38938 24 1.89381 24 2.44248C24 3.61062 23.4766 4.19469 22.4297 4.19469C21.8539 4.19469 21.3566 3.83186 20.9378 3.10619C20.554 2.43363 20.1527 2.09735 19.7339 2.09735C19.0709 2.09735 18.3381 2.55752 17.5354 3.47788C18.4427 4.9292 18.8964 6.46903 18.8964 8.09735C18.8964 10.2212 18.1461 12.0973 16.6456 13.7257C15.145 15.3717 12.615 16.2566 9.05562 16.3805C5.3566 16.5044 3.50709 17.2655 3.50709 18.6637C3.50709 19.3186 3.92585 19.7788 4.76336 20.0442C5.58342 20.3274 7.3108 20.5398 9.94547 20.6814C12.8244 20.823 15.0403 21.0973 16.5932 21.5044C18.1461 21.8938 19.385 22.6903 20.3097 23.8938C21.2345 25.0973 21.6968 26.531 21.6968 28.1947C21.6968 30.531 20.7546 32.4159 18.8702 33.8496C16.9858 35.2832 14.2726 36 10.7306 36C7.48528 36 4.8855 35.3628 2.9313 34.0885C0.977099 32.8142 0 31.2035 0 29.2566C0 28.177 0.279171 27.292 0.837514 26.6018C1.39586 25.9115 2.18975 25.5664 3.21919 25.5664C3.49836 25.5664 3.75136 25.6106 3.97819 25.6991C2.8964 26.9027 2.35551 28.177 2.35551 29.5221C2.35551 31.0796 3.07088 32.3628 4.50164 33.3717C5.94984 34.3982 8.10469 34.9115 10.9662 34.9115C13.5136 34.9115 15.494 34.3894 16.9073 33.3451C18.3381 32.3186 19.0534 31 19.0534 29.3894C19.0534 27.6195 18.4166 26.3717 17.1429 25.646C15.8691 24.9381 13.6009 24.5133 10.3381 24.3717C6.5867 24.2124 4.15267 23.7434 3.03599 22.9646C1.9193 22.2035 1.36096 21.2212 1.36096 20.0177C1.36096 17.6991 2.95747 16.2389 6.15049 15.6372C4.49291 14.646 3.24537 13.5133 2.40785 12.2389C1.57034 10.9646 1.15158 9.53982 1.15158 7.9646C1.15158 5.75221 2.00654 3.87611 3.71647 2.33628C5.44384 0.778761 7.48528 0 9.84079 0C12.7546 0 15.0927 0.929204 16.855 2.78761ZM5.07743 8.57522C5.07743 10.8584 5.5398 12.531 6.46456 13.5929C7.38931 14.6549 8.56707 15.1858 9.99782 15.1858C11.3239 15.1858 12.458 14.6637 13.4002 13.6195C14.3599 12.5575 14.8397 10.7257 14.8397 8.12389C14.8397 5.50442 14.3337 3.69912 13.3217 2.70796C12.3097 1.71681 11.1668 1.22124 9.89313 1.22124C8.2879 1.22124 7.08397 1.83186 6.28135 3.0531C5.47874 4.27434 5.07743 6.11504 5.07743 8.57522Z"
    // fill="#757E8D" 
    />
  </svg>
)

GLogo.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
}

GLogo.defaultProps = {
  className: "g-logo",
  fill: "#eee",
}
export default GLogo
