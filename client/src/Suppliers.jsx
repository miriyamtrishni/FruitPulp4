import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);
  

  useEffect(() => {
    axios.get("http://localhost:3001/supplier").then((result) => setSuppliers(result.data)).catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/deleteUsersh/" + id).then((res) => {
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
        to="/supplier-details"
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
        Supplier Details
      </Link>
    </li>
    <li style={{ marginRight: "40px" }}>
      <Link
        to="/reportsh"
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
        Supplier Orders
      </Link>
    </li>
    <li>
      <Link
        to="/material-details"
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
          <Link to="/createsh" style={{ backgroundColor: "orange", color: "black", border: "1px solid black", padding: "1px", borderRadius: "5px", textDecoration: "none" }}>Add Suppliers+</Link>
         

          <table style={{ width: "100%", textAlign: "center", border: "1px solid" }}>
            <thead>
              <tr style={{ border: "1px solid" }}>
                <th style={{ padding: "10px", border: "1px solid" }}> Name </th>
                <th style={{ padding: "10px", border: "1px solid" }}> SID </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Materialname </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Quantitiy </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Price Rs </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Date </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Action </th>
              </tr>
            </thead>
            <tbody>
              { suppliers.map((supplier)  => {
                return (
                  <tr style={{ border: "1px solid" }} key={supplier._id}>
                    <td style={{ border: "1px solid" }}>{supplier.names}</td>
                    <td style={{ border: "1px solid" }}>{supplier.sid}</td>
                    <td style={{ border: "1px solid" }}>{supplier.materialname}</td>
                    <td style={{ border: "1px solid" }}>{supplier.quantitiy}</td>
                    <td style={{ border: "1px solid" }}>{supplier.price}</td>
                    <td style={{ border: "1px solid" }}>{supplier.date}</td>
                    
                    <td>
                      <Link to={`/updatesh/${supplier._id}`} style={{ backgroundColor: "yellow", color: "black", border: "1px solid black", padding: "1px", borderRadius: "5px", textDecoration: "none" }}>Update</Link>
                      <button style={{ marginLeft: "10px", backgroundColor: "red", color: "white", border: "1px solid black", padding: "1px", borderRadius: "5px", textDecoration: "none" }} onClick={() => handleDelete(supplier._id)}>Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Suppliers;
