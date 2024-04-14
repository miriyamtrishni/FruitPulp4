import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CreateUserat() {
    const [eidd, setEidd] = useState("");
    const [weekone, setWeekone] = useState("");
    const [weektwo, setWeektwo] = useState("");
    const [weekthree, setWeekthree] = useState("");
    const [weekfour, setWeekfour] = useState("");
    const [month, setMonth] = useState("");
    const [date, setDate] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [errorMessageee, setErrorMessageee] = useState("");

    const navigate = useNavigate();

    const Submit = async (e) => {
        e.preventDefault();
        try {
            // Check if Eid already exists
            const response = await axios.post("http://localhost:3001/checkEidd", { eidd });
            if (response.status === 200 && response.data.exists) {
                alert("Eid already exists");
            } else {
                // Proceed with user creation
                const newUser = { eidd, weekone, weektwo, weekthree, weekfour, month, date };
                const result = await axios.post("http://localhost:3001/createUserat", newUser);
                console.log(result);
                navigate("/attendance");
            }
        } catch (error) {
            console.error(error);
            // Handle error
            alert("Error occurred. Please try again.");
        }
    };

    const handleChange = (e, setter) => {
        let value = e.target.value;
        // Trim any characters beyond the first 5
        value = value.slice(0, 5);
        // Replace any characters other than 0 or 1 with an empty string
        value = value.replace(/[^01]/g, "");
        // Update the input value
        setter(value);

        if (value.length > 5) {
            setErrorMessage("Maximum length is 5 characters");
        } else if (value.match(/[^01]/g)) {
            setErrorMessage("Only 0 and 1 are allowed");
        } else {
            setErrorMessage("");
        }
    };

    const handleChange2 = (e, setter) => {
        let value = e.target.value.toUpperCase(); // Convert input to uppercase
        // Replace any characters that are not 'E' or numbers with an empty string
        value = value.replace(/[^E0-9]/g, "");
        // Limit the length to 4 characters
        value = value.slice(0, 4);
        // Update the input value
        setter(value);
        
        if (value.length > 4) {
          setErrorMessageee("Maximum length is 4 characters");
        } else if (!value.match(/^E[0-9]{3}$/)) {
          setErrorMessageee("Please enter 'E' followed by  3 numbers");
        } else {
            setErrorMessageee("");
        }
    };
    



    return (
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
              to="/" 
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
             Employees Details
            </Link>
          </li>
          <li style={{ marginRight: "40px" }}>
            <Link
              to="/attendance" 
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
             Employee Attendance
            </Link>
          </li>

          <li style={{ marginRight: "40px" }}>
            <Link
              to="/EmployeeDetailsReport" 
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
              Genarate Report
            </Link>
          </li>

          <li style={{ marginRight: "40px" }}>
            <Link
              to="/deleted-employees" // Path to navigate to the deleted employees table
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
              Resign Employees
            </Link>
          </li>
        </ul>
      </nav>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", padding: "20px", fontFamily: 'Poppins, sans-serif',backgroundColor:"#FEF29B" }}>
                <div style={{ display: "flex", width: "65%", boxShadow: "0 4px 8px rgba(0,0,0,0.3)", borderRadius: "10px", overflow: "hidden" }}>
                    <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8f8f8" }}>
                        <form onSubmit={Submit} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Attendance</h2>

                            <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                              <label htmlFor="eid" style={{ width: "200px", marginRight: "10px", fontWeight: '700' }}>Eid</label>
                         <input
                                  type="text"
                                 placeholder="Enter Employee id"
                                className="form-control"
                                style={{ width: "100%", padding: "8px", margin: "5px 0 15px" }}
                                 value={eidd}
                                 onChange={(e) => handleChange2(e, setEidd)}
                                 required
                                  />
                          {errorMessageee && <div style={{ color: "red", marginLeft: "10px" }}>{errorMessageee}</div>}
                    </div>



                            <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                                <label htmlFor="weekOne" style={{ width: "200px", marginRight: "10px", fontWeight: '700' }}>Week One</label>
                                <input type="number" placeholder="Enter week one (max 5 characters, 0 or 1)" className="form-control" style={{ width: "100%", padding: "8px", margin: "5px 0 15px" }}
                                    value={weekone}
                                    onChange={(e) => handleChange(e, setWeekone)} required />
                            </div>

                            <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                                <label htmlFor="weekTwo" style={{ width: "200px", marginRight: "10px", fontWeight: '700' }}>Week Two</label>
                                <input type="number" placeholder="Enter week two (max 5 characters, 0 or 1)" className="form-control" style={{ width: "100%", padding: "8px", margin: "5px 0 15px" }}
                                    value={weektwo}
                                    onChange={(e) => handleChange(e, setWeektwo)} required />
                            </div>

                            <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                                <label htmlFor="weekThree" style={{ width: "200px", marginRight: "10px", fontWeight: '700' }}>Week Three</label>
                                <input type="number" placeholder="Enter week three (max 5 characters, 0 or 1)" className="form-control" style={{ width: "100%", padding: "8px", margin: "5px 0 15px" }}
                                    value={weekthree}
                                    onChange={(e) => handleChange(e, setWeekthree)} required />
                            </div>

                            <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                                <label htmlFor="weekFour" style={{ width: "200px", marginRight: "10px", fontWeight: '700' }}>Week Four</label>
                                <input type="number" placeholder="Enter week four (max 5 characters, 0 or 1)" className="form-control" style={{ width: "100%", padding: "8px", margin: "5px 0 15px" }}
                                    maxLength="5" minLength="5"
                                    value={weekfour}
                                    onChange={(e) => handleChange(e, setWeekfour)} required />
                            </div>

                            <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                                <label htmlFor="month" style={{ width: "200px", marginRight: "10px", fontWeight: '700' }}>Month</label>
                                <input type="text" placeholder="Enter month" className="form-control" style={{ width: "100%", padding: "8px", margin: "5px 0 15px" }}
                                    value={month}
                                    onChange={(e) => setMonth(e.target.value)} required />
                            </div>

                            <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                                <label htmlFor="date" style={{ width: "200px", marginRight: "10px", fontWeight: '700' }}>Date</label>
                                <input type="date" placeholder="Enter date" className="form-control" style={{ width: "100%", padding: "8px", margin: "5px 0 15px" }}
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)} required />
                            </div>

                            {errorMessage && <div style={{ color: "red", marginBottom: "10px" }}>{errorMessage}</div>}

                            <button style={{ backgroundColor: "black", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px", alignSelf: "center" }}>Submit</button>

                        </form>
                    </div>
                    <div style={{ flex: 1, backgroundImage: "url('/image/im3.jpg')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100%" }}>
                        {/* Optional text or additional styling can be added here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateUserat;
