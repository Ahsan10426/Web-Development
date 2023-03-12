
import React from 'react';
import "./user.css"

const UserProfile = ({ user }) => {
  const { firstName, lastName, school, email, profilePicture, classLevel } = user;

  return (
    <div className="user-profile">
      <img src={profilePicture} alt="Profile" />
      <h2>{firstName} {lastName}</h2>
      <p>{school}</p>
      <p>{email}</p>
      <p className={classLevel === 'Freshmen' ? 'green-text' : ''}>{classLevel}</p>
    </div>
  )
}

export default UserProfile;