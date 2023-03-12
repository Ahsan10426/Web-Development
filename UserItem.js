import React from 'react';
import UserProfile from './UserProfile';

const UserItem = ({ user }) => {
  return (
    <div className="user-item">
      <UserProfile user={user} />
    </div>
  );
};

export default UserItem;
