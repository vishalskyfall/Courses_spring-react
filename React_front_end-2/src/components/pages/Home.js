import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    //console.log("kaisan baa?");
    loadUsers();
  }, []); //we have to give [] to run only 1 times..   otherwise it will be infinite

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3002/users");
    //console.log(result);
    setUser(result.data.reverse());
  };

const deleteUser = async id =>{
await axios.delete(`http://localhost:3002/users/${id}`);
loadUsers();
}

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border table-hover shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Mail Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <Link to="#" class="btn mr-2 btn-primary " to={`/users/${user.id}`}>View</Link>
                    <Link to="#" class="btn btn-outline-primary mr-2" to={`/users/edituser/${user.id}`}>Edit</Link>
                    <Link to="#" class="btn btn-danger" onClick={()=> deleteUser(user.id)}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
