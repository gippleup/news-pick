import React, { useState } from 'react'
import NewsItem from './NewsEntry/NewsItem'
import {Icon} from '../../resources'

function KeywordBlock(props) {
  const [hasSpread, setHasSpread] = useState(false);

  const toggleSpread = () => {
    setHasSpread(!hasSpread);
  }

  const Chevron = () => {
    let style = {width:'32px', height:'32px'}
    let {chevronDown: ChevDown, chevronUp: ChevUp} = Icon;
    return hasSpread ? <ChevUp style={style}/> : <ChevDown style={style}/>
  }

  let itemDisplay = hasSpread ? 'block' : 'none';

  let newsItems = props.items.map((item, i) => <NewsItem key={i} item={item}/>)

  return (
    <div style={{backgroundColor:'grey', margin:'10px auto 10px auto'}}>
      <br/>
      <div style={{backgroundColor:'lightgreen', display:'grid', gridTemplateColumns:'auto 20%', alignItems:'center'}}>
        <h1 style={{textAlign:'left', marginLeft:'5vw', display:'inline-block'}}>{props.keyword}</h1>
        <div style={{textAlign:'right'}}>
          <button onClick={toggleSpread} style={{marginRight:'5vw', height:'60px', width:'60px'}}>{Chevron()}</button>
        </div>
      </div>
      <div style={{display:itemDisplay}}>
        {newsItems}
      </div>
      <br/>
    </div>
  )
}

export default KeywordBlock
