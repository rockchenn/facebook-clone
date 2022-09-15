import './App.css';
import Search from './Search';
import Option from './Option';
import Menu from './Menu';
import Feed from './Feed';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

function App() {
  return (
    <div className="App">
      { /* header component */ }
      <div className='myHeader'>
        <div className='myHeader__search'><Search /></div>

        <div className='myHeader__option'><Option /></div>
        
        <div className='myHeader__menu'><Menu /></div>
      </div>

      { /* body component */ }
      <div className='myBody'>

        { /* left sidebar */ }
        <div><LeftSidebar /></div>
        
        { /* feed */ }
        <div><Feed /></div>

        { /* right sidebar */ }
        <div><RightSidebar /></div>
      </div>
    </div>
  );
}

export default App;
