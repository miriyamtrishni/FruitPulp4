import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (

    <div style={{ 
      
      backgroundImage: 'url("/image/img28.jpg")', 
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

    {/* Main Content */}
    <div style={{ textAlign: 'left', marginLeft: '200px' }}>
      <h1 style={{ 
        color: 'black', 
        fontWeight: '700', 
        fontSize: '8rem', // Reduced font size
        marginBottom: '5px', 
        marginTop: '200px', 
        padding: '5px 20px', 
        borderRadius: '5px', 
        lineHeight: '1em', /* Adjust line height */
        fontFamily: 'Monospace', 

      }}>
        <span style={{color: 'black'}}>A</span>
    <span style={{color: '#F4BB29'}}>N</span>
    <span style={{color: 'black'}}>A</span>
    <span style={{color: '#F4BB29'}}>A</span>
    <span style={{color: 'black'}}>W</span>
    <span style={{color: '#F4BB29'}}>E</span>
    <span style={{color: 'black'}}>I</span>
      </h1>
      
      
      <p style={{ 
        fontSize: '1.1rem', 
        marginBottom: '20px', 
        lineHeight: '1.2em', /* Adjust line height */
        padding: '5px 20px',
        fontWeight: '750',
        marginTop: '5px',  
        fontFamily: 'Poppins, sans-serif', 
        
      }}>
        GARDEN FRESHNESS TO YOUR LIFE. NO ADDED<br/> WATER, NO FORTIFIED CHEMICALS, FREE FROM<br/>  PRESERVATIVES, 100% NATURAL FRUIT PULP
      
      </p>
      
      <Link to="/login">
        <button style={{ 
          backgroundColor: 'black', 
          color: 'white', 
          padding: '15px', 
          marginBottom: '50px', 
          border: 'none', 
          borderRadius: '0px 30px 30px 30px', 
          width: '200px', 
          fontSize: '1.5em',
          fontFamily: 'Monospace',
          marginLeft:'20px'
        }}>Get Started</button>
      </Link>

    </div>
</div>
  )


    
     
};

export default WelcomePage;
