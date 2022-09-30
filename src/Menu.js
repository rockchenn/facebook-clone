import React from 'react';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import './Menu.css';

function Menu(props) {
  return (
    <div className='menu'>
        <div className='menu__menu'>
            <WidgetsIcon style={{ color: '#b0b3b8', fontSize: '24px' }} />
        </div>
        <div className='menu__message'>
            <MessageIcon style={{ color: '#b0b3b8', fontSize: '24px' }} />
        </div>
        <div className='menu__notification'>
            <NotificationsIcon style={{ color: '#b0b3b8', fontSize: '24px' }} />
        </div>
        <div className='menu__account'>
            <Avatar src={props.avatar} sx={{ width: 24, height: 24}} />
        </div>
    </div>
  );
}

export default Menu;