import React from 'react'
import {Icon} from '../resources'

function Email({name, email}) {
  let XIcon = Icon.x;
  let PencilIcon = Icon.pencil;
  return (
    <div style={{display:'flex', marginLeft:'10%', marginRight:'10%', textAlign:'left', justifyContent:'space-between'}}>
      <div>
        {`${name}: ${email}`}
      </div>
      <div>
        <button style={{width:'10vw', height:'2em', margin:0, padding:0}}><PencilIcon style={{width:'1em', height:'1em'}}/></button>
        <button style={{width:'10vw', height:'2em', margin:0, padding:0}}><XIcon style={{width:'1em', height:'1em'}}/></button>
      </div>
    </div>
  )
}

export default Email
