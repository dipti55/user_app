import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  // const tableData = [
  //   {
  //     name: "Prasad Surase",
  //     email: "prasadsurase55@gmail.com",
  //     contact: "9874523654",
  //   },
  //   {
  //     name: "Dipti Patil",
  //     email: "diptipatil@gmail.com",
  //     contact: "9845125864",
  //   },
  //   {
  //     name: "Pooja Pawar",
  //     email: "poojapawar.com",
  //     contact: "9452178965",
  //   },
  //   {
  //     name: "Megha Mane",
  //     email: "meghamane45@gmail.com",
  //     contact: "9985647125",
  //   },
  //   {
  //     name: "Aishwarya More",
  //     email: "aishwaryamore22.com",
  //     contact: "9563214785",
  //   },
  // ];

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((data) => setUsers(data.data));
  }, []);

  const deleteUser = (userId) => {
    //call delete api
    axios
      .delete(`http://localhost:5000/users/${userId}`)
      .then(() => alert("user deleted sucessfully"));
    window.location.reload();
  };

  // useEffect(() => {
  //   fetch("http://localhost:5000/users")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  // fetch("http://localhost:5000/users")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  return (
    <div className={style.Dashboard}>
      <div className={style.CTARow}>
        <input type="search" placeholder="Search Anything.." />
        <Link to="/addNewuser" className={style.newUser}>
          Add New User
        </Link>
      </div>

      {/* <h1>Hello</h1> */}

      <table
        border={1}
        style={{ borderCollapse: "collapse" }}
        className={style.table}
      >
        <thead>
          <tr>
            <th>Serial no.</th>
            <th>Full name</th>
            <th>Email Address</th>
            <th>Contact number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* {tableData.map((user, index) => {
            console.log(user)
          })} */}
          {/* {tableData.map((user, index) => { */}
          {users.map((user, index) => {
            return (
              <tr key={index}>
                {/* <td>{index + 1}</td> */}
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                {/* <td><button id={style.editBtn}>Edit</button></td> */}
                <td>
                  <Link to={`/updateuser/${user._id}`} id={style.editBtn}>
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    id={style.deleteBtn}
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
