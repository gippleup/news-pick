import React from 'react'

function LinkButton({text, link}) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <button>
        {text}
      </button>
    </a>
    
  )
}

export default LinkButton
