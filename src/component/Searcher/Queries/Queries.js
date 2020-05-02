import React from 'react'
import QueryButton from './QueryButton'
import { connect } from 'react-redux'
import * as action from '../../../redux/action/creator'

function Queries({dispatch, queries}) {
  let selectiveRender = () => {
    if (queries.length) {
      return (
        <div>
        <button onClick={()=>{dispatch(action.clearAllQuery())}}>Clear All Queries</button>
        </div>
      )
    } else {
      return <></>
    }
  }

  return (
    <>
      <div>
        {queries.map((query) => {
          return <QueryButton query={query}/>
        })}
      </div>
      {selectiveRender()}
    </>
  )
}

const mapStateToProps = (state) => ({
  queries: Object.keys(state.query)
})

export default connect(mapStateToProps, null)(Queries)
