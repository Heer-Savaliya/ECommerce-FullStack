import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserContext'

const UserProfile = () => {
    const {userData,loading}= useContext(UserContext);
    if(loading || !userData) return <p>Loading profile</p>;
  return (
    <div>
      {userData ? (
        <>
        <div className='flex items-start gap-3 px-6 '>
        <img src={userData.profile ? userData.profile : "/images/users/default_p.jpg"} alt="" className='w-14 rounded-full' />
        <div>
        <h1 className='capitalize font-semibold text-lg'>{userData.username}</h1>
        <p className='text-sm text-gray-500'>{userData.phone}</p>

        </div>
        </div>
        </>
      ):(
        <p>Loading</p>
      )}
    </div>
  )
}

export default UserProfile
