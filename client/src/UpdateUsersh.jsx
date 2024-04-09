import React,{useState,useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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
<div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
           <div style={{ backgroundColor: "lightgreen", border: "1px solid black", borderRadius: "5px", padding: "20px" }}>

                <form onSubmit={Update}>
                    <h2>Update User</h2>
                   
                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="names" style={{ width: "80px", marginRight: "10px" }}>Name</label>
                        <input type="text" placeholder="Enter names" className="form-control" style={{ width: "100%" }} 
                        value={names}  onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="sid" style={{ width: "80px", marginRight: "10px" }}>Sid</label>
                        <input type="number" maxLength="3" pattern="[A-Za-z0-9]*" // Allow only letters (both uppercase and lowercase) and numbers
        title="Please enter only letters and numbers for Sid" // Error message for unsupported characters
         placeholder="Enter Supplier id" className="form-control" style={{ width: "100%" }} 
                        value={sid}  onChange={(e) => setSid(e.target.value)}/>
                    </div>


                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                    <label htmlFor="materialname" style={{ width: "80px", marginRight: "10px" }}>Materialname</label>
                     <select 
                    className="form-control" 
                     style={{ width: "100%" }} 
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





                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="quantitiy" style={{ width: "80px", marginRight: "10px" }}>Quantitiy</label>
                        <input type="number" placeholder="Enter quantitiy" className="form-control" style={{ width: "100%" }} 
                        value={quantitiy}  onChange={(e) => setQuantity(e.target.value)}/>
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="price" style={{ width: "80px", marginRight: "10px" }}>Price Rs</label>
                        <input type="number" placeholder="Enter price" className="form-control" style={{ width: "100%" }} 
                        value={price}  onChange={(e) => setPrice(e.target.value)}/>
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="date" style={{ width: "80px", marginRight: "10px" }}>Date</label>
                        <input type="date" placeholder="Enter date" className="form-control" style={{ width: "100%" }} 
                        value={date}  onChange={(e) => setDate(e.target.value)}/>
                    </div>

                    

                    <button style={{ marginLeft: "90px", backgroundColor: "blue", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Update</button>


                </form>

















           </div>
        </div>


    )




}

export default UpdateUsersh;