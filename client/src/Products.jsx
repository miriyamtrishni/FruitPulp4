import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App.css";


import ProductReport from "./ProductReport";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((result) => setProducts(result.data)).catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/deleteProduct/" + id).then((res) => {
      console.log(res);
      window.location.reload();
    }).catch((err) => console.log(err));
  };


 
  //Function to filter products based on search term
const handleSearch = () => {
  const results = products.filter((product) => product.fruittype === searchTerm);
  setSearchResults(results);
};


  //Function to clear search
  const clearSearch = () => {
  setSearchResults([]);
  setSearchTerm("");


  };
  

  return (

    <div className="products-container"> 
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
        to="/"
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





      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh",fontFamily: 'Poppins, sans-serif',backgroundColor:"#FEF29B" }}>
      <div style={{ border: "none", borderRadius: "5px", height:"90vh",width: '90vw',boxShadow: "0 4px 8px rgba(0,0,0,0.3)",backgroundColor:"#ffffff" }}>
          <Link to="/createproduct " style={{ backgroundColor: "black", color: "white", border: "none", padding: "15px", borderRadius: "5px", textDecoration: "none",marginBottom: "10px", display: "inline-block",marginLeft:"10px",marginTop:"20px" }}>Add Product+</Link>
          
         <input type ="text" value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by fruit type"style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc", marginLeft: "5px", width: "200px" }} />
         <button onClick={handleSearch}style={{ backgroundColor: "blue", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", marginLeft: "10px", cursor: "pointer" }}>Search</button>
         {searchResults.length > 0 ? (
  
            <button onClick={clearSearch}style={{ backgroundColor: "red", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", marginLeft: "10px", cursor: "pointer" }}>Clear Search</button>

         ):null


        }

          <table style={{ width: "100%", textAlign: "center",  borderCollapse: "collapse", marginRight:"80px" }}>
            <thead>
              <tr style={{ border: "none",background: "#B2BEB5" }}>
                <th style={{ padding: "10px",  border: "none",width: "15%" }}> FruitType </th>
                <th style={{ padding: "10px",  border: "none",width: "15%"}}> ManufactureDate</th>
                <th style={{ padding: "10px",  border: "none",width: "15%" }}> ExpireDate </th>
                <th style={{ padding: "10px",  border: "none",width: "15%" }}> Quantity </th>
                <th style={{ padding: "10px",  border: "none",width: "15%" }}> Price</th>
                <th style={{ padding: "10px",  border: "none",width: "15%" }}> Actions</th>
            
              </tr>
            </thead>
            <tbody>
              {(searchResults.length > 0 ? searchResults : products).map((product) => {
                return (
                  <tr style={{ border: "none" ,height: "50px",fontWeight: "bold" }} key={product._id}>
                    <td style={{ border: "none" }}>{product.fruittype}</td>
                    <td style={{ border: "none" }}>{product.manufacturedate}</td>
                    <td style={{ border: "none" }}>{product.expiredate}</td>
                    <td style={{ border: "none" }}>{product.quantity}</td>
                    <td style={{ border: "none" }}>{product.price}</td>
                    
                    <td>
                      <Link to={`/updateproduct/${product._id}`} style={{ backgroundColor: "yellow", color: "black", border: "none", padding: "10px 10px", borderRadius: "5px", textDecoration: "none",fontWeight: "bold", }}>Update</Link>
                      <button style={{ marginLeft: "5px", backgroundColor: "red", color: "white", border: "none",  padding: "11px 15px", borderRadius: "5px", textDecoration: "none" ,fontWeight: "bold", }} onClick={() => handleDelete(product._id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Products;
