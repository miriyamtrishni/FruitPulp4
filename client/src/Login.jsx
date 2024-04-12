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

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
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
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
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
                            onChange={(e) => setEmail(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" style={{
                        backgroundColor: "green", color: "white", padding: "10px 20px", border: "none",
                        borderRadius: "5px", cursor: "pointer", marginRight: "10px"
                    }}>
                        Login
                    </button>
                </form>
                <p>Already have an account</p>
                <Link
                    to="/register"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        backgroundColor: isHovered ? "lightgreen" : "transparent",
                        border: "1px solid green", color: isHovered ? "green" : "#006400", padding: "10px 20px",
                        borderRadius: "5px", cursor: "pointer", transition: "background-color 0.3s ease",
                        textDecoration: "none",
                    }}
                >
                    Register
                </Link>
            </div>
        </div>
    );
}

export default Login;
