import React from 'react'
import {connect} from 'react-redux'
import url from 'url'
import LinkButton from './LinkButton';
import {Icon} from '../../../resources'

function NewsItem({item, linkToPress}) {
  let host = (link) => url.parse(link).host;
  let {title, originallink, link:naverLink , description, pubDate} = item;
  let pressName = linkToPress[host(originallink)];
  let topButtonIconSize = '1.5em'
  let topButtonIconStyle = {
    width: topButtonIconSize,
    height: topButtonIconSize,
    margin: '1em',
  }

  return (
    <>
    <div style={{textAlign:'left', marginLeft:'5%', marginRight:'5%', marginBottom:'2em', marginTop:'2em'}}>
      {/* Top Bar */}
      <div style={{height:'fit-content', borderRadius:'5px 5px 0 0', backgroundColor:'rgba(255,255,255,0.1)', textAlign:'right', padding:0, margin:0}}>
        <button className='news-item-top-button'><Icon.export style={topButtonIconStyle}/></button>
        <button className='news-item-top-button'><Icon.tag style={topButtonIconStyle}/></button>
        <button className='news-item-top-button'><Icon.x style={topButtonIconStyle}/></button>
      </div>
      
      {/* Title */}
      <div className='news-title' style={{backgroundColor:'white', padding: '5px 20px'}}>
        <p style={{marginBottom:'0.5em', marginTop:'0.5em'}} dangerouslySetInnerHTML={{__html:title}}></p>
      </div>
      
      {/* Body */}
      <div style={{display:'grid', gridTemplateRows:'auto auto', justifyContent:'center', padding:'0 5%', backgroundColor:'pink', borderRadius:'0 0 20px 20px'}}>
        <div style={{display:'flex', justifyItems:'center'}}>
          <p style={{display:'inline-block', marginRight:'3px'}}>{pubDate}</p>
          <LinkButton text="N" color='#27db27' link={naverLink}/>
          <LinkButton text={pressName} link={originallink}/>
        </div>
        <div className='new-description' style={{backgroundColor:'#ffe8e0', borderRadius:'10px', padding:'0 3%', marginBottom:'5%'}}>
          <p dangerouslySetInnerHTML={{__html:description}}></p>
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

export default connect(mapStateToProps, null)(NewsItem)
