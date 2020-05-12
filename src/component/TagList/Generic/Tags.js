import React from 'react'
import TagButton from './TagButton'

function Tags({actions, list, buttonText, style, type}) {
  let {toggleTag, clearAll, deleteTag} = actions;

  let existingTag = list.total.filter((item) => list.exist[item])
  let mappedTag = existingTag.map((item) => ({
    text: item,
    filtered: list.filtered[item],
  }))

  let emptyEle = <></>

  let simpleButton = (text, onClick) => {
    if (onClick === undefined) return emptyEle;
    return (
      <div style={{display:'inline-block', paddingBottom:'10px'}}>
        <button onClick={onClick}>{text}</button>
      </div>
    )
  }

  let deleteButton = () => simpleButton(buttonText.deleteTag, deleteTag);
  let clearButton = () => simpleButton(buttonText.clearAll, clearAll);

  let selectiveRender = (condition) => {
    return condition ? <>{clearButton()}{deleteButton()}</> : emptyEle
  }

  let random = n => Math.floor(Math.random() * n);

  return (
    <div style={style}>
      <div>
        {mappedTag.map((tag, i) => {
          let {text, filtered} = tag;
          return <TagButton key={i} actions={{toggleTag}} type={type} text={text} filtered={filtered}/>
        })}
      </div>
      <div>
        {selectiveRender(existingTag.length)}
      </div>
    </div>
  )
}

export default Tags
