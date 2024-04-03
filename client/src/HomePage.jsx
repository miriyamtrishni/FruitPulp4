import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ 
      backgroundImage: 'url("/image/background.jpg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      color: 'black', 
      fontWeight: 'bold', 
      textAlign: 'center',
      backdropFilter: 'blur(8px)', // Add blur effect
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '80%', 
        maxWidth: '1200px' 
      }}>
       

        {/* Left side buttons */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'left', 
          width: '50%' 
        }}>
          <Link to="/financial">
            <button style={{ 
              backgroundColor: 'black', 
              color: 'orange', 
              padding: '15px', 
              marginBottom: '10px', 
              border: 'none', 
              borderRadius: '5px', 
              width: '100%', 
              fontSize: '1.2em' 
            }}>Financial Management</button>
          </Link>
          <Link to="/order">
            <button style={{ 
              backgroundColor: 'black', 
              color: 'orange', 
              padding: '15px', 
              marginBottom: '10px', 
              border: 'none', 
              borderRadius: '5px', 
              width: '100%', 
              fontSize: '1.2em' 
            }}>Order Management</button>
          </Link>

          <Link to="/">
            <button style={{ 
              backgroundColor: 'black', 
              color: 'orange', 
              padding: '15px', 
              marginBottom: '10px', 
              border: 'none', 
              borderRadius: '5px', 
              width: '100%', 
              fontSize: '1.2em' 
            }}>Supplier Management</button>
          </Link>

          <Link to="/machinary">
            <button style={{ 
              backgroundColor: 'black', 
              color: 'orange', 
              padding: '15px', 
              marginBottom: '10px', 
              border: 'none', 
              borderRadius: '5px', 
              width: '100%', 
              fontSize: '1.2em' 
            }}>Machinery Management</button>
          </Link>
          {/* Add more buttons here */}
        </div>

        {/* Right side buttons */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'wright', 
          width: '50%' 
        }}>
          <Link to="/production">
            <button style={{ 
              backgroundColor: 'black', 
              color: 'orange', 
              padding: '15px', 
              marginBottom: '10px', 
              border: 'none', 
              borderRadius: '5px', 
              width: '100%', 
              fontSize: '1.2em' 
            }}>Production Management</button>
          </Link>

          <Link to="/">
            <button style={{ 
              backgroundColor: 'black', 
              color: 'orange', 
              padding: '15px', 
              marginBottom: '10px', 
              border: 'none', 
              borderRadius: '5px', 
              width: '100%', 
              fontSize: '1.2em' 
            }}>Employee Management</button>
          </Link>

          <Link to="/production">
            <button style={{ 
              backgroundColor: 'black', 
              color: 'orange', 
              padding: '15px', 
              marginBottom: '10px', 
              border: 'none', 
              borderRadius: '5px', 
              width: '100%', 
              fontSize: '1.2em' 
            }}>Stock Management</button>
          </Link>

          <Link to="/production">
            <button style={{ 
              backgroundColor: 'black', 
              color: 'orange', 
              padding: '15px', 
              marginBottom: '10px', 
              border: 'none', 
              borderRadius: '5px', 
              width: '100%', 
              fontSize: '1.2em' 
            }}>Distributor Management</button>
          </Link>
          {/* Add more buttons here */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
