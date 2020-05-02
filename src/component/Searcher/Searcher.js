import React, { useState } from 'react'
import {Icon} from '../resources'
import { connect } from 'react-redux'
import * as action from '../../redux/action/creator'
import time from '../../reference/time'
import Queries from './Queries/Queries'

function Searcher({queries, fetchNews, addQuery}) {
  const SearchIcon = Icon.search;
  const searchTimeLimit = time.minute(0.1);
  const [curInput, setInput] = useState('');
  const [lastSearchTime, setLastSearchTime] = useState(0);

  const onSubmit = async (e) => {
    e.preventDefault();
    let curTime = Date.now();
    let timeDiff = curTime - lastSearchTime;
    if (timeDiff < searchTimeLimit) return;
    setLastSearchTime(curTime);
    fetchNews(queries);
  }

  const onEnter = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      addQuery(curInput)
      setInput('');
    }
  }

  return (
    <div>
      <form onKeyPress={onEnter}>
        <div style={{
          display:'flex', 
          paddingTop:'10px', 
          paddingBottom:'10px', 
          justifyContent:'center', 
          backgroundColor:'black'}}>
          <input onChange={(e) => {setInput(e.target.value)}} style={{width:'80vw'}} type="text" value={curInput} placeholder="Type keyword here"></input>
          <button onClick={onSubmit} style={{width:'32px', height:'32px'}} type="submit"><SearchIcon style={{width:'80%', height:'80%', padding:'10%'}}/></button>
        </div>
      </form>
      <Queries/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  queries: Object.keys(state.query)
})

export default connect(mapStateToProps, {...action})(Searcher)
