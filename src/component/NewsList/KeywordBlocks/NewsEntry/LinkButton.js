import React, { createRef } from 'react'
import anime from 'animejs';

function LinkButton({text, link, color}) {
  let linkButton = createRef();

  const mouseOverAnim = () => {
    let target = linkButton.current;
    anime.remove(target);
    anime({
      targets: target,
      backgroundColor: 'rgb(255,255,255)',
      scale:1.2,
      duration: 100,
      easing:'easeOutCubic'
    })
  }

  const mouseLeaveAnim = () => {
    let target = linkButton.current;
    anime.remove(target);
    anime({
      targets: target,
      backgroundColor: color,
      duration: 100,
      scale:1.0,
      easing: 'easeOutCubic'
    })
  }

  return (
    <a style={{margin:'auto 3px'}} target="_blank" rel="noopener noreferrer" href={link}>
      <button onMouseOver={mouseOverAnim} onMouseLeave={mouseLeaveAnim} ref={linkButton} style={{fontWeight:'bold', cursor:'pointer', backgroundColor:color, borderRadius:'10px', width:'fit-content', height:'2em', outline:0, border:0}}>
        {text}
      </button>
    </a>
    
  )
}

export default LinkButton
