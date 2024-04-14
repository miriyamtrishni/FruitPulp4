import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EmployeeReport = () => {

  const buttonStyle2 = {
    padding: '15px 30px',
    fontSize: '18px',
    cursor: 'pointer',
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    outline: 'none',
    transition: 'background-color 0.3s ease',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '700' ,
    marginRight:'120px'
    
};

const boxStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  margin: 'auto',
  backgroundColor: '#f8f8f8',
  borderRadius: '8px',
  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
  height:"50vh",
  width: '50vw', 
  marginTop:'80px'

  
};

const textStyle = {

  fontSize: '18px',
  color: '#333',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '700',
  marginRight:'50px'

};

const imageStyle = {
  width: '50%', // Image takes half of the container width
  height: '100%', // Image height matches the container
  objectFit: 'cover' // Ensures the image covers the designated area
};

    

    const handleDownload2 = () => {
      axios({
        url: "http://localhost:3001/EmployeeDetailsReport", // Endpoint to download the file
        method: 'GET',
        responseType: 'blob', // Important: Set responseType to 'blob' to handle binary data
      }).then(response => {
        // Create a blob object from the response data
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
      
        // Create a temporary anchor element to trigger the download
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'employee_report.pdf'; // Set the file name
        document.body.appendChild(a);
        a.click();
      
        // Clean up
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }).catch(error => {
        console.error('Error downloading file:', error);
        // Handle error
      });
    };
  
    return (
      <div>
      <head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
</head>
<nav style={{ backgroundColor: "white", padding: "10px 0", width: "100%", fontSize: "15px",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",fontFamily: 'Poppins, sans-serif', fontWeight: '900' }}>
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
  
      <div style={{
    display: 'flex',
    backgroundColor:"#FEF29B",
    minHeight: "100vh",
    justifyContent: 'center', // Center vertically
     // Align to the left
    
   
}}>

  <div style={boxStyle}>

                <img src="/image/b5.jpg" alt="Employee Report" style={imageStyle} />
                    <div>
                        <p style={textStyle}>Employee Details Report.</p>
                        <button onClick={handleDownload2} style={buttonStyle2}>
                        <i className="fa fa-download"></i> Download</button>
                    </div>
</div>
</div>

           
            
        </div>
    );
};

export default EmployeeReport;
