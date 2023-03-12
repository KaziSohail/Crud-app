import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://640b42c965d3a01f9815d45a.mockapi.io/crud-youtub")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://640b42c965d3a01f9815d45a.mockapi.io/crud-youtub/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage=(id,name,email) => {
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
    <div className="d-flex justify-content-between">
    <h2>Read Operation</h2>
    <Link to="/">
    <button className="btn btn-primary">Create Data</button>
    </Link>
    </div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button className="btn-success" onClick={()=>setToLocalStorage(eachData.id,eachData.name,eachData.email)}>Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Read;
