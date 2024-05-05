import React,{useState,useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function UpdateUsersi (){
    const {id} = useParams()
    const [namesi, setName] = useState("");
    const [sidsi, setSid] = useState("");
    const [addressi, setAddress] = useState("");
    const [emailsi, setEmail] = useState("");
    const [contactsi, setContact] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getUsersi/'+id)
        .then(result => {console.log(result)
            setName(result.data.namesi)
            setSid(result.data.sidsi)
            setAddress(result.data.addressi)
            setEmail(result.data.emailsi)
            setContact(result.data.contactsi)
        
        })
        .catch(err => console.log (err))

    },[] )







    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUsersi/"+id, {namesi ,sidsi, addressi,emailsi,contactsi})
        .then(result => {
            console.log(result)
            navigate('/supplier-details')
        
        })

        .catch(err => console.log(err))

    }







    return(

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
              to="/supplier-details" 
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
            SUPPLIER DETAILS
            </Link>
          </li>
          <li style={{ marginRight: "10px" }}>
            <Link
              to="/material-details" 
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
              SUPPLIER ORDERS
            </Link>
          </li>

          <li style={{ marginRight: "10px" }}>
            <Link
              to="/material-details" 
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

          

          
        </ul>
      </nav>
        
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh",padding: "16px" ,fontFamily: 'Poppins, sans-serif',backgroundColor:"#FEF29B" }}>
        <div style={{ display: "flex", width: "80%", boxShadow: "0 4px 8px rgba(0,0,0,0.3)", borderRadius: "10px", overflow: "hidden" }}>
        <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8f8f8" }}>

                <form onSubmit={Update}style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Update Supplier</h2>
                   

                   
                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="names" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Name</label>
                        <input type="text" placeholder="Enter names" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        value={namesi}  onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center"  }}>
                        <label htmlFor="sidsi" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>SID</label>
                        <input type="text" placeholder="Enter Supplier id" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        maxLength="4" pattern="[A-Za-z0-9]*" // Allow only letters (both uppercase and lowercase) and numbers
                        title="Please enter only letters and numbers for Sid"
                        
                        value={sidsi} onChange={(e) => setSid(e.target.value)}/>
                    </div>

                           

                              <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                                <label htmlFor="address" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Address</label>
                                <input type="text" placeholder="Enter address" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                                value={addressi}  onChange={(e) => setAddress(e.target.value)}/>
                              </div>

                            


                             <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                                  <label htmlFor="emailsi" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Email</label>
                                   <input type="email" placeholder="Enter email" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                                   value={emailsi}  onChange={(e) => setEmail(e.target.value)}/>
                            </div>

                    
                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="contactsi" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Contact No</label>
                        <input type="number" placeholder="Enter overtime hours" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                         value={contactsi}   onChange={(e) => setContact(e.target.value)} required />
                    </div>
                    


                    <button style={{ marginLeft: "110px", backgroundColor: "black", color: "white", border: "none",  padding: "10px 20px", borderRadius: "5px" }}>Update</button>


                </form>
              

           </div>
           <div style={{ flex: 1, backgroundImage: "url('/image/im4.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                    {/* Optional text or additional styling can be added here */}
                </div>

        </div>

</div>
</div>
    )




}

export default UpdateUsersi;