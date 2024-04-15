import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



function Machines() {
  const [machines, setMachines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");//search
  const [searchResults, setSearchResults] = useState([]);//search
  



  useEffect(() => {
    axios.get("http://localhost:3001/machinary").then((result) => setMachines(result.data)).catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/deleteUserla/" + id).then((res) => {
      console.log(res);
      window.location.reload();
    }).catch((err) => console.log(err));
  };


  // Function to filter users based on search term
  const handleSearch = () => {
    const results = machines.filter((machine) => machine.codel === searchTerm);
    setSearchResults(results);
  };

  // Function to clear search results
  const clearSearch = () => {
    setSearchResults([]);
    setSearchTerm("");
  };




  

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
          paddingLeft: "700px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
      >
        HOME
      </Link>
    </li>
    <li style={{ marginRight: "40px" }}>
      <Link
        to="/machinary"
        style={{
          color: "black",
          textDecoration: "none",
          fontWeight: "bold",
          paddingRight: "20px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
      >
        TECHNICION DETAILS
      </Link>
    </li>
    <li style={{ marginRight: "40px" }}>
      <Link
        to="/machinary"
        style={{
          color: "black",
          textDecoration: "none",
          fontWeight: "bold",
          paddingRight: "20px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
      >
       REPAIR DETAILS
      </Link>
    </li>
    <li>
      <Link
        to="/machines"
        style={{
          color: "black",
          textDecoration: "none",
          fontWeight: "bold",
          paddingRight: "50px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
      >
        GENERATE REPORT
      </Link>
    </li>
  </ul>
</nav>





      <div style={{ display:"flex", justifyContent: "center", alignItems: "center", minHeight:"100vh",fontFamily: 'Poppins, sans-serif',backgroundColor:"#FEF29B" }}>
        <div style={{ border: "none", borderRadius: "5px", height:"90vh",width: '90vw',boxShadow: "0 4px 8px rgba(0,0,0,0.3)",backgroundColor:"#ffffff" }}>
        
          <Link to="/createla" style={{ backgroundColor: "black", color: "white", border: "none", padding: "15px", borderRadius: "5px", textDecoration: "none",marginBottom: "10px", display: "inline-block",marginLeft:"10px",marginTop:"20px" }}>ADD +</Link>
         
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by Code" style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc", marginLeft: "5px", width: "200px" }}/>
          <button onClick={handleSearch}style={{ backgroundColor: "blue", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", marginLeft: "10px", cursor: "pointer" }}>Search</button>
          {searchResults.length > 0 ? (
            <button onClick={clearSearch}style={{ backgroundColor: "red", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", marginLeft: "10px", cursor: "pointer" }}>Clear Search</button>
          ) : null}
          <table  id="machineTable" style={{ width: "100%", textAlign: "center", borderCollapse: "collapse", marginRight:"80px"}}>
            <thead>
              <tr style={{ border: "none",background: "#B2BEB5" }}>
                <th style={{ padding: "10px", border: "none",width: "10%"   }}> Name </th>
                <th style={{ padding: "10px", border: "none",width: "10%"  }}> Machine Code </th>
                <th style={{ padding: "10px", border: "none",width: "20%"  }}> Date </th>
                <th style={{ padding: "10px", border: "none",width: "20%"  }}>Return Date </th>
                <th style={{ padding: "10px", border: "none",width: "10%"   }}> Price Rs </th>
                <th style={{ padding: "10px", border: "none",width: "10%" }}> Repair Status </th>
                <th style={{ padding: "10px", border: "none" ,width: "20%"}}> Action </th>
              </tr>
            </thead>
            <tbody>
              { (searchResults.length > 0 ? searchResults :machines).map((machine)  => {
                return (
                  <tr style={{ border: "none" ,height: "50px",fontWeight: "bold"}} key={machine._id}>
                    <td style={{ border: "none" }}>{machine.namel}</td>
                    <td style={{ border: "none" }}>{machine.codel}</td>
                    <td style={{ border: "none" }}>{machine.datel}</td>
                    <td style={{ border: "none"  }}>{machine.returndate}</td>
                    <td style={{ border: "none"  }}>{machine.pricel}</td>
                    <td style={{ border: "none" }}>{machine.statusl}</td>
                    
                    <td >
                      
                      <Link to={`/updatela/${machine._id}`} style={{ backgroundColor: "yellow", color: "black", border: "none", padding: "10px 10px", borderRadius: "5px", textDecoration: "none",fontWeight: "bold", }}>Update</Link>
                      <button style={{ marginLeft: "5px", backgroundColor: "red", color: "white", border: "none", padding: "11px 15px", borderRadius: "5px", textDecoration: "none" ,fontWeight: "bold",}} onClick={() => handleDelete(machine._id)}>Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Machines;
