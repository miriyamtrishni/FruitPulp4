import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUsersh (){
    const [names , setName] =useState()
    const [sid, setSid] =useState()
    const [materialname, setMaterialname] =useState()
    const [quantitiy, setQuantity] =useState()
    const [price , setPrice] =useState()
    const[date,setDate] =useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUsersh", {names,sid, materialname, quantitiy,price,date})
        .then(result => {
            console.log(result)
            navigate('/supplier')
        
        })

        .catch(err => console.log(err))



    }


    return(
        
        
    

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh",padding: "20px" ,fontFamily: 'Poppins, sans-serif',backgroundColor:"#FEF29B"}}>
            
 
            <div style={{ display: "flex", width: "80%", boxShadow: "0 4px 8px rgba(0,0,0,0.3)", borderRadius: "10px", overflow: "hidden" }}>
        <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8f8f8" }}>
                <form onSubmit={Submit} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Order</h2>
                   
                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="names" style={{ width: "130px", marginRight: "10px",fontWeight: '700'  }}>Name</label>
                        <input type="text" placeholder="Enter names" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        
                        onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="sid" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>SID</label>
                        <input type="text" placeholder="Enter Supplier id" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        maxLength="3" pattern="[A-Za-z0-9]*" // Allow only letters (both uppercase and lowercase) and numbers
                        title="Please enter only letters and numbers for Sid"
                        onChange={(e) => setSid(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                    <label htmlFor="materialname" style={{ width: "100px", marginRight: "10px",fontWeight: '700' }}>Materialname</label>
                     <select 
                    className="form-control" 
                     style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                     onChange={(e) => setMaterialname(e.target.value)} 
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


                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="quantitiy" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Quantitiy</label>
                        <input type="number" placeholder="Enter quantitiy" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        
                        onChange={(e) => setQuantity(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="price" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Price Rs</label>
                        <input type="number" placeholder="Enter price" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        
                        onChange={(e) => setPrice(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="date" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Date</label>
                        <input type="date" placeholder="Enter date" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        
                        onChange={(e) => setDate(e.target.value)} required />
                    </div>

                    

                    <button style={{ marginLeft: "110px", backgroundColor: "black", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Submit</button>


                </form>
                </div>

                <div style={{ flex: 1, backgroundImage: "url('/image/image11.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            {/* Optional text or additional styling can be added here */}
        </div>
        </div>

</div>

    )




}

export default CreateUsersh;