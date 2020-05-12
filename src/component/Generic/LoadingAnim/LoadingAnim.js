import React, { useEffect } from 'react'
import anime from 'animejs'
function LoadingAnim() {
  let container = React.createRef();
  let circleStyle = {
    position: 'relative',
    width: '10px',
    height: '10px',
    marginRight: '5px',
    borderRadius: '10px',
    backgroundColor: 'white',
    border: '1px solid black'
  }
  
  let createCircle = (n) => {
    let result = []
    for (let i = 0; i < n; i += 1) {
      result.push(
        <div key={i} style={{transformOrigin: '0 -5px', height:'fit-content', width:'fit-content'}}>
          <div style={circleStyle}></div>
        </div>
      )
    }
    return result;
  }

  useEffect(() => {
    let target = container.current.childNodes;
    anime.remove(target)
    anime({
      targets: target,
      rotate: 360,
      loop: true,
      easing: 'easeOutCubic',
      delay: anime.stagger(100),
      duration: 1000,
    })
  })

  return (
    <>
    <div style={{display:'flex'}} ref={container}>
      {createCircle(10)}
    </div>
    </>
  )
}

export default LoadingAnim
