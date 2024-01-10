import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    let data = await axios.get("http://localhost:3000/user");
    setUsers(data.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((item) => (
          <li>
            {item.username}'-'{item.status ? "online" : "offline"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
