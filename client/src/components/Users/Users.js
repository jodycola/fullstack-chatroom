import React from 'react';
import { HiOutlineStatusOnline } from 'react-icons/hi'
import './Users.css';

const Users = ({ users }) => (
    <div className="usersContainer">
    {
      users
        ? (
          <div>
            <h1>Online:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <HiOutlineStatusOnline className="online-icon" />
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        :
        <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                No users online
              </h2>
            </div>
          </div>
    }
  </div>
)

export default Users;