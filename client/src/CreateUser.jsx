import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";

function CreateUser (){
    const [name , setName] =useState()
    const [eid, setEid] =useState()
    const [nic, setNic] =useState()
    const [gender, setGender] =useState()
    const [age , setAge] =useState()
    const[address,setAddress] =useState()
    const [email , setEmail] =useState()
    const [jobtitle , setJobtitle] =useState()
    const [salary , setSalary] =useState()
    const [overtimeHours, setOvertimeHours] = useState(0);
    const [overtimeRate, setOvertimeRate] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [errorMessage, setErrorMessage] = useState(""); // Define errorMessage state variable
    const navigate = useNavigate()

    //change this github
    const Submit = async (e) => {
        e.preventDefault();
        try {
            // Check if Eid already exists
            const response = await axios.post("http://localhost:3001/checkEid", { eid });
            if (response.status === 200 && response.data.exists) {
                alert('Eid already exists');
            } else {
                // Proceed with user creation
                const newUser = { name, eid, nic, gender, age, address, email, jobtitle, salary,overtimeHours, overtimeRate, bonus  };
                const result = await axios.post("http://localhost:3001/createUser", newUser);
                console.log(result);
                navigate('/');
            }
        } catch (error) {
            console.error(error);
            // Handle error
            alert('Error occurred. Please try again.');
        }
    };

    const handleChange2 = (e) => {
      let value = e.target.value.toUpperCase(); // Convert input to uppercase
      // Replace any characters that are not 'E' or numbers with an empty string
      value = value.replace(/[^E0-9]/g, "");
      // Limit the length to 4 characters
      value = value.slice(0, 4);
      // Update the input value
      setEid(value);
      
      if (value.length > 4) {
          setErrorMessage("Maximum length is 4 characters");
      } else if (!value.match(/^E[0-9]{3}$/)) {
          setErrorMessage("Please enter 'E' followed by  3 numbers");
      } else {
          setErrorMessage("");
      }
  };

    return(
<div >
<nav style={{ backgroundColor: "white", padding: "10px 0", width: "100%", fontSize: "15px",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",fontFamily: 'Poppins, sans-serif', fontWeight: '900',  }}>
  <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex", justifyContent: "center" }}>
    <li style={{ marginRight: "40px" }}>
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
          paddingLeft: "700px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
      >
        HOME
      </Link>
    </li>
          <li style={{ marginRight: "40px" }}>
            <Link
              to="/" 
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                paddingRight: "20px",
                transition: "all 0.3s ease", // Hover transition
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
              onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
            >
             Employees Details
            </Link>
          </li>
          <li style={{ marginRight: "40px" }}>
            <Link
              to="/attendance" 
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                paddingRight: "20px",
                transition: "all 0.3s ease", // Hover transition
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
              onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
            >
             Employee Attendance
            </Link>
          </li>

          <li style={{ marginRight: "40px" }}>
            <Link
              to="/EmployeeDetailsReport" 
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                paddingRight: "20px",
                transition: "all 0.3s ease", // Hover transition
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
              onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
            >
              Genarate Report
            </Link>
          </li>

          <li style={{ marginRight: "40px" }}>
            <Link
              to="/deleted-employees" // Path to navigate to the deleted employees table
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
                paddingRight: "20px",
                transition: "all 0.3s ease", // Hover transition
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
              onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
            >
              Resign Employees
            </Link>
          </li>
        </ul>
      </nav>
        

        <div
        
        style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh",padding: "20px" ,fontFamily: 'Poppins, sans-serif',backgroundColor:"#FEF29B"}}>
        <div style={{ display: "flex", width: "65%", boxShadow: "0 4px 8px rgba(0,0,0,0.3)", borderRadius: "10px", overflow: "hidden" }}>
         <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8f8f8" }}>
         
            <form onSubmit={Submit} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add  Employee</h2>
               
                <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                    <label htmlFor="names" style={{ width: "200px", marginRight: "10px",fontWeight: '700'  }}>Name</label>
                    <input type="text" placeholder="Enter names" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                    
                    onChange={(e) => setName(e.target.value)} required />
                </div>

               
                <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                   <label htmlFor="eid" style={{ width: "200px", marginRight: "10px", fontWeight: '700' }}>Eid</label>
                    <input
                          type="text"
                          placeholder="Enter Employee id"
                          className="form-control"
                          style={{ width: "100%", padding: "8px", margin: "5px 0 15px" }}
                          maxLength="4"
                          value={eid}
                          onChange={handleChange2}
                          required
                     />
                         {errorMessage && <div style={{ color: "red", marginLeft: "10px" }}>{errorMessage}</div>}
                    </div>


                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="eid" style={{ width: "200px", marginRight: "10px" ,fontWeight: '700'}}>Nic</label>
                     <input 
                            type="text" 
                            placeholder="Enter NIC" 
                            className="form-control" 
                            style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                            maxLength="12" // Limit input to 12 characters
                            pattern="[A-Za-z0-9]*" // Allow only letters (both lowercase and uppercase) and numbers
                            title="Please enter only letters and numbers for NIC" // Error message for unsupported characters
                              onChange={(e) => setNic(e.target.value)} 
                              required 
                         />
                    </div>


                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="eid" style={{ width: "200px", marginRight: "10px" ,fontWeight: '700'}}>Gender</label>
                      
                     <select 
                    className="form-control" 
                     style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                     onChange={(e) => setGender(e.target.value)} 
                     required
                     >
                  <option value="">Select Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                     </select>
                    </div>


                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="eid" style={{ width: "200px", marginRight: "10px" ,fontWeight: '700'}}>Age</label>
                      
                        <input type="number" placeholder="Enter age" className="form-control" style={{ width: "100%" ,padding: "8px", margin: "5px 0 15px"}} 
                        
                        onChange={(e) => setAge(e.target.value)} required />
                    </div>




                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="address" style={{ width: "200px", marginRight: "10px" ,fontWeight: '700'}}>Address</label>
                      
                        <input type="text" placeholder="Enter address" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        
                        onChange={(e) => setAddress(e.target.value)} required />
                    </div>


                    
                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="address" style={{ width: "200px", marginRight: "10px" ,fontWeight: '700'}}>Email</label>
                      
                        <input type="email" placeholder="Enter email" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        
                        onChange={(e) => setEmail(e.target.value)} required />
                    </div>


                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="eid" style={{ width: "200px", marginRight: "10px" ,fontWeight: '700'}}>Job Title</label>
                      
                        <input type="text" placeholder="Enter job title" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        
                        onChange={(e) => setJobtitle(e.target.value)} required />
                    </div>


                    {/* Add overtimeHours */}
                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="eid" style={{ width: "200px", marginRight: "10px" ,fontWeight: '700'}}>Overtime Hours</label>
                      
                        <input type="number" placeholder="Enter overtime hours" className="form-control" style={{ width: "100%" ,padding: "8px", margin: "5px 0 15px"}} 
                            onChange={(e) => setOvertimeHours(e.target.value)} required />
                    </div>


                    {/* Add overtimeRate */}
                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="eid" style={{ width: "200px", marginRight: "10px" ,fontWeight: '700'}}>Rate</label>
                      
                        <input type="number" placeholder="Enter overtime rate" className="form-control" style={{ width: "100%" ,padding: "8px", margin: "5px 0 15px"}} 
                            onChange={(e) => setOvertimeRate(e.target.value)} required />
                    </div>


                    {/* Add bonus */}
                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="bonus" style={{ width: "200px", marginRight: "10px" ,fontWeight: '700'}}>Bonus</label>
                      
                        <input type="number" placeholder="Enter bonus" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                            onChange={(e) => setBonus(e.target.value)} required />
                    </div>


                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="salary" style={{ width: "200px", marginRight: "10px" ,fontWeight: '700'}}>Salary </label>
                      
                        <input type="number" placeholder="Enter salary" className="form-control" style={{ width: "100%" ,padding: "8px", margin: "5px 0 15px"}} 
                        
                        onChange={(e) => setSalary(e.target.value)} required />
                    </div>

                    
                    <button style={{ marginLeft: "10px", backgroundColor: "black", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Submit</button>

                   

                </form>
               
              
           </div>
           <div style={{ flex: 1, backgroundImage: "url('/image/im3.jpg')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100%" }}>
                    {/* Optional text or additional styling can be added here */}
                </div>
        </div>
</div>
</div>
    )




}

export default CreateUser;