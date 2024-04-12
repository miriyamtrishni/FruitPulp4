import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'


function Signup(){
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()


    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result => console.log(result))
        .catch(err => console.log(err) )



    }

    return(
       
        <div style={{ 
            backgroundImage: 'url("/image/im2.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px", width: "300px", backgroundColor: "#FFAC1C" }}>
                <h2>Register</h2>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "20px", display: "flex", flexDirection: "column" }}>
                        <label htmlFor="name" style={{ marginBottom: "5px" }}>
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            style={{ marginTop: "5px" }}
                            onChange ={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div style={{ marginBottom: "20px", display: "flex", flexDirection: "column" }}>
                        <label htmlFor="email" style={{ marginBottom: "5px" }}>
                            <strong>Email</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            style={{ marginTop: "5px" }}
                            onChange ={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div style={{ marginBottom: "20px", display: "flex", flexDirection: "column" }}>
                        <label htmlFor="password" style={{ marginBottom: "5px" }}> 
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            style={{ marginTop: "5px" }}
                            onChange ={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" style={{ backgroundColor: "green", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", marginRight: "10px" }}>
                        Register
                    </button>
                </form>
                
                <p>Already have an account</p>
                <Link to="/login" style={{ backgroundColor: "transparent", border: "1px solid green", color: "green", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>
                    Login
                </Link>
                
            </div>
        </div>
    );
}

export default Signup;
