import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    alert("Record already exists");
                } else {
                    console.log(error);
                    alert("An error occurred");
                }
            });
    };

    const handleLoginClick = () => {
        navigate('/login');
    };


    return (
        <div style={{
            display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#FCF4D9"
        }}>{/* Navigation Links */}
        <div style={{ 
          position: 'absolute', 
          top: '20px', 
          right: '20px',
          fontSize: '15px', 
          fontWeight: '900',
          fontFamily: 'Poppins, sans-serif'
        }}>
          <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
    </head>
          <a href="/WPage" style={{ marginRight: '50px', color: 'black', textDecoration: 'none' }}>HOME</a>
          <a href="/login" style={{ marginRight: '50px', color: 'black', textDecoration: 'none' }}>FUNCTIONS</a>
          <a href="/login" style={{ marginRight: '50px',color: 'black', textDecoration: 'none' }}>LOGIN</a>
          <a href="/register" style={{ marginRight: '50px',color: 'black', textDecoration: 'none' }}>SIGN UP</a>
          <i class="fas fa-bars" style={{ marginRight: '100px',color: 'black', fontSize: '15px', cursor:'pointer' }}></i>
        </div>
    
        {/* Fruit Pulp Text */}
        <div style={{ 
          position: 'absolute', 
          top: '20px', 
          left: '20px',
          fontSize: '20px', 
          fontWeight: '1000', 
          fontFamily: 'Poppins, sans-serif', 
          
          color: '#F4BB29',
          marginLeft:'20px'
        }}>
           <span style={{color: 'black'}}>FRUIT</span> PULP
        </div>
             <head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
</head>
            <div style={{  border: "none", padding: "20px", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center", width: "80%",maxWidth: "700px", boxShadow: "0 4px 8px rgba(0,0,0,0.3)",fontFamily: 'Poppins, sans-serif', backgroundColor: "#FFFFFF" }}>
                <h2 style={{color:"#F4BB29"}}>Sign Up</h2>
                <div style={{ display: "flex", width: "100%",marginLeft:"20px" }}>
            <div style={{ flex: 1, marginBottom: "20px" }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "20px" }}>
                        <label htmlFor="name" style={{ marginBottom: "5px" }}>
                        <i className="fa fa-user"></i> 
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            style={{ marginLeft: "30px" , width: "70%",padding: "8px" }}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <label htmlFor="email" style={{ marginBottom: "5px" }}>
                        <i className="fa fa-envelope"></i> 
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            style={{ marginLeft: "30px" , width: "70%",padding: "8px"}}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <label htmlFor="password" style={{ marginBottom: "5px" }}>
                        <i className="fa fa-lock"></i> 
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            style={{ marginLeft: "30px" , width: "70%",padding: "8px" }}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" style={{
                        backgroundColor: "#F4BB29", color: "white", padding: "10px 20px", border: "none",
                        borderRadius: "5px", cursor: "pointer", width:"30%",marginLeft: "120px",fontWeight:"700",marginTop: "10px"
                    }}>
                        Register
                    </button>
                </form>
                <p style={{ textAlign: "center", marginTop: "30px", marginBottom: "10px", fontFamily: 'Poppins, sans-serif',fontWeight:"500" ,marginLeft:"10px",fontSize:"15px"}}>Already have an account? Login</p>
                <button onClick={handleLoginClick} style={{
                            backgroundColor: "#F4BB29", color: "white", padding: "10px 20px", border: "none",
                            borderRadius: "5px", cursor: "pointer", width:"30%",fontWeight:"700",marginLeft:"120px"
                        }}>
                            Login
                        </button>
                    </div>
                    <div style={{ flex: 1 }}>
                        <img src="/image/b3.jpg" alt="Login Image" style={{ width: "100%", borderRadius: "5px", height:"100%"}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
