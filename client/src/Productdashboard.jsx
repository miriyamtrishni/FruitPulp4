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

function Homedashboard() {

    const data = [
        {
          name: 'Watermelon',
          Today: 500,
          Yesterday:400,
          amt: 2400,
        },
        {
          name: 'Mango',
          Today: 200,
          Yesterday:300,
          amt: 2210,
        },
        {
          name: 'Apple',
          Today: 100,
          Yesterday:150,
          amt: 2290,
        },
        {
          name: 'Woodapple',
          Today: 400,
          Yesterday:500,
          amt: 2000,
        },
        {
          name: 'Anoda',
          Today: 60,
          Yesterday:90,
          amt: 2181,
        },
        {
          name: 'Passionfruit',
          Today: 200,
          Yesterday:150,
          amt: 2500,
        },
        {
          name: 'Beli',
          Today: 50,
          Yesterday:20,
          amt: 2100,
        },

        {
            name: 'Orange',
            Today: 600,
            Yesterday:300,
            amt: 2100,
          },


      ];


      const barColors =['#dc143c','#ffff00','#800000','#8b4513','#2e8b57','#ffffe0','#00ff00','#ffa500']

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
            onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
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

   
  

    <main className='main-container'>
        <div className='main-title'>
            <h3 style={{ color: "black" }}>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRODUCTS COMPLETED TODAY</h3>
                    <BsFillArchiveFill className='card_icon'/>
                   
                </div>
                <h1>800</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PLAN FOR TODAY</h3>
                   
                <GrPlan className='card_icon'/>
                </div>
                <h1>700</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Yeild</h3>
                 
                    <GiFruitBowl  className='card_icon'/>
                </div>
                <h1>80%</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>DEFECTS</h3>
                    <BiSolidError className='card_icon'/>
                    
                </div>
                <h1>1</h1>
                
            </div>
        </div>


           
           <Link to="/createschedule " style={{ backgroundColor: "black", color: "white", border: "none", padding: "15px", borderRadius: "5px", textDecoration: "none",marginBottom: "10px", display: "inline-block",marginLeft:"10px",marginTop:"20px" }}>Production Schedule</Link>

           <h3 style={{ color: "black" }}>Today's Production</h3>


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
                <Bar dataKey="Today" fill="#ff8c00" />
              
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
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
                <Line type="monotone" dataKey="Yesterday" stroke="#006400" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Today" stroke="#ff8c00" />
                </LineChart>
            </ResponsiveContainer>

        </div>
        
    </main>

    </div>

    
    
  )
}

export default Homedashboard