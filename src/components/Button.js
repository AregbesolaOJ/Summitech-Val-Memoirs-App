import React from "react";
const Button = ({ clicked, children }) => {
    const btnStyles = ['btn']
    return (
        <div className={btnStyles.join('')} onClick={clicked}>
            {children}
        </div>
    )
}

export default Button;