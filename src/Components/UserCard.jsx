import React from 'react'

function UserCard({props}) {
    console.log(props)
  return (
    <div className=' absolute w-full h-full flex flex-col items-center justify-center  bg-white/30 rounded-lg shadow-md p-4'>
        <img src={props.avatar} alt="avatar"/>
        <h2>{props.name}</h2>
        <h3>{props.email}</h3>   
    </div>
  )
}

export default UserCard