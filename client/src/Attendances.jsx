import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Attendances() {
  const [attendances, setAttendances] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");//search
  const [searchResults, setSearchResults] = useState([]);//search

  useEffect(() => {
    axios.get("http://localhost:3001/attendance").then((result) => setAttendances(result.data)).catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/deleteUserat/" + id).then((res) => {
      console.log(res);
      window.location.reload();
    }).catch((err) => console.log(err));
  };

   // Function to filter users based on search term
   const handleSearch = () => {
    const results = attendances.filter((attendance) => attendance.eidd === searchTerm);
    setSearchResults(results);
  };

  // Function to clear search results
  const clearSearch = () => {
    setSearchResults([]);
    setSearchTerm("");
  };


  return (
    <div style={{ 
      backgroundImage: 'url("/image/background.jpg")', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      display: 'flex', 
      flexDirection: 'column', // Ensures children are aligned vertically
      justifyContent: 'flex-start', // Aligns children at the start of the container
      alignItems: 'center', 
      minHeight: '100vh',
      padding: 0, // Remove padding
      margin: 0, // Remove margin
    }}>
     <nav style={{ backgroundColor: "black", padding: "10px 0", width: "100%", fontSize: "20px" }}>
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
        to="/"
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
        Employee Attendance
      </Link>
    </li>
    <li style={{ marginRight: "40px" }}>
            <Link
              to="/EmployeeDetailsReport" 
              style={{
                color: "orange",
                textDecoration: "none",
                fontWeight: "bold",
                paddingRight: "10px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "white")}
              onMouseOut={(e) => (e.currentTarget.style.color = "orange")}
            >
              Genarate Report
            </Link>
          </li>
    <li style={{ marginRight: "40px" }}>
      <Link 
        to="/deleted-employees"
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
        Resign employees
      </Link>
    </li>
  </ul>
</nav>





      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <div style={{ backgroundColor: "lightgreen", border: "1px solid black", borderRadius: "5px", padding: "20px" }}>
          <Link to="/createat" style={{ backgroundColor: "orange", color: "black", border: "1px solid black", padding: "1px", borderRadius: "5px", textDecoration: "none" }}>Add Attendance+</Link>
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by Eid" />
          <button onClick={handleSearch}>Search</button>
          {searchResults.length > 0 ? (
            <button onClick={clearSearch}>Clear Search</button>
          ) : null}

          <table style={{ width: "100%", textAlign: "center", border: "1px solid" }}>
            <thead>
              <tr style={{ border: "1px solid" }}>
                <th style={{ padding: "10px", border: "1px solid" }}> EID </th>
                <th style={{ padding: "10px", border: "1px solid" }}> weekone </th>
                <th style={{ padding: "10px", border: "1px solid" }}> weektwo </th>
                <th style={{ padding: "10px", border: "1px solid" }}> weekthree </th>
                <th style={{ padding: "10px", border: "1px solid" }}> weekfour </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Month </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Date </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Action </th>
              </tr>
            </thead>
            <tbody>
            {(searchResults.length > 0 ? searchResults : attendances).map((attendance) => {
                return (
                  <tr style={{ border: "1px solid" }} key={attendance._id}>
                    <td style={{ border: "1px solid" }}>{attendance.eidd}</td>
                    <td style={{ border: "1px solid" }}>{attendance.weekone}</td>
                    <td style={{ border: "1px solid" }}>{attendance.weektwo}</td>
                    <td style={{ border: "1px solid" }}>{attendance.weekthree}</td>
                    <td style={{ border: "1px solid" }}>{attendance.weekfour}</td>
                    <td style={{ border: "1px solid" }}>{attendance.month}</td>
                    <td style={{ border: "1px solid" }}>{attendance.date}</td>
                    
                    <td>
                      <Link to={`/updateat/${attendance._id}`} style={{ backgroundColor: "yellow", color: "black", border: "1px solid black", padding: "1px", borderRadius: "5px", textDecoration: "none" }}>Update</Link>
                      <button style={{ marginLeft: "10px", backgroundColor: "red", color: "white", border: "1px solid black", padding: "1px", borderRadius: "5px", textDecoration: "none" }} onClick={() => handleDelete(attendance._id)}>Delete</button>
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

export default Attendances;
