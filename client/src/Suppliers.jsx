import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import SupplierReport from "./SupplierReport"

function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");//search
  const [searchResults, setSearchResults] = useState([]);//search
  



  useEffect(() => {
    axios.get("http://localhost:3001/supplier").then((result) => setSuppliers(result.data)).catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/deleteUsersh/" + id).then((res) => {
      console.log(res);
      window.location.reload();
    }).catch((err) => console.log(err));
  };


  // Function to filter users based on search term
  const handleSearch = () => {
    const results = suppliers.filter((supplier) => supplier.sid === searchTerm);
    setSearchResults(results);
  };

  // Function to clear search results
  const clearSearch = () => {
    setSearchResults([]);
    setSearchTerm("");
  };




  

  return (
    <div>
      
     <nav style={{ backgroundColor: "black", padding: "10px 0", width: "100%", fontSize: "16px" }}>
  <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex", justifyContent: "center" }}>
    <li style={{ marginRight: "40px" }}>
      <Link
        to="/HomePage"
        style={{
          color: "#F4BB29",
          textDecoration: "none",
          fontWeight: "bold",
          paddingRight: "10px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "white")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover out
      >
        Home
      </Link>
    </li>
    <li style={{ marginRight: "40px" }}>
      <Link
        to="/supplier-details"
        style={{
          color: "#F4BB29",
          textDecoration: "none",
          fontWeight: "bold",
          paddingRight: "10px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "white")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover out
      >
        Supplier Details
      </Link>
    </li>
    <li style={{ marginRight: "40px" }}>
      <Link
        to="/reportsh"
        style={{
          color: "#F4BB29",
          textDecoration: "none",
          fontWeight: "bold",
          paddingRight: "10px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "white")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover out
      >
        Supplier Orders
      </Link>
    </li>
    <li>
      <Link
        to="/material-details"
        style={{
          color: "#F4BB29",
          textDecoration: "none",
          fontWeight: "bold",
          paddingRight: "10px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "white")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover out
      >
        Generate Report
      </Link>
    </li>
  </ul>
</nav>





      <div style={{ display:"flex", justifyContent: "center", alignItems: "center", minHeight:"100vh",fontFamily: 'Poppins, sans-serif' }}>
        <div style={{ border: "none", borderRadius: "5px", height:"80vh",width: '80vw' }}>
        
          <Link to="/createsh" style={{ backgroundColor: "black", color: "white", border: "none", padding: "15px", borderRadius: "5px", textDecoration: "none",marginBottom: "10px", display: "inline-block",marginLeft:"10px",marginTop:"20px" }}>ADD +</Link>
         
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by Sid" style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc", marginLeft: "5px", width: "200px" }}/>
          <button onClick={handleSearch}style={{ backgroundColor: "blue", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", marginLeft: "10px", cursor: "pointer" }}>Search</button>
          {searchResults.length > 0 ? (
            <button onClick={clearSearch}style={{ backgroundColor: "red", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", marginLeft: "10px", cursor: "pointer" }}>Clear Search</button>
          ) : null}
          <table  id="supplierTable" style={{ width: "100%", textAlign: "center", borderCollapse: "collapse", marginRight:"80px"}}>
            <thead>
              <tr style={{ border: "none",background: "#B2BEB5" }}>
                <th style={{ padding: "10px", border: "none",width: "10%"   }}> Name </th>
                <th style={{ padding: "10px", border: "none",width: "10%"  }}> SID </th>
                <th style={{ padding: "10px", border: "none",width: "10%"  }}> Materialname </th>
                <th style={{ padding: "10px", border: "none",width: "10%"  }}> Quantitiy </th>
                <th style={{ padding: "10px", border: "none",width: "10%"   }}> Price Rs </th>
                <th style={{ padding: "10px", border: "none",width: "20%" }}> Date </th>
                <th style={{ padding: "10px", border: "none" ,width: "20%"}}> Action </th>
              </tr>
            </thead>
            <tbody>
              { (searchResults.length > 0 ? searchResults :suppliers).map((supplier)  => {
                return (
                  <tr style={{ border: "none" ,height: "50px",fontWeight: "bold"}} key={supplier._id}>
                    <td style={{ border: "none" }}>{supplier.names}</td>
                    <td style={{ border: "none" }}>{supplier.sid}</td>
                    <td style={{ border: "none" }}>{supplier.materialname}</td>
                    <td style={{ border: "none"  }}>{supplier.quantitiy}</td>
                    <td style={{ border: "none"  }}>{supplier.price}</td>
                    <td style={{ border: "none" }}>{supplier.date}</td>
                    
                    <td >
                      
                      <Link to={`/updatesh/${supplier._id}`} style={{ backgroundColor: "yellow", color: "black", border: "none", padding: "10px 10px", borderRadius: "5px", textDecoration: "none",fontWeight: "bold", }}>Update</Link>
                      <button style={{ marginLeft: "5px", backgroundColor: "red", color: "white", border: "none", padding: "11px 15px", borderRadius: "5px", textDecoration: "none" ,fontWeight: "bold",}} onClick={() => handleDelete(supplier._id)}>Delete</button>
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
