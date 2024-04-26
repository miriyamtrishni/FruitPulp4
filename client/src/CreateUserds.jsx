import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";



function CreateUserds (){
    const [named , setName] =useState()
    const [did, setDid] =useState()
    const [addressd, setAddress] =useState()
    const [materiald, setMaterial] =useState()
    const [dated, setDate] =useState()
    const [quantityd , setQuantity] =useState()
    const[statusd,setStatus] =useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUserds", {named,did, addressd,materiald,dated,quantityd,statusd})
        .then(result => {
            console.log(result)
            navigate('/distributor')
        
        })

        .catch(err => console.log(err))



    }


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
              to="/distributor" 
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
             DELIVERY DETAILS
            </Link>
          </li>
         
          <li style={{ marginRight: "40px" }}>
            <Link
              to="/distributor" 
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
              DISTRIBUTOR DETAILS
            </Link>
          </li>

          <li style={{ marginRight: "40px" }}>
            <Link
              to="/delivery" 
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
              GENARATE REPORT
            </Link>
          </li>

         

         
        </ul>
      </nav>

        
 

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh",padding: "20px" ,fontFamily: 'Poppins, sans-serif',backgroundColor:"#FEF29B"}}>
            
 
            <div style={{ display: "flex", width: "80%", boxShadow: "0 4px 8px rgba(0,0,0,0.3)", borderRadius: "10px", overflow: "hidden" }}>
        <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8f8f8" }}>
                <form onSubmit={Submit} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Delivery</h2>
                   
                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="named" style={{ width: "130px", marginRight: "10px",fontWeight: '700'  }}> Distributor Name</label>
                        <input type="text" placeholder="Enter name" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        
                        onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="did" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>DID</label>
                        <input type="text" placeholder="Enter Distributor ID" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        maxLength="3" pattern="[A-Za-z0-9]*" // Allow only letters (both uppercase and lowercase) and numbers
                        title="Please enter only letters and numbers for Sid"
                        onChange={(e) => setDid(e.target.value)} required />
                    
                    </div>
                    

                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="addressd" style={{ width: "130px", marginRight: "10px",fontWeight: '700'  }}> Delivery address</label>
                        <input type="text" placeholder="Enter address" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        
                        onChange={(e) => setAddress(e.target.value)} required />
                    </div>


                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                    <label htmlFor="materiald" style={{ width: "100px", marginRight: "10px",fontWeight: '700' }}>Materialname</label>
                     <select 
                    className="form-control" 
                     style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                     onChange={(e) => setMaterial(e.target.value)} 
                     required
                     >
                    <option value="">Select Material</option>
                    <option value="Mango">Mango</option>
                    <option value="Lime">Lime</option>
                    <option value="Passion">Passion</option>
                    <option value="Woodapple">Woodapple</option>
                    <option value="Pineapple">Pineapple</option>
                    <option value="Anoda">Anoda</option>
                     </select>
                    </div>

                    

        

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="quantityd" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Amount packets</label>
                        <input type="number" placeholder="Enter packets" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        
                        onChange={(e) => setQuantity(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                    <label htmlFor="statusd" style={{ width: "100px", marginRight: "10px",fontWeight: '700' }}>Delivery Status</label>
                     <select 
                    className="form-control" 
                     style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                     onChange={(e) => setStatus(e.target.value)} 
                     required
                     >
                  <option value="">Select Status</option>
                    <option value="Completed">Completed</option>
                    <option value=" Not Completed">Not Completed</option>
                    
                     </select>
                    </div>

                    
                    

                    

                    <button style={{ marginLeft: "110px", backgroundColor: "black", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Submit</button>


                </form>
                </div>

                <div style={{ flex: 1, backgroundImage: "url('/image/img31.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            {/* Optional text or additional styling can be added here */}
        </div>
        </div>
</div>
</div>

    )




}

export default CreateUserds;