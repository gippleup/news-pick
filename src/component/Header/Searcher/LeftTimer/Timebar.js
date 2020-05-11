import React from 'react'
import { connect } from 'react-redux'

function Timebar({total, left, height}) {
  return (
    <div style={{margin:'auto', height, backgroundColor:'black', width:'80%', borderRadius:'10px'}}>
      <div style={{backgroundColor:'red', height, width:`${100 * left / total}%`, borderRadius:'10px'}}></div>
    </div>
  )
}

const mapStateToProps = state => ({
  total: state.conf.update.interval
})

export default connect(mapStateToProps, null)(Timebar)
