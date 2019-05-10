import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <div className="page_header">
            <div className="page_header_logo">VAL MEMOIRS</div>
            <div className="page_header_navigations">
                <p>STORY COLLECTIONS</p>
                <p>NEWS {'&'} MEDIA</p>
                <p>SHOP</p>
                <p>ABOUT VAL MEMOIRS</p>
            </div>            
            <div id="mobileMenu" className="hide">
                <FontAwesomeIcon icon="bars" color='#fff' size="2x"/>
            </div>
        </div>
    )
}

export default Header;