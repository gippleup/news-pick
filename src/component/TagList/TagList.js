import React from 'react'
import { connect } from 'react-redux'
import Tags from './Generic/Tags'
import * as creator from '../../redux/action/creator'


function TagList({list, actions}) {
  return (
    <div >
      <Tags
      type='keyword'
      style={{backgroundColor:'#846C5B', padding: '1em 0 1em 0'}}
      actions={actions.queries} 
      buttonText={{
        deleteTag:'Delete query',
        clearAll:'Clear all queries'
      }} 
      list={list.queries}/>
      <Tags 
      type='press'
      style={{backgroundColor:'#E2E8C0', padding: '1em 0 1em 0'}}
      actions={actions.press} 
      buttonText={{
        deleteTag:'Delete press',
        clearAll:'Clear all presses'
      }} 
      list={list.press}/>
    </div>
  )
}

const mapStateToProps = state => ({
  list: {
    queries: {
      total: Object.keys(state.query),
      exist: Object.keys(state.query).reduce((acc, ele) => {
        acc[ele] = true;
        return acc;
      }, {}),
      filtered: state.filter.tag,
    },
    press: {
      total: Object.values(state.press.allowed),
      exist: Object.keys(state.press.existing)
      .filter((pressName) => state.press.existing[pressName].count > 0)
      .reduce((result, name) => {
        result[name] = true;
        return result;
      }, {}),
      filtered: state.filter.press,
    }
  }
})

const mapDispatchToProps = dispatch => ({
  actions: {
    queries: {
      toggleTag: (tag) => dispatch(creator.toggleTagFilter(tag)),
      // deleteTag: (tag) => dispatch(creator.deleteQuery(tag)),
      // clearAll: () => dispatch(creator.clearAllQuery())
    },
    press: {
      toggleTag: (tag) => dispatch(creator.togglePressFilter(tag)),
    }
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(TagList)

