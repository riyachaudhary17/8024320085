import React, { useEffect, useState } from "react";
import axios from "axios";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/top-users")
      .then(res => setUsers(res.data.topUsers))
      .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Top Users</h1>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="bg-white p-2 rounded shadow">
            {user.name} - {user.count} posts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
