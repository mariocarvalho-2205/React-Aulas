import React from 'react'

const Filho = ({children}) => {
  return (
    <div>
        <h2>Sendo impresso pelo filho</h2>
        {children}
    </div>
  )
}

export default Filho