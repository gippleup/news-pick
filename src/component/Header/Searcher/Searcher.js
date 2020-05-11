import React, { useState, useEffect } from 'react'
import {Icon} from '../../resources'
import { connect } from 'react-redux'
import * as action from '../../../redux/action/creator'
import time from '../../../reference/time'
import LeftTimer from './LeftTimer/LeftTimer'
import anime from 'animejs'
const Timer = require('../../../helper/Timer').default;


function Searcher({queries, interval, fetchNews, addQuery, press}) {
  let searchButton = React.createRef();
  const SearchIcon = Icon.search;
  const searchTimeLimit = 1000;
  const [curInput, setInput] = useState('');
  const [lastSearchTime, setLastSearchTime] = useState(0);
  const [leftTime, setLeftTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const initTimer = () => {
    if (timer) {timer.terminate()}
    let newTimer = new Timer(interval, 1000);
    setTimer(newTimer);
    newTimer.countDown({
      every: ()=>{setLeftTime(newTimer.curTime)},
      complete: ()=>{fetchNews(queries)}
    }, true);
  }

  let searchAnime = () => {
    let target = searchButton.current;
    anime.remove(target);
    anime({
      targets: target,
      backgroundColor: '#70ffae',
      duration: 50,
      easing:'linear',
      complete: ()=>{
        anime.remove(target);
        anime({
          targets: target,
          backgroundColor: '#ffffff',
          duration: 50,
          easing:'linear',
        })
      },
    })
  }

  const search = () => {
    searchAnime();
    let curTime = Date.now();
    let timeDiff = curTime - lastSearchTime;
    if (timeDiff < searchTimeLimit) return;
    setLastSearchTime(curTime);
    fetchNews(queries);
    initTimer();
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    search();
  }

  const onEnter = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      if (curInput.match(/\S/)) {
        addQuery(curInput)
        setInput('');
      } else {
        search();
      }
    }
  }

  return (
    <div>
      <form style={{height:'100%'}} onKeyPress={onEnter}>
        <div style={{
          display:'grid',
          gridTemplateColumns:'auto 60px',
          height: '100%',
          justifyContent:'center'}}>
            <input onChange={(e) => {setInput(e.target.value)}} style={{paddingLeft:'15px',borderRadius:'20px', outline:0, width:'100%', border:0}} type="text" value={curInput} placeholder="Type keyword here"></input>
            <div style={{textAlign:'right'}}>
              <button ref={searchButton} onClick={onSubmit} style={{cursor:'pointer', border:0, leftMargin:'10px', borderRadius:'50%', outline:0, width:'32px', height:'32px'}} type="submit"><SearchIcon style={{width:'80%', height:'24px', padding:'10%'}}/></button>
            </div>
        </div>
      </form>
      {leftTime > 0 ? <LeftTimer leftTime={leftTime}/> : <></>}
    </div>
  )
}

const mapStateToProps = (state) => ({
  queries: Object.keys(state.query),
  interval: state.conf.update.interval,
})

export default connect(mapStateToProps, {...action})(Searcher)
