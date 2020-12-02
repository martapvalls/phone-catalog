import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return ( 
        <nav className="header">
            <FontAwesomeIcon icon={faMobileAlt} size="2x"/>
            <h1 className="header__title"> <Link to={'/'}> The Phone Store </Link> </h1>
        </nav >
     );
}
 
export default Header;