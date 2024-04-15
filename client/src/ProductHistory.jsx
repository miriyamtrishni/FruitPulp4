import React from 'react'
import { Link } from "react-router-dom";
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import { GrPlan } from "react-icons/gr";
 import { GiFruitBowl } from "react-icons/gi";
 import { BiSolidError } from "react-icons/bi";

function ProductHistory() {

    const data = [
        {
          name: 'Watermelon',
          Y2023: 6000,
          Y2022:7000,
          amt: 2400,
        },
        {
          name: 'Mango',
          Y2023: 5000,
          Y2022:4500,
          amt: 2210,
        },
        {
          name: 'Apple',
          Y2023: 2000,
          Y2022:1000,
          amt: 2290,
        },
        {
          name: 'Woodapple',
          Y2023: 3000,
          Y2022:3500,
          amt: 2000,
        },
        {
          name: 'Anoda',
          Y2023: 2700,
          Y2022:3000,
          amt: 2181,
        },
        {
          name: 'Passionfruit',
          Y2023: 2000,
          Y2022:4000,
          amt: 2500,
        },
        {
          name: 'Beli',
          Y2023: 1000,
          Y2022:1500,
          amt: 2100,
        },
      ];

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
  
      const barColors =['#F50E0C','#F5D638','#F5F3C0','#F58B6D','#76F57B','#F5F232','#ADF5D1']

  return (
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





    <main className='main-container'>
   
    
    <h3 style={{ color: "black", marginRight: "10px" }}>PRODUCTION HISTORY</h3>
    

    
  
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h1>Best Selling Products</h1>
                    
                    
                   
                </div>
                <h3>Watermelon</h3>
                <h3>Mango</h3>
            </div>
           

         </div>
          
        

        <div className='charts'>
      
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,

               
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Y2023" fill="#3cb371" />
                <Bar dataKey="Y2022" fill="#ffa500" />
              
                </BarChart>
            </ResponsiveContainer>

          

        </div>
        
    </main>

    </div>
   
   
</div>
   
    
  )
}

export default ProductHistory
