import React from 'react'
import {Icon} from '../../resources'
function TagButton({text, filtered, actions}) {
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
    style={{
      borderRadius: '10px',
      display:'inline-block', 
      backgroundColor: filtered ? 'grey' : 'lightgreen',
      padding: '5px 10px 5px 10px',
      outline: 0,
      margin:'5px'}}>
      {text}
      {selectiveRender(actions.deleteTag !== undefined)}
    </button>
  )
}

export default TagButton
