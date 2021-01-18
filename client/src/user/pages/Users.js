import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'RJ Singh',
      image:
        'https://i.imgur.com/6MapaId.png',
      property: 1
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
