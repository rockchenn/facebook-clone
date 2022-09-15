import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import './Option.css';

function Option() {
  return (
    <div className='option'>
        <div className='option__home'>
            <HomeIcon style={{ color: '#2374e1', fontSize: '36px' }} />
        </div>
        <div className='option__watch'>
            <SmartDisplayIcon style={{ color: '#b0b3b8', fontSize: '36px' }} />
        </div>
        <div className='option__marketplace'>
            <StorefrontIcon style={{ color: '#b0b3b8', fontSize: '36px' }} />
        </div>
        <div className='option__communities'>
            <PeopleIcon style={{ color: '#b0b3b8', fontSize: '36px' }} />
        </div>
        <div className='option__gaming'>
            <SportsEsportsIcon style={{ color: '#b0b3b8', fontSize: '36px' }} />
        </div>
    </div>
  );
}

export default Option;