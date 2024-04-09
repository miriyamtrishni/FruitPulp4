import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

import EmployeeReport from "./EmployeeReport";
import DeletedEmployeesTable from "./DeletedEmployeesTable"; // Import the DeletedEmployeesTable component


function CreateUserat() {
  const [eidd , setEidd] =useState()
 
  const [weekone, setWeekone] =useState()
  const [weektwo, setWeektwo] =useState()
  const [weekthree , setWeekthree] =useState()
  const[weekfour,setWeekfour] =useState()
  const [month , setMonth] =useState()
  const [date , setDate] =useState()
 const navigate= useNavigate()

 
//change this github
const Submit = async (e) => {
  e.preventDefault();
  try {
      // Check if Eid already exists
      const response = await axios.post("http://localhost:3001/checkEidd", { eidd });
      if (response.status === 200 && response.data.exists) {
          alert('Eid already exists');
      } else {
          // Proceed with user creation
          const newUser = { eidd, weekone, weektwo, weekthree, weekfour, month, date };
          const result = await axios.post("http://localhost:3001/createUserat", newUser);
          console.log(result);
          navigate('/attendance');
      }
  } catch (error) {
      console.error(error);
      // Handle error
      alert('Error occurred. Please try again.');
  }
};




 
  





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
              to="/" 
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
              to="/attendance" 
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
          
                <form onSubmit={Submit}>
                    <h2>Add Attendance</h2>
                   
                    

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="eid" style={{ width: "80px", marginRight: "10px" }}>Eid</label>
                        <input type="text" placeholder="Enter Employee id" className="form-control" style={{ width: "100%" }} 
                        maxLength="3" pattern="[A-Za-z0-9]*" // Allow only letters (both uppercase and lowercase) and numbers
                        title="Please enter only letters and numbers for Eid"
                        onChange={(e) => setEidd(e.target.value)} required />
                    </div>

                    
                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="email" style={{ width: "80px", marginRight: "10px" }}>Week two</label>
                        <input type="number" placeholder="Enter week two" className="form-control" style={{ width: "100%" }} 
                         maxLength="5"
                        onChange={(e) => setWeekone(e.target.value)} required />
                    </div>

                  

  


                    
                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="email" style={{ width: "80px", marginRight: "10px" }}>Week two</label>
                        <input type="number" placeholder="Enter week two" className="form-control" style={{ width: "100%" }} 
                         maxLength="5"
                        onChange={(e) => setWeektwo(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="jobTitle" style={{ width: "80px", marginRight: "10px" }}>Week  three</label>
                        <input type="number" placeholder="Enter Week three " className="form-control" style={{ width: "100%" }} 
                         maxLength="5"
                        onChange={(e) => setWeekthree(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="jobTitle" style={{ width: "80px", marginRight: "10px" }}>Week four</label>
                        <input type="number" placeholder="Enter Week four " className="form-control" style={{ width: "100%" }} 
                         maxLength="5"
                        onChange={(e) => setWeekfour(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="jobTitle" style={{ width: "80px", marginRight: "10px" }}>Month</label>
                        <input type="text" placeholder="Enter  month " className="form-control" style={{ width: "100%" }} 
                        
                        onChange={(e) => setMonth(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="jobTitle" style={{ width: "80px", marginRight: "10px" }}>Date</label>
                        <input type="date" placeholder="Enter  date " className="form-control" style={{ width: "100%" }} 
                        
                        onChange={(e) => setDate(e.target.value)} required />
                    </div>
                    
                    

                    

                    <button style={{ marginLeft: "90px", backgroundColor: "blue", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Submit</button>


                </form>




           </div>
        </div>


    
      
       
    </div>
  );
}



export default CreateUserat;
