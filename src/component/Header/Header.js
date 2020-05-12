import React, { useState, useEffect } from 'react'
import MenuButton from './Menu/Button/MenuButton';
import Searcher from './Searcher/Searcher';
import anime from 'animejs';
import MenuBar from './Menu/Bar/MenuBar';

function Header() {
  let container = React.createRef();
  let [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div style={{height: '64px'}}></div>
      <div ref={container}
      style={{
        display:'grid',
        gridTemplateColumns:'auto auto',
        alignItems:'center',
        position: 'fixed',
        top:0, height:'64px', width:'100%', 
        backgroundColor:'#443742'}}>
        <MenuButton showMenu={{state:showMenu, set: (state) => setShowMenu(state)}}/>
        <Searcher/>
      </div>
      <MenuBar showMenu={showMenu}/>
    </>
  )
}

export default Header
