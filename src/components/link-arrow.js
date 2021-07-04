import React from "react"
import { Link } from "gatsby"

//Icons
import IconRightArrow from "../images/icons/arrow-right"

const LinkArrow = (props) => {
    return (
        <Link to={`${props.url}`} className={`suggest-case-study-link ${props.brand}`} >
            {props.title}
            < IconRightArrow />
        </Link>
    );
}

export default LinkArrow;