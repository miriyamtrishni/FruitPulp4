import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001").then((result) => setUsers(result.data)).catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/deleteUser/" + id).then((res) => {
      console.log(res);
      window.location.reload();
    }).catch((err) => console.log(err));
  };

  

  return (
    <div>
     <nav style={{ backgroundColor: "black", padding: "10px 0", width: "100%", fontSize: "16px" }}>
  <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex", justifyContent: "center" }}>
    <li style={{ marginRight: "40px" }}>
      <Link
        to="/HomePage"
        style={{
          color: "orange",
          textDecoration: "none",
          fontWeight: "bold",
          paddingRight: "10px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "white")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "orange")} // Change text color on hover out
      >
        Home
      </Link>
    </li>
    <li style={{ marginRight: "40px" }}>
      <Link
        to="/attendance"
        style={{
          color: "orange",
          textDecoration: "none",
          fontWeight: "bold",
          paddingRight: "10px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "white")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "orange")} // Change text color on hover out
      >
        Employee Details
      </Link>
    </li>
    <li style={{ marginRight: "40px" }}>
      <Link
        to="/report"
        style={{
          color: "orange",
          textDecoration: "none",
          fontWeight: "bold",
          paddingRight: "10px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "white")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "orange")} // Change text color on hover out
      >
        Employee Attendance
      </Link>
    </li>
    <li>
      <Link
        to="/employee-details"
        style={{
          color: "orange",
          textDecoration: "none",
          fontWeight: "bold",
          paddingRight: "10px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "white")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "orange")} // Change text color on hover out
      >
        Generate Report
      </Link>
    </li>
  </ul>
</nav>





      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <div style={{ backgroundColor: "lightgreen", border: "1px solid black", borderRadius: "5px", padding: "20px" }}>
          <Link to="/create" style={{ backgroundColor: "orange", color: "black", border: "1px solid black", padding: "1px", borderRadius: "5px", textDecoration: "none" }}>Add Employee+</Link>
         

          <table style={{ width: "100%", textAlign: "center", border: "1px solid" }}>
            <thead>
              <tr style={{ border: "1px solid" }}>
                <th style={{ padding: "10px", border: "1px solid" }}> Name </th>
                <th style={{ padding: "10px", border: "1px solid" }}> EID </th>
                <th style={{ padding: "10px", border: "1px solid" }}> NIC </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Gender </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Age </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Address </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Email </th>
                <th style={{ padding: "10px", border: "1px solid" }}> JobTitle </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Salary </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Action </th>
              </tr>
            </thead>
            <tbody>
              {(searchResults.length > 0 ? searchResults : users).map((user) => {
                return (
                  <tr style={{ border: "1px solid" }} key={user._id}>
                    <td style={{ border: "1px solid" }}>{user.name}</td>
                    <td style={{ border: "1px solid" }}>{user.eid}</td>
                    <td style={{ border: "1px solid" }}>{user.nic}</td>
                    <td style={{ border: "1px solid" }}>{user.gender}</td>
                    <td style={{ border: "1px solid" }}>{user.age}</td>
                    <td style={{ border: "1px solid" }}>{user.address}</td>
                    <td style={{ border: "1px solid" }}>{user.email}</td>
                    <td style={{ border: "1px solid" }}>{user.jobtitle}</td>
                    <td style={{ border: "1px solid" }}>{user.salary}</td>
                    <td>
                      <Link to={`/update/${user._id}`} style={{ backgroundColor: "yellow", color: "black", border: "1px solid black", padding: "1px", borderRadius: "5px", textDecoration: "none" }}>Update</Link>
                      <button style={{ marginLeft: "10px", backgroundColor: "red", color: "white", border: "1px solid black", padding: "1px", borderRadius: "5px", textDecoration: "none" }} onClick={() => handleDelete(user._id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
