import React,{useState,useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App.css";

function UpdateBatch (){
    const {id} = useParams()
    const [fruittype, setFruitType] =useState()
    const [manufacturedate, setManufactureDate] =useState()
    const [quantity, setQuantity] =useState()
  

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getBatch/'+id)
        .then(result => {console.log(result)
            setFruitType(result.data.fruittype)
            setManufactureDate(result.data.manufacturedate)
            setQuantity(result.data.quantity)
            
            
        
        
        
        
        })
        .catch(err => console.log (err))

    },[] )







    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateBatch/"+id, {fruittype,manufacturedate,quantity})
        .then(result => {
            console.log(result)
            navigate('/batchdetails')
        
        })

        .catch(err => console.log(err))

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
            onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
          >
            Batch Details
          </Link>
        </li>
        <li style={{ marginRight: "40px" }}>
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
    

        <div style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh",padding: "16px" ,fontFamily: 'Poppins, sans-serif',backgroundColor:"#FEF29B" }}>
        <div style={{display: "flex", width: "65%", boxShadow: "0 4px 8px rgba(0,0,0,0.3)", borderRadius: "10px", overflow: "hidden"   }}>
        <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8f8f8" }}>
       
       
             <form onSubmit={Update} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                 <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Update  Batch</h2>
                
                 <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                     <label htmlFor="fuittype" style={{width: "130px", marginRight: "10px",fontWeight: '700' }}>FruitType</label>
                     <input type="text" placeholder="Enter fruit type" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                     
                    value={fruittype} onChange={(e) => setFruitType(e.target.value)} required />
                 </div>

                 <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                     <label htmlFor="manufacturedate" style={{ width: "130px", marginRight: "10px",fontWeight: '700'}}>ManufactureDate</label>
                     <input type="date" placeholder="Enter Manufacture Date" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px"}} 
                     
                     value={manufacturedate} onChange={(e) => setManufactureDate((e.target.value))} required />
                 </div>

                 
                 
                 
                


                 <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                     <label htmlFor="quantity" style={{ width: "130px", marginRight: "10px",fontWeight: '700'}}>Quantity (kg)</label>
                     <input type="number" placeholder="Enter quantity" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                     
                     value ={quantity}   onChange={(e) => setQuantity(e.target.value)} required />
                 </div>

                

               
                 

                 <button style={{ marginLeft: "110px", backgroundColor: "black", color: "white", border: "none",  padding: "10px 20px", borderRadius: "5px"}}>Update</button>


             </form>




        </div>
     
        <div style={{ flex: 1, backgroundImage: "url('/image/lemon.jpeg')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100%" }}>
                    {/* Optional text or additional styling can be added here */}
                </div>

        </div>

</div>
</div>

       

    )
}

export default UpdateBatch;