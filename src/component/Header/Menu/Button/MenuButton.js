import React from 'react'
import AnimeMenu from './Generic/AnimeMenu'

function MenuButton({showMenu}) {
  let rightHanded = false;
  let toggleMenu = () => {
    let {state, set} = showMenu;
    set(!state)
  }
  return (
    <div 
    onClick={toggleMenu}
    style={{
      display:'flex',
      position:'relative',
      top:0,
      right: rightHanded ? '0' : null,
      backgroundColor:'white', 
      width:'50px',
      height:'50px',
      padding:'auto',
      marginLeft:'5px',
      borderRadius:'50%', 
      boxShadow:'0 0 10px rgba(0,0,0,0.3)'}}>
      <AnimeMenu/>
    </div>
  )
}

export default MenuButton
