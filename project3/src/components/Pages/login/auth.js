import React from 'react';
import { databasething } from 'src';

const user = ({ id, username }) => (
    <h1 key={id} >{username}</h1>
);

const Auth = ({ data: { allUsers = [] } }) => (
    <div>
        {allUsers.map(user)}
    </div>
);

const query =
{
    allUsers {
        id
      username
    }
};