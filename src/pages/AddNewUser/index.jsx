import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./index.module.css";
import axios from "axios";

const AddNewuser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("New user added successfuly");
    navigate("/"); // redirect to home
    const userData = {
      name: name,
      email: email,
      contact: contact,
    };
    console.log(userData);
    // console.log(name, email, contact);

    axios
      .post("http://localhost:5000/users", userData)
      .then((res) => console.log(res));
  };

  return (
    <div className={style.formContainer}>
      <h1>Add New User</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Enter your Email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Enter your Mobile Number"
          required
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
        <input type="submit" value="Create New User!" />
        <Link to="/" className={style.backBtn}>
          &lt;- Back to Home Page
        </Link>
      </form>
    </div>
  );
};

export default AddNewuser;
