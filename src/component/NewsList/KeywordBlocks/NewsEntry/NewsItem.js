import React from 'react'
import {connect} from 'react-redux'
import url from 'url'
import LinkButton from './LinkButton';

function NewsItem({item, linkToPress}) {
  let host = (link) => url.parse(link).host;
  let {title, originallink, link:naverLink , description, pubDate} = item;
  let pressName = linkToPress[host(originallink)];
  return (
    <div style={{textAlign:'left', marginLeft:'5%', marginRight:'5%', marginBottom:'1vh', backgroundColor:'pink'}}>
      <p dangerouslySetInnerHTML={{__html:title}}></p>
      <p>{pubDate}</p>
      <LinkButton text="N" link={naverLink}/>
      <LinkButton text={pressName} link={originallink}/>
      <p>{pressName}</p>
      <p dangerouslySetInnerHTML={{__html:description}}></p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    linkToPress: state.press.allowed
  }
}

export default connect(mapStateToProps, null)(NewsItem)
