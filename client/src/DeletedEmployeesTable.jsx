import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';







function DeletedEmployeesTable() {
    const [deletedEmployees, setDeletedEmployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");//search
  const [searchResults, setSearchResults] = useState([]);//search

    useEffect(() => {
        // Fetch deleted employees data from the server
        axios.get('http://localhost:3001/getDeletedEmployees')
            .then(response => {
                setDeletedEmployees(response.data);
            })
            .catch(error => {
                console.error('Error fetching deleted employees:', error);
            });
    }, []);


// Function to filter users based on search term
const handleSearch = () => {
  const results = deletedEmployees.filter((employee) => employee.eid === searchTerm);
  setSearchResults(results);
};

// Function to clear search results
const clearSearch = () => {
  setSearchResults([]);
  setSearchTerm("");
};




    return (

        <div >
                    <nav style={{ backgroundColor: "white", padding: "10px 0", width: "100%", fontSize: "15px",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",fontFamily: 'Poppins, sans-serif', fontWeight: '900',  }}>
  <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex", justifyContent: "center" }}>
    <li style={{ marginRight: "25px" }}>
    <div style={{ 
      position: 'absolute', 
      top: '20px', 
      left: '20px',
      fontSize: '15px', 
      fontWeight: '1000', 
      fontFamily: 'Poppins, sans-serif', 
      
      color: '#F4BB29',
      marginLeft:'20px'
    }}>
      FRUIT PULP
    </div>
    <Link
        to="/HomePage"
        style={{
          color: "black",
          textDecoration: "none",
          fontWeight: "bold",
          paddingLeft: "500px",
          paddingRight: "60px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
      >
        HOME
      </Link>
    </li>
          <li style={{ marginRight: "10px" }}>
            <Link
              to="/" 
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                paddingRight: "10px",
                transition: "all 0.3s ease", // Hover transition
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
              onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
            >
             EMPLOYEE DETAILS
            </Link>
          </li>
          <li style={{ marginRight: "10px" }}>
            <Link
              to="/attendance" 
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                paddingRight: "10px",
                transition: "all 0.3s ease", // Hover transition
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
              onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
            >
             EMPLOYEE ATTENDANCE
            </Link>
          </li>

          <li style={{ marginRight: "10px" }}>
            <Link
              to="/EmployeeDetailsReport" 
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                paddingRight: "10px",
                transition: "all 0.3s ease", // Hover transition
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
              onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
            >
              GENARATE REPORT
            </Link>
          </li>

          <li style={{ marginRight: "10px" }}>
            <Link
              to="/deleted-employees" // Path to navigate to the deleted employees table
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                paddingRight: "10px",
                transition: "all 0.3s ease", // Hover transition
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
              onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
            >
              RESIGN EMPLOYEES
            </Link>
          </li>
        </ul>
      </nav>


        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" ,backgroundColor:"#FEF29B"}}>
            <div style={{ backgroundColor: "#B2BEB5", border: "1px solid black", borderRadius: "5px", padding: "20px" }}>
           
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by Eid" style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc", marginLeft: "5px", width: "200px" }}/>
          <button onClick={handleSearch}style={{ backgroundColor: "blue", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", marginLeft: "10px", cursor: "pointer" }}>Search</button>
          {searchResults.length > 0 ? (
            <button onClick={clearSearch}style={{ backgroundColor: "red", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", marginLeft: "10px", cursor: "pointer" }}>Clear Search</button>
          ) : null}

              
              
                <h1>Resign Employees</h1>
                
               
                <table style={{ width: "100%", textAlign: "center", border: "1px solid" }}>
                    <thead>
                        <tr>
                        <th style={{ padding: "10px", border: "1px solid" }}> Name </th>
                <th style={{ padding: "10px", border: "1px solid" }}> EID </th>
                
               
                <th style={{ padding: "10px", border: "1px solid" }}> Age </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Address </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Email </th>
                <th style={{ padding: "10px", border: "1px solid" }}> JobTitle </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Salary </th>
               
                        </tr>
                    </thead>
                    <tbody>
                    {(searchResults.length > 0 ? searchResults : deletedEmployees).map((employee) => {
                return (
                            <tr style={{ border: "1px solid" }} key={employee._id}>
                                <td style={{ border: "1px solid" }}>{employee.name}</td>
                                <td style={{ border: "1px solid" }}>{employee.eid}</td>
                              
                                <td style={{ border: "1px solid" }}>{employee.age}</td>
                               
                                <td style={{ border: "1px solid" }}>{employee.address}</td>
                                <td style={{ border: "1px solid" }}>{employee.email}</td>
                                <td style={{ border: "1px solid" }}>{employee.jobtitle}</td>
                                <td style={{ border: "1px solid" }}>{employee.salary}</td>
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

export default DeletedEmployeesTable;
