import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import url from 'url'
import LinkButton from './LinkButton';
import {Icon} from '../../../resources';
import * as actions from '../../../../redux/action/creator'
import LoadingAnim from '../../../Generic/LoadingAnim/LoadingAnim';

function NewsItem({keyword, itemId, item, linkToPress, digNews}) {
  let host = (link) => url.parse(link).host;
  let [digging, setDigging] = useState(false);
  let [showMore, setShowMore] = useState(false);
  let {title, originallink, link:naverLink , description, pubDate} = item;
  let pressName = linkToPress[host(originallink)];
  let topButtonIconSize = '1.5em'
  let topButtonIconStyle = {
    width: topButtonIconSize,
    height: topButtonIconSize,
    margin: '1em',
  }

  let toggleShowMore = () => {
    if (digging) return;
    digNews(keyword, itemId, naverLink)
    setShowMore(true);
    setDigging(true);
  }

  let selectiveRender = () => {
    if (item.digged) {
      return <></>
    } else if (digging) {
      return <LoadingAnim/>
    } else {
      return <></>
    }
  }

  let curtainClass = () => {
    let base = 'description-curtain'
    return !item.digged && digging ? base + ' digging' : base
  }

  return (
    <>
    <div style={{textAlign:'left', marginLeft:'5%', marginRight:'5%', marginBottom:'2em', marginTop:'2em'}}>
      {/* Top Bar */}
      <div style={{height:'fit-content', borderRadius:'20px 5px 0 0', backgroundColor:'rgba(255,255,255,0.1)', textAlign:'right', padding:0, margin:0}}>
        <button className='news-item-top-button'><Icon.export style={topButtonIconStyle}/></button>
        <button className='news-item-top-button'><Icon.tag style={topButtonIconStyle}/></button>
        <button className='news-item-top-button'><Icon.x style={topButtonIconStyle}/></button>
      </div>
      
      {/* Title */}
      <div className='news-title' style={{position:'relative', backgroundColor:'#CEA07E', padding: '5px 20px'}}>
        <p style={{marginBottom:'0.5em', marginTop:'0.5em'}} dangerouslySetInnerHTML={{__html:title}}></p>
      </div>
      
      {/* Body */}
      <div className='news-description-container'>
        <div style={{display:'flex', justifyItems:'center'}}>
          <p style={{display:'inline-block', marginRight:'3px'}}>{pubDate}</p>
          <LinkButton text="Naver" color='#27db27' link={naverLink}/>
          <LinkButton text={pressName} color='#75ffbc' link={originallink}/>
        </div>
        <div className='news-description'>
          <div onTransitionEnd={(e)=> {if(!item.digged) return; let self = e.target; self.outerHTML=''}} className={curtainClass()}>
            {selectiveRender()}
          </div>
          <p dangerouslySetInnerHTML={{__html:description}}></p>
        </div>
        <div style={{display:'block', margin:0}}>
          <button className='news-item-show-more' onClick={toggleShowMore}>더 보기</button>
        </div>
      </div>

    </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    linkToPress: state.press.allowed
  }
}

export default connect(mapStateToProps, {...actions})(NewsItem)
