import React from 'react';
import './RightSidebar.css';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function RightSidebar() {
  return (
    <div className='rightSidebar'>
      <div className="contact">
        <div className="contact__header">
          <span>Contacts</span>
          <VideoCameraFrontIcon style={{ color: '#b0b3b8', fontSize: '20px' }} />          
          <SearchIcon style={{ color: '#b0b3b8', fontSize: '20px' }} />          
          <MoreHorizIcon style={{ color: '#b0b3b8', fontSize: '20px' }} />          
        </div>
        <div className="contact__body">

        </div>
      </div>
    </div>
  );
}

export default RightSidebar;