import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useParams,useNavigate} from "react-router-dom";

import EmployeeReport from "./EmployeeReport";
import DeletedEmployeesTable from "./DeletedEmployeesTable"; // Import the DeletedEmployeesTable component

function UpdateUserat() {
  const {id} =useParams()
  const [eidd , setEidd] =useState()
 
  const [weekone, setWeekone] =useState()
  const [weektwo, setWeektwo] =useState()
  const [weekthree , setWeekthree] =useState()
  const[weekfour,setWeekfour] =useState()
  const [month , setMonth] =useState()
  const [date , setDate] =useState()
  const navigate= useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3001/getUserat/'+id)
    .then(result => {console.log(result)
        setEidd(result.data.eidd)
        setWeekone(result.data.weekone)
        setWeektwo(result.data.weektwo)
        setWeekthree(result.data.weekthree)
        setWeekfour(result.data.weekfour)
        setMonth(result.data.month)
        setDate(result.data.date)
        
    
    
    
    
    
    })
    .catch(err => console.log (err))

},[id] )

const Update = (e) => {
  e.preventDefault();
  axios.put("http://localhost:3001/updateUserat/"+id, { eidd,weekone,weektwo,weekthree,weekfour,month,date })
  .then(result => {
      console.log(result)
      navigate('/attendance')
  
  })

  .catch(err => console.log(err))

}
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
          
                <form  onSubmit={Update}>
                    <h2>Update Attendance</h2>
                   
                    

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="eidd" style={{ width: "80px", marginRight: "10px" }}>Eid</label>
                        <input type="text" placeholder="Enter Employee id" className="form-control" style={{ width: "100%" }} 
                        maxLength="3" pattern="[A-Za-z0-9]*" // Allow only letters (both uppercase and lowercase) and numbers
                        title="Please enter only letters and numbers for Eid"
                        
                        value={eidd}  onChange={(e) => setEidd(e.target.value)}  disabled required />
                    </div>

                    


                  

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="week" style={{ width: "80px", marginRight: "10px" }}>Week one</label>
                        <input type="number" placeholder="Enter week one" className="form-control" style={{ width: "100%" }} 
                        
                        value={weekone}   onChange={(e) => setWeekone(e.target.value)} required />
                    </div>

                    
                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="number" style={{ width: "80px", marginRight: "10px" }}>Week two</label>
                        <input type="number" placeholder="Enter week two" className="form-control" style={{ width: "100%" }} 
                        
                        value={weektwo}  onChange={(e) => setWeektwo(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="week" style={{ width: "80px", marginRight: "10px" }}>Week  three</label>
                        <input type="number" placeholder="Enter Week three " className="form-control" style={{ width: "100%" }} 
                        
                        value={weekthree}   onChange={(e) => setWeekthree(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="week" style={{ width: "80px", marginRight: "10px" }}>Week four</label>
                        <input type="number" placeholder="Enter Week four " className="form-control" style={{ width: "100%" }} 
                        
                        value={weekfour}   onChange={(e) => setWeekfour(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="month" style={{ width: "80px", marginRight: "10px" }}>Month</label>
                        <input type="text" placeholder="Enter  month " className="form-control" style={{ width: "100%" }} 
                        
                        value={month}  onChange={(e) => setMonth(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="date" style={{ width: "80px", marginRight: "10px" }}>Date</label>
                        <input type="date" placeholder="Enter  date " className="form-control" style={{ width: "100%" }} 
                        
                        value={date}    onChange={(e) => setDate(e.target.value)} required />
                    </div>
                    
                    

                    

                    <button style={{ marginLeft: "90px", backgroundColor: "blue", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Update</button>


                </form>




           </div>
        </div>


    
      
       
    </div>
      
       
    
  );
}



export default UpdateUserat;
