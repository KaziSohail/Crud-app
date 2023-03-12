import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate=useNavigate();


  const handleUpdate=(e)=>{
    e.preventDefault();
    axios.put(`https://640b42c965d3a01f9815d45a.mockapi.io/crud-youtub/${id}`,{
        name: name,
    email: email
    }).then(()=>{
        navigate("/read");
    })
  }

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  return (
    <div>
      <h2>Update Operation</h2>
      <form>
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Update Name
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              id="exampleInputPassword1"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Update Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
             onClick={handleUpdate} >
          Update
        </button>
                <Link to="/read">
                <button className="btn btn-danger mx-4">Back</button>
                </Link>
      </form>
    </div>
  );
};

export default Update;
