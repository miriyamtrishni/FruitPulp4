import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isHovered, setIsHovered] = useState(false); // Moved state inside the component
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    navigate('/HomePage');
                } else {
                    alert(result.data); // Show the error message from the server
                }
            })
            .catch(err => console.log(err));
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div style={{
            display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#ffffff"
        }}>
            <head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
</head>
            <div style={{ border: "none", padding: "20px", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center", width: "80%",maxWidth: "700px", boxShadow: "0 4px 8px rgba(0,0,0,0.3)",fontFamily: 'Poppins, sans-serif' }}>
                <h2 style={{color:"#F4BB29"}}>Login</h2>
                <div style={{ display: "flex", width: "100%",marginLeft:"20px" }}>
            <div style={{ flex: 1, marginBottom: "20px" }}>
                <form onSubmit={handleSubmit}>
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
                        Login
                    </button>
                </form>
                <p style={{ textAlign: "center", marginTop: "30px", marginBottom: "10px", fontFamily: 'Poppins, sans-serif',fontWeight:"500" ,marginLeft:"10px",fontSize:"15px"}}>    Don't have an account? Sign Up</p>
                        <button onClick={handleRegisterClick} style={{
                            backgroundColor: "#F4BB29", color: "white", padding: "10px 20px", border: "none",
                            borderRadius: "5px", cursor: "pointer", width:"30%",fontWeight:"700",marginLeft:"120px"
                        }}>
                            Sign Up
                        </button>
                    </div>
                    <div style={{ flex: 1 }}>
                        <img src="/image/b4.jpg" alt="Login Image" style={{ width: "100%", borderRadius: "5px", height:"100%"}} />
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Login;
