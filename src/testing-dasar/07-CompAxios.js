import axios from 'axios';
import React, { useState } from 'react';

export default function CompAxios() {
  const [users, setUsers] = useState([]);

  const getData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <p>Get API Call</p>
      <button onClick={getData}>Get Data</button>
      {users.map((user, index) => {
        return <p key={index}>{user.name}</p>;
      })}
    </div>
  );
}
