import React, { useState, useEffect } from 'react'
import MenuButton from './Menu/Button/MenuButton';
import Searcher from './Searcher/Searcher';
import MenuBar from './Menu/Bar/MenuBar';

function Header() {
  let container = React.createRef();
  let [showMenu, setShowMenu] = useState(false);

  useEffect(()=>{
    let headerFunc = (e) => {
      if (!container.current) return;
      let { scrollY } = window;
      if (scrollY <= 10) {
        container.current.className = 'header ontop';
      } else {
        container.current.className = 'header';
      }
    }
    window.removeEventListener('scroll', headerFunc);
    window.addEventListener('scroll', headerFunc);
  })

  return (
    <div style={{position:'fixed', zIndex:100}}>
      {/* <div style={{height:'64px'}}></div> */}
      <div ref={container}
      className='header'>
        <MenuButton showMenu={{state:showMenu, set: (state) => setShowMenu(state)}}/>
        <Searcher/>
      </div>
      <MenuBar showMenu={showMenu}/>
    </div>
  )
}

export default Header
