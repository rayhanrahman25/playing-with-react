import React from 'react'
import { useParams } from 'react-router-dom'

function UserName() {
    const userName = useParams();
  return (
    <div>UserName: {userName.userName}</div>
  )
}

export default UserName