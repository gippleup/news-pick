import React, { useState } from 'react'
import NewsItem from './NewsEntry/NewsItem'
import {Icon} from '../../resources'
import { connect } from 'react-redux';
import * as actions from '../../../redux/action/creator'

function KeywordBlock(props) {
  let {items, keyword, deleteBlock} = props;

  const [hasSpread, setHasSpread] = useState(false);

  const toggleSpread = () => {
    setHasSpread(!hasSpread);
  }

  const Close = () => {
    let style = {width:'24px', height:'24px'}
    let {x: XIcon} = Icon;
    return <XIcon style={style}/>
  }

  const Chevron = () => {
    let style = {width:'24px', height:'24px'}
    let {chevronDown: ChevDown, chevronUp: ChevUp} = Icon;
    return hasSpread ? <ChevUp style={style}/> : <ChevDown style={style}/>
  }

  let itemDisplay = hasSpread ? 'block' : 'none';

  let newsItems = items.map((item, i) => <NewsItem key={i} item={item}/>) 

  return (
    <div style={{backgroundColor:'grey', margin:'0 auto 10px auto'}}>
      <br/>
      <div style={{backgroundColor:'lightgreen', display:'grid', gridTemplateColumns:'auto 50%', padding:'2em 0 2em 0', alignItems:'center'}}>
        <div style={{textAlign:'left', marginLeft:'5vw', display:'inline-block'}}>
          <h1 style={{display:'inline'}}>{keyword}</h1>
          <h2 style={{display:'inline'}}>{`(${items.length})`}</h2>
        </div>
        <div style={{textAlign:'right'}}>
          <button onClick={toggleSpread} style={{marginRight:'2vw', height:'40px', width:'40px', outline:0, borderRadius:'50%'}}>{Chevron()}</button>
          <button onClick={deleteBlock.bind(null, {items, keyword})} style={{marginRight:'3vw', height:'40px', width:'40px', outline:0, borderRadius:'50%'}}>{Close()}</button>
        </div>
      </div>
      <div style={{display:itemDisplay}}>
        {newsItems}
      </div>
      <br/>
    </div>
  )
}

const mapStateToProps = state => ({
  filter: {
    press: state.filter.press,
    customTag: state.filter.customTag,
  },
  linkToPress: state.press.allowed
})

const mapDispatchToProps = dispatch => ({
  deleteBlock: ({items, keyword}) => {
    dispatch(actions.deleteQuery(keyword))
    dispatch(actions.deleteNewsBlock({items, keyword}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(KeywordBlock)
