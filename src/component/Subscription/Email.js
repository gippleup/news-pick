import React from 'react'

function Email({name, email}) {
  return (
    <div>
      {`${name}: ${email}`}
    </div>
  )
}

export default Email
