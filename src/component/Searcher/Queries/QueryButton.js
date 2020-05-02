import React from 'react'
import {Icon} from '../../resources'
import * as action from '../../../redux/action/creator'
import { connect } from 'react-redux'
function QueryButton({query, deleteQuery}) {
  const XIcon = Icon.x;
  const onClickX = () => {
    deleteQuery(query);
  }

  return (
    <div style={{
      borderRadius: '10px',
      display:'inline-block', 
      backgroundColor:'pink', 
      padding: '5px 10px 5px 10px',
      margin:'5px'}}>
      {query}
      <button onClick={onClickX} style={{marginLeft:'5px', padding:0, height:'100%'}}>
        <XIcon style={{width:'16px', height:'16px'}}/>
      </button>
    </div>
  )
}

export default connect(null, {...action})(QueryButton)
