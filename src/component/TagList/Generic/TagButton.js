import React from 'react'
import {Icon} from '../../resources'
function TagButton({text, filtered, actions, type}) {
  const XIcon = Icon.x;
  const onClickX = () => {
    actions.deleteTag(text);
  }

  const deleteButton = (
    <button onClick={onClickX} style={{marginLeft:'5px', padding:0, height:'100%'}}>
      {<XIcon style={{width:'16px', height:'16px'}}/>}
    </button>
  )

  const selectiveRender = (condition) => {
    return condition ? deleteButton : <></>
  }

  return (
    <button 
    onClick={actions.toggleTag.bind(null, [text])}
    className={`tag${filtered ? ' filtered' : ''}${type ? ' ' + type : ''}`}>
      {text}
      {selectiveRender(actions.deleteTag !== undefined)}
    </button>
  )
}

export default TagButton
