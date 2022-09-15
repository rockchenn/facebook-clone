import React from 'react';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Menu.css';

function Menu() {
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
            <AccountCircleIcon style={{ color: '#b0b3b8', fontSize: '24px' }} />
        </div>
    </div>
  );
}

export default Menu;