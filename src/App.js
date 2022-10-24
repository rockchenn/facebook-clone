import { useState } from 'react';
import './App.css';
import Search from './Search';
import Option from './Option';
import Menu from './Menu';
import Feed from './Feed';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Login from './Login';

function App() {
  const [ user, setUser ] = useState();
  const [ keyword, setKeyword ] = useState('');

  return (
    <div className="App">
      {user?.name ? (
        <>
          <div className='myHeader'>
            <div className='myHeader__search'><Search setKeyword={ setKeyword } /></div>

            <div className='myHeader__option'><Option /></div>
            
            <div className='myHeader__menu'><Menu avatar={ user.avatar } /></div>
          </div>

          <div className='myBody'>
            <LeftSidebar name={ user.name } avatar={ user.avatar } />
            
            <Feed name={ user.name } avatar={ user.avatar } keyword={ keyword } />

            <RightSidebar />
          </div>
        </>) : <Login cb={ setUser } error={ user?.error } />
      }
    </div>
  );
}

export default App;
