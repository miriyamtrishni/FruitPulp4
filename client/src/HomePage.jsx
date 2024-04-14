import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ 
      backgroundImage: 'url("/image/img24.jpg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      minHeight: '98vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      color: 'black', 
      fontWeight: 'bold', 
      textAlign: 'center',
      backdropFilter: 'blur(8px)', // Add blur effect
      fontFamily: 'Poppins, sans-serif',
    }}>
      {/* Navigation Links */}
    <div style={{ 
      position: 'absolute', 
      top: '20px', 
      right: '20px',
      fontSize: '15px', 
      fontWeight: '900',
    }}>
      <head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
</head>
      <a href="/WPage" style={{ marginRight: '50px', color: 'black', textDecoration: 'none' }}>HOME</a>
      <a href="/HomePage" style={{ marginRight: '50px', color: 'black', textDecoration: 'none' }}>FUNCTIONS</a>
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
      <div style={{ 
       display: 'flex', 
       flexDirection: 'row', 
       justifyContent: 'space-between', 
       width: '30%', 
       marginRight:'900px',
      
       
}}>
       

        {/* Left side buttons */}
        <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    width: '100%',
    marginLeft:"60px", 
    // Adjust width for responsiveness
    
  }}>
          <Link to="/financial">
      <button style={{ 
        backgroundColor: '#FFF1B9', 
        color: 'black', 
        padding: '30px', // Reduced padding
        marginBottom: '50px', 
        border: 'none', 
        borderRadius: '0px 20px 20px 20px', 
        fontSize: '15px', // Reduced font size
        fontWeight: '900',
        boxShadow:"0 4px 8px rgba(0,0,0,0.3)",
        marginTop:'10px'
      }}>Financial Management</button>
    </Link>
          <Link to="/order">
            <button style={{ 
              backgroundColor: '#FFF1B9', 
              color: 'black', 
              padding: '30px', 
              marginBottom: '50px', 
              border: 'none', 
              borderRadius: '0px 20px 20px 20px', 
              boxShadow:"0 4px 8px rgba(0,0,0,0.3)",
              fontWeight: '900',
              fontSize: '15px' 
            }}>Order Management</button>
          </Link>

          <Link to="/supplier">
            <button style={{ 
              backgroundColor: '#FFF1B9', 
              color: 'black', 
              padding: '30px', 
              marginBottom: '50px', 
              border: 'none', 
              borderRadius: '0px 20px 20px 20px', 
              boxShadow:"0 4px 8px rgba(0,0,0,0.3)",
              fontWeight: '900',
              fontSize: '15px' 
            }}>Supplier Management</button>
          </Link>

          <Link to="/machinary">
            <button style={{ 
              backgroundColor: '#FFF1B9', 
              color: 'black', 
              padding: '30px', 
              marginBottom: '10px', 
              border: 'none', 
              borderRadius: '0px 20px 20px 20px', 
              boxShadow:"0 4px 8px rgba(0,0,0,0.3)",
              fontWeight: '900',
              fontSize: '15px' 
            }}>Machinery Management</button>
          </Link>
          {/* Add more buttons here */}
        </div>

        {/* Right side buttons */}
        <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    width: '100%', // Adjust width for responsiveness
    marginLeft: '40px',
    
  }}>
          <Link to="/production">
      <button style={{ 
        backgroundColor: '#FFF1B9', 
        color: 'black', 
        padding: '30px', // Reduced padding
        marginBottom: '50px', 
        border: 'none', 
        borderRadius: '20px 0px 20px 20px', 
        boxShadow:"0 4px 8px rgba(0,0,0,0.3)",
        fontSize: '15px', // Reduced font size
        fontWeight: '900',
        
        marginTop:'10px'
      }}>Production Management</button>
    </Link>

          <Link to="/">
            <button style={{ 
              backgroundColor: '#FFF1B9', 
              color: 'black', 
              padding: '30px', 
              marginBottom: '50px', 
              border: 'none', 
              borderRadius: '20px 0px 20px 20px', 
              boxShadow:"0 4px 8px rgba(0,0,0,0.3)",
              fontWeight: '900', 
              fontSize: '15px' 
            }}>Employee Management</button>
          </Link>

          <Link to="/stock">
            <button style={{ 
              backgroundColor: '#FFF1B9', 
              color: 'black', 
              padding: '30px', 
              marginBottom: '50px', 
              border: 'none', 
              borderRadius: '20px 0px 20px 20px', 
              boxShadow:"0 4px 8px rgba(0,0,0,0.3)",
              fontWeight: '900', 
              fontSize: '15px' 
            }}>Stock Management</button>
          </Link>

          <Link to="/distributor">
            <button style={{ 
              backgroundColor: '#FFF1B9', 
              color: 'black', 
              padding: '30px', 
              marginBottom: '10px', 
              border: 'none', 
              borderRadius: '20px 0px 20px 20px', 
              boxShadow:"0 4px 8px rgba(0,0,0,0.3)",
              fontWeight: '900', 
              fontSize: '15px' 
            }}>Distributor Management</button>
          </Link>
          {/* Add more buttons here */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
