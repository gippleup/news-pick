import React, {useState} from 'react'
import EmailList from './EmailList'
import { connect } from 'react-redux'
import * as actions from '../../redux/action/creator'

function Subscription({addSubscription}) {
  const nameInput = React.createRef();

  const [curInput, setCurInput] = useState({name:'', email:''})
  
  const onSubmit = () => {
    addSubscription({[curInput.name]:curInput.email})
    setCurInput({name:'', email:''})
    nameInput.current.focus();
    nameInput.current.select();
  }

  const onInput = (type) => (e) => {
    let targetValue = type === 'name' ? 'name' : 'email';
    setCurInput({...curInput, [targetValue]: e.target.value})
  }

  const onEnter = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      onSubmit()
    }
  }

  return (
    <>
    <form style={{display:'flex', justifyContent:'center'}} onKeyPress={onEnter}>
      <div style={{display:'flex', paddingTop:'10px', paddingBottom:'10px', justifyContent:'space-between'}}>
        <div style={{display:'flex', width:'70vw', marginRight:'3vw', justifyContent:'center'}}>
          <input ref={nameInput} onChange={onInput('name')} placeholder='Name' value={curInput.name} style={{width:'20%', marginRight:'2vw'}} type="text"/>
          <input onChange={onInput('email')} placeholder='Email' value={curInput.email} style={{width:'80%'}} type="text"/>
        </div>
        <button onClick={onSubmit} style={{width:'10vw', height:'30px'}}>ADD</button>
      </div>
    </form>
    <div>
      <EmailList/>
    </div>
    </>
  )
}

export default connect(null, {...actions})(Subscription)
