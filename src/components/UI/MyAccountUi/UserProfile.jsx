import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserContext'

const UserProfile = () => {
    const {userData,loading}= useContext(UserContext);
    if(loading || !userData) return <p>Loading profile</p>;
  return (
    <div>
      {userData ? (
        <>
        <h1>Name =  {userData.username}</h1>
        </>
      ):(
        <p>Loading</p>
      )}
    </div>
  )
}

export default UserProfile
