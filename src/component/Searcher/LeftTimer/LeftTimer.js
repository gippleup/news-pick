import React, {useState} from 'react'
import Timebar from './Timebar';

function LeftTimer({leftTime}) {
  let toMinute = (ms) => {
    let sec = ms / 1000;
    let minute = Math.floor(sec / 60);
    let rest = sec % 60;
    if (minute < 10) {minute = `0${minute}`}
    if (rest < 10) {rest = `0${rest}`}
    return `${minute}:${rest}`
  }
  return (
    <div style={{padding:'10px 0 10px 0', fontSize:'1em'}}>
      {`Update after ${toMinute(leftTime)}`}
      {/* <Timebar height='5px' left={leftTime}/> */}
    </div>
  )
}

export default LeftTimer
