import React,{useState,useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


function UpdateUsersh (){
    const {id} = useParams()
    const [names , setName] =useState()
    const [sid, setSid] =useState()
    const [materialname, setMaterialname] =useState()
    const [quantitiy, setQuantity] =useState()
    const [price , setPrice] =useState()
    const[date,setDate] =useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getUsersh/'+id)
        .then(result => {console.log(result)
            setName(result.data.names)
            setSid(result.data.sid)
            setMaterialname(result.data.materialname)
            setQuantity(result.data.quantitiy)
            setPrice(result.data.price )
            setDate(result.data.date)
            
        
        
        
        
        })
        .catch(err => console.log (err))

    },[] )







    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUsersh/"+id, {names,sid,materialname,quantitiy,price,date})
        .then(result => {
            console.log(result)
            navigate('/supplier')
        
        })

        .catch(err => console.log(err))

    }


    return(
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
              to="/supplier" 
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
             SUPPLIER DETAILS
            </Link>
          </li>
         
          <li style={{ marginRight: "40px" }}>
            <Link
              to="/material-details" 
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
              SUPPLIER ORDERS
            </Link>
          </li>

          <li style={{ marginRight: "40px" }}>
            <Link
              to="/material-details" 
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
              GENARATE REPORT
            </Link>
          </li>

         

         
        </ul>
      </nav>
<div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh",padding: "20px" ,fontFamily: 'Poppins, sans-serif' ,backgroundColor:"#FEF29B"}}>
<div style={{ display: "flex", width: "80%", boxShadow: "0 4px 8px rgba(0,0,0,0.3)", borderRadius: "10px", overflow: "hidden" }}>
        <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8f8f8" }}>

                <form onSubmit={Update}style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Update Order</h2>
                   
                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="names" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Name</label>
                        <input type="text" placeholder="Enter names" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        value={names}  onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div style={{ marginBottom:"2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="sid" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Sid</label>
                        <input type="number" maxLength="3" pattern="[A-Za-z0-9]*" // Allow only letters (both uppercase and lowercase) and numbers
        title="Please enter only letters and numbers for Sid" // Error message for unsupported characters
         placeholder="Enter Supplier id" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        value={sid}  onChange={(e) => setSid(e.target.value)}/>
                    </div>


                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                    <label htmlFor="materialname" style={{ width: "100px", marginRight: "10px",fontWeight: '700' }}>Materialname</label>
                     <select 
                    className="form-control" 
                     style={{ width: "100%" ,padding: "8px", margin: "5px 0 15px"}} 
                     value={materialname}  onChange={(e) => setMaterialname(e.target.value)}
                     required
                     >
                  <option value="">Select Material</option>
                  <option value="Mango">Mango</option>
                    <option value="Lime">Lime</option>
                    <option value="Passion">Passion</option>
                    <option value="Woodapple">Woodapple</option>
                    <option value="Pineapple">Pineapple</option>
                    <option value="Anoda">Anoda</option>
                     </select>
                    </div>





                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="quantitiy" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Quantitiy kg</label>
                        <input type="number" placeholder="Enter quantitiy" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        value={quantitiy}  onChange={(e) => setQuantity(e.target.value)}/>
                    </div>

                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="price" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Price Rs</label>
                        <input type="number" placeholder="Enter price" className="form-control" style={{ width: "100%" ,padding: "8px", margin: "5px 0 15px"}} 
                        value={price}  onChange={(e) => setPrice(e.target.value)}/>
                    </div>

                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="date" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Date</label>
                        <input type="date" placeholder="Enter date" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        value={date}  onChange={(e) => setDate(e.target.value)}/>
                    </div>

                    

                    <button style={{ marginLeft: "110px", backgroundColor: "black", color: "white", border: "none",  padding: "10px 20px", borderRadius: "5px" }}>Update</button>


                </form>

           </div>
           <div style={{ flex: 1, backgroundImage: "url('/image/b1.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
            {/* Optional text or additional styling can be added here */}
        </div>
           
        </div>
        </div>
</div>
    )




}

export default UpdateUsersh;