import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

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
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", {name ,eid,nic,gender,age,address, email, jobtitle , salary})
        .then(result => {
            console.log(result)
            navigate('/')
        
        })

        .catch(err => console.log(err))



    }


    return(

        

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
           <div style={{ backgroundColor: "lightgreen", border: "1px solid black", borderRadius: "5px", padding: "20px" }}>
          
                <form onSubmit={Submit}>
                    <h2>Add User</h2>
                   
                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="name" style={{ width: "80px", marginRight: "10px" }}>Name</label>
                        <input type="text" placeholder="Enter name" className="form-control" style={{ width: "100%" }} 
                        
                        onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="eid" style={{ width: "80px", marginRight: "10px" }}>Eid</label>
                        <input type="text" placeholder="Enter Employee id" className="form-control" style={{ width: "100%" }} 
                        maxLength="3" pattern="[A-Za-z0-9]*" // Allow only letters (both uppercase and lowercase) and numbers
                        title="Please enter only letters and numbers for Eid"
                        onChange={(e) => setEid(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                    <label htmlFor="nic" style={{ width: "80px", marginRight: "10px" }}>NIC</label>
                     <input 
                            type="text" 
                            placeholder="Enter NIC" 
                            className="form-control" 
                            style={{ width: "100%" }} 
                            maxLength="12" // Limit input to 12 characters
                            pattern="[A-Za-z0-9]*" // Allow only letters (both lowercase and uppercase) and numbers
                            title="Please enter only letters and numbers for NIC" // Error message for unsupported characters
                              onChange={(e) => setNic(e.target.value)} 
                              required 
                         />
                    </div>


                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                    <label htmlFor="gender" style={{ width: "80px", marginRight: "10px" }}>Gender</label>
                     <select 
                    className="form-control" 
                     style={{ width: "100%" }} 
                     onChange={(e) => setGender(e.target.value)} 
                     required
                     >
                  <option value="">Select Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                     </select>
                    </div>


                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="age" style={{ width: "80px", marginRight: "10px" }}>Age</label>
                        <input type="number" placeholder="Enter age" className="form-control" style={{ width: "100%" }} 
                        
                        onChange={(e) => setAge(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="address" style={{ width: "80px", marginRight: "10px" }}>Address</label>
                        <input type="text" placeholder="Enter address" className="form-control" style={{ width: "100%" }} 
                        
                        onChange={(e) => setAddress(e.target.value)} required />
                    </div>

                    
                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="email" style={{ width: "80px", marginRight: "10px" }}>Email</label>
                        <input type="email" placeholder="Enter email" className="form-control" style={{ width: "100%" }} 
                        
                        onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="jobTitle" style={{ width: "80px", marginRight: "10px" }}>Job Title</label>
                        <input type="text" placeholder="Enter job title" className="form-control" style={{ width: "100%" }} 
                        
                        onChange={(e) => setJobtitle(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="salary" style={{ width: "80px", marginRight: "10px" }}>Salary</label>
                        <input type="number" placeholder="Enter salary" className="form-control" style={{ width: "100%" }} 
                        
                        onChange={(e) => setSalary(e.target.value)} required />
                    </div>

                    

                    <button style={{ marginLeft: "90px", backgroundColor: "blue", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Submit</button>


                </form>




           </div>
        </div>


    )




}

export default CreateUser;