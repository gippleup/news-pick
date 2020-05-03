import React, {useState} from 'react'

function LeftTimer({leftTime}) {
  return (
    <div>
      {`Update after ${leftTime / 1000}`}
    </div>
  )
}

export default LeftTimer
