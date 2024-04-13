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
    marginBottom: '20px',
    marginLeft: '40px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '900' 
    
};



  const boxStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '60px',
    margin: '60px 60px',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    height:"30vh",
    marginLeft:"200px",
    marginTop:"300px"
};

const textStyle = {
  marginBottom: '50px',
    fontSize: '18px',
    color: '#333',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '700' 
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
        <div>
            
            <nav style={{ backgroundColor: "black", padding: "10px 0", width: "100%", fontSize: "16px" }}>
    <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex", justifyContent: "center" }}>
      <li style={{ marginRight: "40px" }}>
        <Link
          to="/HomePage"
          style={{
            color: "orange",
            textDecoration: "none",
            fontWeight: "bold",
            paddingRight: "10px",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "white")}
          onMouseOut={(e) => (e.currentTarget.style.color = "orange")}
        >
          Home
        </Link>
      </li>
      <li style={{ marginRight: "40px" }}>
        <Link
          to="/" // Path to navigate to the deleted employees table
          style={{
            color: "orange",
            textDecoration: "none",
            fontWeight: "bold",
            paddingRight: "10px",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "white")}
          onMouseOut={(e) => (e.currentTarget.style.color = "orange")}
        >
          Employees Details
        </Link>
      </li>
      <li style={{ marginRight: "40px" }}>
        <Link
          to="/attendance" // Path to navigate to the deleted employees table
          style={{
            color: "orange",
            textDecoration: "none",
            fontWeight: "bold",
            paddingRight: "10px",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "white")}
          onMouseOut={(e) => (e.currentTarget.style.color = "orange")}
        >
          Employee Attendance
        </Link>
      </li>
      <li style={{ marginRight: "40px" }}>
        <Link
          to="/EmployeeDetailsReport" // Path to navigate to the employee details report
          style={{
            color: "orange",
            textDecoration: "none",
            fontWeight: "bold",
            paddingRight: "10px",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "white")}
          onMouseOut={(e) => (e.currentTarget.style.color = "orange")}
        >
          Generate Report

          
        </Link>
      </li>
      <li style={{ marginRight: "40px" }}>
        <Link
          to="/deleted-employees" // Path to navigate to the deleted employees table
          style={{
            color: "orange",
            textDecoration: "none",
            fontWeight: "bold",
            paddingRight: "10px",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "white")}
          onMouseOut={(e) => (e.currentTarget.style.color = "orange")}
        >
          Resign Employees
        </Link>
      </li>
    </ul>
  </nav>
  
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center vertically
    alignItems: 'flex-start', // Align to the left
    height: '65vh', // Adjust the height as needed
    marginLeft: '100px'
   
   
}}>
     <div style={boxStyle}>
                <span style={textStyle}>Download the Employee Details Report <br/><br/><br/> This report includes the  employee details,<br/> total number of employees <br/> and sum of the total salaries. </span>
    <button onClick={handleDownload2} style={buttonStyle2}>Download Report</button>
    </div>
</div>
</div>
</div>
           
            
        
    );
};

export default EmployeeReport;
