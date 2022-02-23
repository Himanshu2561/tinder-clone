import React from 'react';
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';

function Header() {
    return <div className='header'>

        <IconButton>
            <PersonIcon fontSize='large' className='header_icon' />
        </IconButton>

        <img src="https://www.tinderpressroom.com/image/flame-gradient-RGB_tn1100-category.png" alt="" className="header_logo" />

        <IconButton>
            <ForumIcon fontSize='large' className='header_icon' />
        </IconButton>
    </div>;
}

export default Header;
