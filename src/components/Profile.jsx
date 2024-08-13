import React, { useContext } from 'react'
import UserContext from '../context/UserContext.js'

export default function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <h1>Not logged in </h1>
  return (
    <>
        <div>User Profile</div>
        <p>User Name : {user.userName}</p>
    </>
  )
}
