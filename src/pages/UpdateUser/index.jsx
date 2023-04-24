import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import style from "./index.module.css";
import axios from "axios";

const Updateuser = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [getData, setGetData] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${userId}`).then((res) => {
      console.log(res.data[0]);
      setGetData(res.data[0]);
      console.log(userId);
      setName(res.data[0].name);
      console.log(res.data[0].name);
      setEmail(res.data[0].email);
      console.log(res.data[0].email);
      setContact(res.data[0].contact);
      console.log(res.data[0].contact);
    });
  }, [userId]);

  // const { userId } = useParams();
  const handleUpdate = (e) => {
    e.preventDefault();
    // alert("User Updated sucessfully!");
    navigate("/"); // redirect to home
    const userData = {
      name: name,
      email: email,
      contact: contact,
    };
    console.log(userData);

    axios
      .put(`http://localhost:5000/users/${userId}`, userData)
      .then((res) => alert("User Updated sucessfully!"));
    // window.location.reload();
  };

  return (
    <div className={style.formContainer}>
      <h1>Update User Details</h1>

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Enter your name"
          required
          onChange={(e) => setName(e.target.value)}
          defaultValue={getData.name}
        />
        <input
          type="email"
          placeholder="Enter your Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          defaultValue={getData.email}
        />
        <input
          type="number"
          placeholder="Enter your Mobile Number"
          required
          onChange={(e) => setContact(e.target.value)}
          defaultValue={getData.contact}
        />
        <input type="submit" value="Update User!" />
        <Link to="/" className={style.backBtn}>
          &lt;- Back to Home Page
        </Link>
      </form>
    </div>
  );
};

export default Updateuser;
