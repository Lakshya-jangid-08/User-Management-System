import React from 'react'

function Protector({children}) {
    if(!localStorage.getItem('token') && window.location.pathname !== '/authentication'){
        window.location.href = '/authentication'
    }
  return (
    <div>
        {children}
    </div>
  )
}

export default Protector