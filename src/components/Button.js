import React from "react";
const Button = ({ clicked, children }) => {
    return (
        <div className="btn" onClick={clicked}>
            {children}
        </div>
    )
}

export default Button;