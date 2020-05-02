import React from 'react'
import {connect} from 'react-redux'
import KeywordBlock from './KeywordBlocks/KeywordBlock'

function NewsList({keywordBlocks}) {
  
  let blocks = Object.keys(keywordBlocks).map((keyword, i) => {
    let {items} = keywordBlocks[keyword];
    return <KeywordBlock key={i} keyword={keyword} items={items}/>
  })

  return (
    <div>
      {blocks}      
    </div>
  )
}

const mapStateToProps = state => ({
  keywordBlocks: state.news.keywords
})

export default connect(mapStateToProps, null)(NewsList);
