import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductReport = () => {
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
        //marginBottom: '50px',
        //marginLeft: '10px',
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








    const handleDownload = () => {
        axios.get('http://localhost:3001/ProductDetailsReport', { responseType: 'blob' })
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'product_report.pdf');
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => {
                console.error('Error downloading PDF:', error);
                // Handle error
            });
    };


    const handleDownload2 = () => {
      axios.get('http://localhost:3001/BatchDetailsReport', { responseType: 'blob' })
          .then(response => {
              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', 'batch_report.pdf');
              document.body.appendChild(link);
              link.click();
          })
          .catch(error => {
              console.error('Error downloading PDF:', error);
              // Handle error
          });
  };









    return (
        <div>
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
          paddingRight: "10px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
      >
        Home
      </Link>
    </li>

    <li style={{ marginRight: "40px" }}>
      <Link
        to="/Productdashboard"
        style={{
          color: "black",
          textDecoration: "none",
          fontWeight: "bold",
          paddingRight: "10px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "black")}// Change text color on hover out
      >
        Productdashboard
      </Link>
    </li>
    <li style={{ marginRight: "40px" }}>
      <Link
        to="/batchdetails"
        style={{
          color: "black",
          textDecoration: "none",
          fontWeight: "bold",
          paddingRight: "10px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "black")}// Change text color on hover out
      >
        Batch Details
      </Link>
    </li>
    <li style={{ marginRight: "40px" }}>
      <Link
        to="/productdetails"
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
        Product details
      </Link>
    </li>

    <li style={{ marginRight: "40px" }}>
      <Link
        to="/ProductHistory"
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
        Product History
      </Link>
    </li>

    <li>
      <Link
        to="/ProductDetailsReport"
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
        Generate Report
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

<img src="/image/PR2.jpeg" alt="Product Report" style={imageStyle} />
    <div>
        <p style={textStyle}>Product Details Report.</p>
        <button onClick={handleDownload} style={buttonStyle}>
        <i className="fa fa-download"></i> Download</button>
    </div>
</div>








    
</div>
</div>

           
            
        </div>
    );
};

export default ProductReport;
