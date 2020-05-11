import React from 'react'
import {connect} from 'react-redux'
import KeywordBlock from './KeywordBlocks/KeywordBlock'
const url = require('url');

function NewsList({keywordBlocks, filter, linkToPress}) {
  
  let blocks = Object.keys(keywordBlocks).map((keyword, i) => {
    if (filter.keyword[keyword]) {return <></>}
    let {items} = keywordBlocks[keyword];
    let filteredItems = items
      .filter((item) => {
        let host = url.parse(item.originallink).host
        let press = linkToPress[host]
        if (filter.press[press]) return false
        return true
      })
    let isLast = false;
    if (keywordBlocks.length - 1 === i) {isLast=true}
    return <KeywordBlock key={i} isLast={isLast} keyword={keyword} items={filteredItems}/>
  })

  return (
    <div>
      {blocks}      
    </div>
  )
}

const mapStateToProps = state => ({
  keywordBlocks: state.news.keywords,
  filter: {
    keyword: state.filter.tag,
    press: state.filter.press,
    customTag: state.filter.custom,
  },
  linkToPress: state.press.allowed,
})

export default connect(mapStateToProps, null)(NewsList);
