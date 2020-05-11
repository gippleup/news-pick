import React from 'react'

function LinkButton({text, link, color}) {
  return (
    <a style={{margin:'auto 3px'}} target="_blank" rel="noopener noreferrer" href={link}>
      <button style={{fontWeight:'bold', cursor:'pointer', backgroundColor:color, borderRadius:'10px', width:'fit-content', height:'2em', outline:0}}>
        {text}
      </button>
    </a>
    
  )
}

export default LinkButton
