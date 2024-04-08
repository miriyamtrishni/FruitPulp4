import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DeletedEmployeesTable() {
    const [deletedEmployees, setDeletedEmployees] = useState([]);

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

    return (

        <div>
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
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "white")}
              onMouseOut={(e) => (e.currentTarget.style.color = "orange")}
            >
              Home
            </Link>
          </li>
          <li style={{ marginRight: "40px" }}>
            <Link
              to="/" // Path to navigate to the deleted employees table
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
             Employees Details
            </Link>
          </li>
          <li style={{ marginRight: "40px" }}>
            <Link
              to="/attendance" // Path to navigate to the deleted employees table
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
             Employee Attendance
            </Link>
          </li>

          <li style={{ marginRight: "40px" }}>
            <Link
              to="/EmployeeDetailsReport" // Path to navigate to the deleted employees table
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
              to="/deleted-employees" // Path to navigate to the deleted employees table
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
              Resign Employees
            </Link>
          </li>
        </ul>
      </nav>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            <div style={{ backgroundColor: "lightgreen", border: "1px solid black", borderRadius: "5px", padding: "20px" }}>
                <h1>Deleted Employees</h1>
                
               
                <table style={{ width: "100%", textAlign: "center", border: "1px solid" }}>
                    <thead>
                        <tr>
                        <th style={{ padding: "10px", border: "1px solid" }}> Name </th>
                <th style={{ padding: "10px", border: "1px solid" }}> EID </th>
                <th style={{ padding: "10px", border: "1px solid" }}> NIC </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Gender </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Age </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Address </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Email </th>
                <th style={{ padding: "10px", border: "1px solid" }}> JobTitle </th>
                <th style={{ padding: "10px", border: "1px solid" }}> Salary </th>
               
                        </tr>
                    </thead>
                    <tbody>
                        {deletedEmployees.map(employee => (
                            <tr style={{ border: "1px solid" }} key={employee._id}>
                                <td style={{ border: "1px solid" }}>{employee.name}</td>
                                <td style={{ border: "1px solid" }}>{employee.eid}</td>
                                <td style={{ border: "1px solid" }}>{employee.nic}</td>
                                <td style={{ border: "1px solid" }}>{employee.age}</td>
                                <td style={{ border: "1px solid" }}>{employee.gender}</td>
                                <td style={{ border: "1px solid" }}>{employee.address}</td>
                                <td style={{ border: "1px solid" }}>{employee.email}</td>
                                <td style={{ border: "1px solid" }}>{employee.jobtitle}</td>
                                <td style={{ border: "1px solid" }}>{employee.salary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}

export default DeletedEmployeesTable;
