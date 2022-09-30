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
import { Scrollbars } from 'react-custom-scrollbars-2';
import { red } from '@mui/material/colors';

function LeftSidebar(props) {
  return (
    <div className='leftSidebar'>
        <Scrollbars
            style={{ height: '100%' }}
            autoHide
            renderThumbVertical={({ style, props}) =>
                <div style={{ ...style, backgroundColor: '#b7b8bc80', borderRadius: '3px', width: '7px' }} {...props} />
            }>
            <div className='leftSidebar__item'>
                <Avatar src={ props.avatar } sx={{ width: 32, height: 32}} />
                <h4>{ props.name }</h4>
            </div>
            <div className='leftSidebar__item'>
                <PeopleIcon style={{ color: '#2374e1', fontSize: '32px' }} />
                <h4>Friends</h4>
            </div>
            <div className='leftSidebar__item'>
                <GroupsIcon style={{ color: '#f4f8fc', fontSize: '32px' }} />
                <h4>Communities (Groups)</h4>
            </div>
            <div className='leftSidebar__item'>
                <FlagIcon style={{ color: 'ed5d29', fontSize: '32px' }} />
                <h4>Pages</h4>
            </div>
            <div className='leftSidebar__item'>
                <StorefrontIcon style={{ color: '#2374e1', fontSize: '32px' }} />
                <h4>Marketplace</h4> 
            </div>
            <div className='leftSidebar__item'>
                <SmartDisplayIcon style={{ color: '#2374e1', fontSize: '32px' }} />
                <h4>Watch</h4>
            </div>
            <div className='leftSidebar__item'>
                <HistoryIcon style={{ color: '#2374e1', fontSize: '32px' }} />
                <h4>Memories</h4>
            </div>
            <div className='leftSidebar__item'>
                <ExpandCircleDownIcon style={{ color: 'b7b8bc', fontSize: '32px' }} />
                <h4>See more</h4>
            </div>
        </Scrollbars>
    </div>
  );
}

export default LeftSidebar;