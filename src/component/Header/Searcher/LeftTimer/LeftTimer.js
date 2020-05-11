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
    <div style={{position:'fixed', display:'flex', bottom:'64px', left:0, width:'100%', height:'50px', backgroundColor:'transparent', justifyContent:'center', alignItems:'center'}}>
      <div style={{position:'relative', boxShadow:'0 0 5px rgba(0,0,0,0.5)', height:'fit-content', width:'fit-content', borderRadius:'20px', backgroundColor:'lightgreen', padding:'10px 20px', fontSize:'1em', userSelect:'none'}}>
        {`Update after ${toMinute(leftTime)}`}
        {/* <Timebar height='5px' left={leftTime}/> */}
      </div>
    </div>
  )
}

export default LeftTimer
