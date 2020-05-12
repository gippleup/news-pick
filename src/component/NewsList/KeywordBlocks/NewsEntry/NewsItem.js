import React, { useState } from 'react'
import {connect} from 'react-redux'
import url from 'url'
import LinkButton from './LinkButton';
import {Icon} from '../../../resources';
import * as actions from '../../../../redux/action/creator'

function NewsItem({keyword, itemId, item, linkToPress, digNews}) {
  let host = (link) => url.parse(link).host;
  let [digged, setDigged] = useState(false);
  let {title, originallink, link:naverLink , description, pubDate} = item;
  let pressName = linkToPress[host(originallink)];
  let topButtonIconSize = '1.5em'
  let topButtonIconStyle = {
    width: topButtonIconSize,
    height: topButtonIconSize,
    margin: '1em',
  }

  let showMore = () => {
    if (digged) return;
    digNews(keyword, itemId, naverLink)
    setDigged(true);
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
      <div className='news-title' style={{backgroundColor:'#CEA07E', padding: '5px 20px'}}>
        <p style={{marginBottom:'0.5em', marginTop:'0.5em'}} dangerouslySetInnerHTML={{__html:title}}></p>
      </div>
      
      {/* Body */}
      <div class='news-description-container'>
        <div style={{display:'flex', justifyItems:'center'}}>
          <p style={{display:'inline-block', marginRight:'3px'}}>{pubDate}</p>
          <LinkButton text="Naver" color='#27db27' link={naverLink}/>
          <LinkButton text={pressName} color='#75ffbc' link={originallink}/>
        </div>
        <div className='news-description'>
          <div className='description-curtain'></div>
          <p dangerouslySetInnerHTML={{__html:description}}></p>
        </div>
        <button className='news-item-show-more' onClick={showMore}>더 보기</button>
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
