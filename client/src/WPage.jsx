import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    
    <div style={{ 
      
      backgroundImage: 'url("/image/img11.jpg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      position: 'relative', /* Set position to relative for absolute positioning */
      width: '100vw', /* Set width to 100% of viewport width */
      height: '98vh', /* Set height to 100% of viewport height */
      display: 'flex', 
      flexDirection: 'column', /* Stack items vertically */
      justifyContent: 'flex-start', /* Align items at the top */
      alignItems: 'flex-start', /* Align items to the left */
      color: 'black', 
      fontWeight: 'bold', 
      fontFamily: 'Poppins, sans-serif', 
      textAlign: 'center',
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
      <a href="/home" style={{ marginRight: '50px', color: 'black', textDecoration: 'none' }}>Home</a>
      <a href="/login" style={{ marginRight: '50px', color: 'black', textDecoration: 'none' }}>Login</a>
      <a href="/functions" style={{ marginRight: '50px',color: 'black', textDecoration: 'none' }}>Functions</a>
      <a href="/other" style={{ marginRight: '50px',color: 'black', textDecoration: 'none' }}>Other</a>
      <i class="fas fa-bars" style={{ marginRight: '100px',color: 'black', fontSize: '15px' }}></i>
    </div>

    {/* Fruit Pulp Text */}
    <div style={{ 
      position: 'absolute', 
      top: '20px', 
      left: '20px',
      fontSize: '20px', 
      fontWeight: '900', 
      fontFamily: 'Poppins, sans-serif', 
      color: '#F4BB29',
      marginLeft:'20px'
    }}>
      FRUIT PULP
    </div>

    {/* Main Content */}
    <div style={{ textAlign: 'left', marginLeft: '200px' }}>
      <h1 style={{ 
        color: 'black', 
        fontWeight: 'bold', 
        fontSize: '6em', // Reduced font size
        marginBottom: '5px', 
        marginTop: '200px', 
        padding: '5px 20px', 
        borderRadius: '5px', 
        lineHeight: '1em', /* Adjust line height */
      }}>
        ANAAWEI
      </h1>
      <p style={{ 
        fontSize: '2em', 
        marginBottom: '20px', 
        lineHeight: '1.2em', /* Adjust line height */
        padding: '5px 20px',
        fontWeight: '900', 
      }}>
        GARDEN FRESHNESS <br/> TO YOUR LIFE
      </p>
      <p style={{ 
        fontSize: '1em', 
        marginBottom: '20px', 
        lineHeight: '1.2em', /* Adjust line height */
        padding: '5px 20px',
        fontWeight: '900', 
      }}>
        NO ADDED WATER, NO FORTIFIED CHEMICALS, <br/> FREE FROM PRESERVATIVES,<br/> 100% NATURAL FRUIT PULP............
      </p>
      <Link to="/HomePage">
        <button style={{ 
          backgroundColor: 'black', 
          color: 'white', 
          padding: '15px', 
          marginBottom: '50px', 
          border: 'none', 
          borderRadius: '10px', 
          width: '200px', 
          fontSize: '1.2em',
          fontFamily: 'Poppins, sans-serif',
          marginLeft:'70px'
        }}>Get Started</button>
      </Link>
    </div>
</div>
  );
};

export default WelcomePage;
