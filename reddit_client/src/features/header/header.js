import React from 'react';

import { FaReddit } from 'react-icons/fa'

import '../../css/Header.css'

const Header = () => {

    return (
        <header>
            <div className="logo">
                <FaReddit className="logo-icon" />
                <p>Reddit Client</p>
            </div>
        </header>
    )
}

export default Header;