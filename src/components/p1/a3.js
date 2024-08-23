import { useEffect, useState } from "react";
import axios from "axios";

const Fetching = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    
      const response = await axios.get("https://fakestoreapi.com/products/");
      const data = response.data;
      setUsers(data);
      console.log(data);
    
  };
  

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.title}</h2>
          
        </div>
      ))}
    </div>
  );
};

export default Fetching;
