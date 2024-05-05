import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function CreateUsersi() {
    const [namesi, setName] = useState("");
    const [sidsi, setSid] = useState("");
    const [addressi, setAddress] = useState("");
    const [emailsi, setEmail] = useState("");
    const [contactsi, setContact] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Define errorMessage state variable
    const [errorMessage1, setErrorMessage1] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUser = {
                namesi,
                sidsi,
                addressi,
                emailsi,
                contactsi,
               
            };
            const result = await axios.post("http://localhost:3001/createUsersi", newUser);
            console.log(result);
            navigate('/supplier-details');
        } catch (error) {
            console.error(error);
            alert('Error occurred. Please try again.');
        }
    };


    const handleChange2 = (e) => {
      let value = e.target.value.toUpperCase(); // Convert input to uppercase
      // Replace any characters that are not 'S' or numbers with an empty string
      value = value.replace(/[^S0-9]/g, "");
      // Limit the length to 4 characters
      value = value.slice(0, 4);
      // Update the input value
      setSid(value);
      
      if (value.length > 4) {
          setErrorMessage("Maximum length is 4 characters");
      } else if (!value.match(/^S[0-9]{3}$/)) {
          setErrorMessage("Please enter 'S' followed by  3 numbers");
      } else {
          setErrorMessage("");
      }
  };

  const handleChange4 = (e) => {
    const value = e.target.value;
    setContact(value);
    
    // Check if the length of the input value is not equal to 10
    if (value.length !== 10) {
        setErrorMessage1(' Contact no must be 10 characters long.');
    } else {
        setErrorMessage1('');
    }
};



    return (
        <div>
            
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
              to="/supplier" 
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


            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", padding: "20px", fontFamily: 'Poppins, sans-serif', backgroundColor: "#FEF29B" }}>
                <div style={{ display: "flex", width: "80%", boxShadow: "0 4px 8px rgba(0,0,0,0.3)", borderRadius: "10px", overflow: "hidden" }}>
                    <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8f8f8" }}>
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Supplier</h2>
                             
                            <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                                <label htmlFor="namesi" style={{ width: "130px", marginRight: "10px", fontWeight: '700' }}>Name</label>
                                <input type="text" placeholder="Enter name" className="form-control" style={{ width: "100%", padding: "8px", margin: "5px 0 15px" }} onChange={(e) => setName(e.target.value)} required />
                            </div>

                            <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                   <label htmlFor="sidsi" style={{ width: "130px", marginRight: "10px", fontWeight: '700' }}>SID</label>
                    <input
                          type="text"
                          placeholder="Enter Supplier id"
                          className="form-control"
                          style={{ width: "100%", padding: "8px", margin: "5px 0 15px" }}
                          maxLength="4"
                          value={sidsi}
                          onChange={handleChange2}
                          required
                     />
                         {errorMessage && <div style={{ backgroundColor: "#f8d7da", border: "1px solid #f5c6cb", color: "black", padding: "10px", marginLeft: "10px", borderRadius: "10px", fontFamily: 'Poppins, sans-serif',fontWeight: '700',marginBottom: "5px" }}>{errorMessage}</div>}
                    </div>
                           

                            
                             <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="addressi" style={{ width: "130px", marginRight: "10px" ,fontWeight: '700'}}>Address</label>
                      
                        <input type="text" placeholder="Enter address" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        
                        onChange={(e) => setAddress(e.target.value)} required />
                    </div>

                    
                    
                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="emailsi" style={{ width: "130px", marginRight: "10px" ,fontWeight: '700'}}>Email</label>
                      
                        <input type="email" placeholder="Enter email" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        
                        onChange={(e) => setEmail(e.target.value)} required />
                    </div>


                    
                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="contactsi" style={{ width: "130px", marginRight: "10px" ,fontWeight: '700'}}>Contact No</label>
                      
                        <input type="text" placeholder="Enter Contact No" className="form-control" style={{ width: "100%" ,padding: "8px", margin: "5px 0 15px"}} value={contactsi} maxLength="10"
                           onChange={handleChange4} required />
                           {errorMessage1 && <div style={{ backgroundColor: "#f8d7da", border: "1px solid #f5c6cb", color: "black", padding: "10px", marginLeft: "10px", borderRadius: "10px", fontFamily: 'Poppins, sans-serif',fontWeight: '700',marginBottom: "5px" }}>{errorMessage1}</div>}
                    </div>


			         


                            <button style={{ marginLeft: "110px", backgroundColor: "black", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Submit</button>
                        </form>
                    </div>
                    <div style={{ flex: 1, backgroundImage: "url('/image/img26.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateUsersi;
