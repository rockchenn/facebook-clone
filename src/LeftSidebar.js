import React from 'react';
import Avatar from '@mui/material/Avatar';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import FlagIcon from '@mui/icons-material/Flag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import HistoryIcon from '@mui/icons-material/History';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import './LeftSidebar.css';

function LeftSidebar(props) {
  return (
    <div className='leftSidebar'>
        <div>
            <Avatar src={ props.avatar } sx={{ width: 32, height: 32}} />
            <h4>{ props.name }</h4>
        </div>
        <div>
            <PeopleIcon style={{ color: '#2374e1', fontSize: '32px' }} />
            <h4>Friends</h4>
        </div>
        <div>
            <GroupsIcon style={{ color: '#f4f8fc', fontSize: '32px' }} />
            <h4>Communities (Groups)</h4>
        </div>
        <div>
            <FlagIcon style={{ color: 'ed5d29', fontSize: '32px' }} />
            <h4>Pages</h4>
        </div>
        <div>
            <StorefrontIcon style={{ color: '#2374e1', fontSize: '32px' }} />
            <h4>Marketplace</h4> 
        </div>
        <div>
            <SmartDisplayIcon style={{ color: '#2374e1', fontSize: '32px' }} />
            <h4>Watch</h4>
        </div>
        <div>
            <HistoryIcon style={{ color: '#2374e1', fontSize: '32px' }} />
            <h4>Memories</h4>
        </div>
        <div>
            <ExpandCircleDownIcon style={{ color: 'b7b8bc', fontSize: '32px' }} />
            <h4>See more</h4>
        </div>
    </div>
  );
}

export default LeftSidebar;