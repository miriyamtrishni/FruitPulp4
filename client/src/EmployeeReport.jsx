import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EmployeeReport = () => {
    const buttonStyle = {
        padding: '15px 30px',
        fontSize: '18px',
        cursor: 'pointer',
        backgroundColor: 'orange',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        outline: 'none',
        transition: 'background-color 0.3s ease',
        marginBottom: '50px',
        marginLeft: '10px'
    };


    const handleDownload = () => {
        axios.get('http://localhost:3001/EmployeeDetailsReport', { responseType: 'blob' })
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'employee_report.pdf');
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => {
                console.error('Error downloading PDF:', error);
                // Handle error
            });
    };

    return (
        <div style={{ 
          backgroundImage: 'url("/image/background.jpg")', 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat', 
          display: 'flex', 
          flexDirection: 'column', // Ensures children are aligned vertically
          justifyContent: 'flex-start', // Aligns children at the start of the container
          alignItems: 'center', 
          minHeight: '100vh',
          padding: 0, // Remove padding
          margin: 0, // Remove margin
        }}>
            
            <nav style={{ backgroundColor: "black", padding: "10px 0", width: "100%", fontSize: "20px" }}>
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
    <button onClick={handleDownload} style={buttonStyle}>Download Employee Details Report</button>
    
</div>
</div>

           
            
        
    );
};

export default EmployeeReport;
