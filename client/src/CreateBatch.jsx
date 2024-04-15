import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";

function CreateBatch (){
    const [fruittype, setFruitType] =useState()
    const [manufacturedate, setManufactureDate] =useState(null)
    const [quantity, setQuantity] =useState()
   
   
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createBatch", {fruittype,manufacturedate,quantity})
        .then(result => {
            console.log(result)
            navigate('/batchdetails')
        
        })

        .catch(err =>{

         console.log(err)

        })

    }


    return(

        <div>
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
          paddingRight: "10px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
      >
        Home
      </Link>
    </li>

    <li style={{ marginRight: "40px" }}>
      <Link
        to="/Productdashboard"
        style={{
          color: "black",
          textDecoration: "none",
          fontWeight: "bold",
          paddingRight: "10px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "black")}// Change text color on hover out
      >
        Productdashboard
      </Link>
    </li>
    <li style={{ marginRight: "40px" }}>
      <Link
        to="/batchdetails"
        style={{
          color: "black",
          textDecoration: "none",
          fontWeight: "bold",
          paddingRight: "10px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "black")}// Change text color on hover out
      >
        Batch Details
      </Link>
    </li>
    <li style={{ marginRight: "40px" }}>
      <Link
        to="/productdetails"
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
        Product details
      </Link>
    </li>

    <li style={{ marginRight: "40px" }}>
      <Link
        to="/ProductHistory"
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
        Product History
      </Link>
    </li>

    <li>
      <Link
        to="/ProductDetailsReport"
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
        Generate Report
      </Link>
    </li>
  </ul>
</nav>



        <div style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh",padding: "20px" ,fontFamily: 'Poppins, sans-serif',backgroundColor:"#FEF29B"}}>
           <div style={{display: "flex", width: "65%", boxShadow: "0 4px 8px rgba(0,0,0,0.3)", borderRadius: "10px", overflow: "hidden" }}>
           <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8f8f8" }}>
          
                <form onSubmit={Submit} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Batch</h2>
                   
                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="fruittype" style={{width: "200px", marginRight: "10px",fontWeight: '700' }}>FruitType</label>
                        <input type="text" placeholder="Enter fruit type" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px"  }} 
                        
                        onChange={(e) => setFruitType(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="manufacturedate" style={{ width: "200px", marginRight: "10px",fontWeight: '700' }}>ManufactureDate</label>
                        <input type="date" placeholder="Enter Manufacture Date" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        
                        onChange={(e) => setManufactureDate((e.target.value))} required />
                    </div>

                    
                    
                   


                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="quantity" style={{ width: "200px", marginRight: "10px",fontWeight: '700' }}>Quantity (kg)</label>
                        <input type="number" placeholder="Enter quantity" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px"  }} 
                        
                        onChange={(e) => setQuantity(e.target.value)} required />
                    </div>

                   

                  
                    

                    <button style={{ marginLeft: "10px", backgroundColor: "black", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Submit</button>


                </form>



                </div>


<div style={{ flex: 1, backgroundImage: "url('/image/mango.jpeg')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100%" }}>
         {/* Optional text or additional styling can be added here */}
     </div>
</div>
</div>
</div>



    )




}

export default CreateBatch;