import React from 'react'
import Email from './Email'
import { connect } from 'react-redux'


function EmailList({emails}) {

  let renderEmail = () => {
    return emails.length ? 
      emails.map((email) => {
        let {name, link} = email;
        return <Email name={name} email={link}/>
      })
      : <></>
  }

  return (
    <div>
      {renderEmail()}
    </div>
  )
}

const mapStateToProps = (state) => {
  let nameToEmail = state.subscription.emails;
  let emailList = Object.keys(nameToEmail).reduce((acc, name) => {
    let link = nameToEmail[name];
    acc.push({name, link})
    return acc;
  }, [])
  return {
    emails: emailList
  }
}

export default connect(mapStateToProps, null)(EmailList)
