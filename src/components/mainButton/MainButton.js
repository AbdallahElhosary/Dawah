import React from 'react'
import "./MainButton.scss"
const MainButton = ({ title }) => {
    return (
        <button className="button">
            {title}
        </button>
    )
}

export default MainButton
