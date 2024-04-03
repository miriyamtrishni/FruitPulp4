import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div style={{ 
      backgroundImage: 'url("/image/im4.jpg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      color: 'black', 
      fontWeight: 'bold', 
      textAlign: 'center',
      
    }}>
      <div>
        <h1 style={{ 
          color: 'black', 
          fontWeight: 'bold', 
          fontSize: '8em', // Increased font size
          marginBottom: '20px', 
          marginTop: '0', 
          textDecoration: 'underline',
          backgroundColor: 'rgba(255, 255, 255, 0.5)', 
          padding: '10px 20px', 
          borderRadius: '5px', 
        }}>
          Anaawei
        </h1>
        <div>
          <Link to="/HomePage">
            <button style={{ 
              backgroundColor: 'black', 
              color: 'orange', 
              padding: '15px', 
              marginBottom: '10px', 
              border: 'none', 
              borderRadius: '5px', 
              width: '200px', 
              fontSize: '1.2em' 
            }}>Click Here</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
