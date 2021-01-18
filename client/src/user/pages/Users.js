import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'RJ Singh',
      image:
        '',
      places: 1
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
