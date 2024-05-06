import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ 
      backgroundImage: 'url("/image/img2.jpg")', 
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
    width: '80%', // Adjust width for responsiveness
    
  }}>
          <Link to="/financial">
      <button style={{ 
        backgroundColor: '#F4BB29', 
        color: 'black', 
        padding: '30px', // Reduced padding
        marginBottom: '50px', 
        border: 'none', 
        borderRadius: '5px', 
        fontSize: '15px', // Reduced font size
        fontWeight: '900',
        
        marginTop:'10px'
      }}>Financial Management</button>
    </Link>
          <Link to="/order">
            <button style={{ 
              backgroundColor: '#F4BB29', 
              color: 'black', 
              padding: '30px', 
              marginBottom: '50px', 
              border: 'none', 
              borderRadius: '5px', 
              fontWeight: '900',
              fontSize: '15px' 
            }}>Order Management</button>
          </Link>

          <Link to="/supplier">
            <button style={{ 
              backgroundColor: '#F4BB29', 
              color: 'black', 
              padding: '30px', 
              marginBottom: '50px', 
              border: 'none', 
              borderRadius: '5px', 
              fontWeight: '900',
              fontSize: '15px' 
            }}>Supplier Management</button>
          </Link>

          <Link to="/machinary">
            <button style={{ 
              backgroundColor: '#F4BB29', 
              color: 'black', 
              padding: '30px', 
              marginBottom: '10px', 
              border: 'none', 
              borderRadius: '5px', 
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
    width: '80%', // Adjust width for responsiveness
    marginLeft: '50px'
  }}>
          <Link to="/Productdashboard">
      <button style={{ 
        backgroundColor: '#F4BB29', 
        color: 'black', 
        padding: '30px', // Reduced padding
        marginBottom: '50px', 
        border: 'none', 
        borderRadius: '5px', 
        fontSize: '15px', // Reduced font size
        fontWeight: '900',
        
        marginTop:'10px'
      }}>Production Management</button>
    </Link>

          <Link to="/">
            <button style={{ 
              backgroundColor: '#F4BB29', 
              color: 'black', 
              padding: '30px', 
              marginBottom: '50px', 
              border: 'none', 
              borderRadius: '5px', 
              fontWeight: '900', 
              fontSize: '15px' 
            }}>Employee Management</button>
          </Link>

          <Link to="/stock">
            <button style={{ 
              backgroundColor: '#F4BB29', 
              color: 'black', 
              padding: '30px', 
              marginBottom: '50px', 
              border: 'none', 
              borderRadius: '5px', 
              fontWeight: '900', 
              fontSize: '15px' 
            }}>Stock Management</button>
          </Link>

          <Link to="/distributor">
            <button style={{ 
              backgroundColor: '#F4BB29', 
              color: 'black', 
              padding: '30px', 
              marginBottom: '10px', 
              border: 'none', 
              borderRadius: '5px', 
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

