import React, {useEffect} from 'react'
import anime from 'animejs'

function MenuBar({showMenu}) {
  let menu = React.createRef();

  useEffect(() => {
    let target = menu.current;
    anime.remove(target);
    anime({
      targets: target,
      width: showMenu ? '300px' : 0,
      easing: showMenu ? 'easeOutElastic(1, .5)' : 'easeOutCubic',
      duration: showMenu ? 500 : 500
    })
  })

  return (
    <div ref={menu} style={{position:'fixed', backgroundColor:'white', zIndex:'100', width:'300px', height:'100%', top:'64px', left:0}}>
    </div>
  )
}

export default MenuBar
