import {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function CreateMT(){

    const[code,setCode] = useState()
    const[namem,setName] = useState()
    const[des,setDes] = useState()
    const[qty,setQty] = useState()
    const[type,setType] = useState()
    const navigateM = useNavigate()

    const Submit = (m) =>{
        m.preventDefault()
        axios.post("http://localhost:3001/CreateMT" , {code,namem,des,qty,type})
            .then(result => {
                console.log(result)
                navigateM('/userMT')   //submit link to the user page
            })
            .catch(err => console.log(err))
    }

    return (

        <div>
            <div style={{
                backgroundImage: 'url("/image/im80.jpg")',
                backgroundSize: 'cover',

            }}>

                <nav style={{backgroundColor: "black", padding: "10px 0", width: "100%", fontSize: "16px"}}>
                    <ul style={{listStyleType: "none", margin: 0, padding: 0, display: "flex", justifyContent: "center"}}>
                        <li style={{marginRight: "40px"}}>
                            <Link
                                to="/HomePage"
                                style={{
                                    color: "orange",
                                    textDecoration: "none",
                                    fontWeight: "bold",
                                    paddingRight: "10px",
                                    transition: "all 0.3s ease", // Hover transition
                                }}
                                onMouseOver={(m) => (m.currentTarget.style.color = "white")} // Change text color on hover
                                onMouseOut={(m) => (m.currentTarget.style.color = "orange")} // Change text color on hover out
                            >
                                Home
                            </Link>
                        </li>
                        <li style={{marginRight: "40px"}}>
                            <Link
                                to="/usermt"
                                style={{
                                    color: "orange",
                                    textDecoration: "none",
                                    fontWeight: "bold",
                                    paddingRight: "10px",
                                    transition: "all 0.3s ease", // Hover transition
                                }}
                                onMouseOver={(m) => (m.currentTarget.style.color = "white")} // Change text color on hover
                                onMouseOut={(m) => (m.currentTarget.style.color = "orange")} // Change text color on hover out
                            >
                                Item Details
                            </Link>
                        </li>
                        <li style={{marginRight: "40px"}}>
                            <Link
                                to="/usermt"
                                style={{
                                    color: "orange",
                                    textDecoration: "none",
                                    fontWeight: "bold",
                                    paddingRight: "10px",
                                    transition: "all 0.3s ease", // Hover transition
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.color = "white")} // Change text color on hover
                                onMouseOut={(e) => (e.currentTarget.style.color = "orange")} // Change text color on hover out
                            >
                                Stock Movements
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/usermt"
                                style={{
                                    color: "orange",
                                    textDecoration: "none",
                                    fontWeight: "bold",
                                    paddingRight: "10px",
                                    transition: "all 0.3s ease", // Hover transition
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.color = "white")} // Change text color on hover
                                onMouseOut={(e) => (e.currentTarget.style.color = "orange")} // Change text color on hover out
                            >
                                Generate Report
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
                    <div style={{
                        backgroundColor: "palevioletred",
                        border: "1px solid black",
                        borderRadius: "5px",
                        padding: "20px"
                    }}>


                        <form onSubmit={Submit}>
                            <h2>Add Item</h2>
                            <div style={{marginBottom: "10px", display: "flex", alignItems: "center"}}>
                                <label htmlFor="code" style={{width: "80px", marginRight: "10px"}}>Code</label>
                                <input type="text" placeholder='Enter item code'
                                       onChange={(m) => setCode(m.target.value)}></input>
                            </div>

                            <div style={{marginBottom: "10px", display: "flex", alignItems: "center"}}>
                                <label htmlFor="namem" style={{width: "80px", marginRight: "10px"}}>Name</label>
                                <input type="text" placeholder='Enter item name'
                                       onChange={(m) => setName(m.target.value)}></input>
                            </div>

                            <div style={{marginBottom: "10px", display: "flex", alignItems: "center"}}>
                                <label htmlFor="des" style={{width: "80px", marginRight: "10px"}}>Description</label>
                                <input type="text" placeholder='Enter item Description'
                                       onChange={(m) => setDes(m.target.value)}></input>
                            </div>

                            <div style={{marginBottom: "10px", display: "flex", alignItems: "center"}}>
                                <label htmlFor="qty" style={{width: "80px", marginRight: "10px"}}>Quantity</label>
                                <input type="text" placeholder='Enter item Quantity' className='form-control'
                                       onChange={(m) => setQty(m.target.value)}></input>
                            </div>

                            <div style={{marginBottom: "10px", display: "flex", alignItems: "center"}}>
                                <label htmlFor="type" style={{width: "80px", marginRight: "40px"}}>Type</label>
                                <select
                                    className="form-control"
                                    style={{width: "100%"}}
                                    onChange={(m) => setType(m.target.value)}
                                    required
                                >
                                    <option value="">Select Type</option>
                                    <option value="Raw">Raw product</option>
                                    <option value="Finished">Finished product</option>
                                    <option value="Packing">Packing material</option>
                                </select>
                            </div>

                            <button style={{
                                marginLeft: "90px",
                                backgroundColor: "lightcoral",
                                color: "white",
                                border: "none",
                                padding: "10px 20px",
                                borderRadius: "5px"
                            }}
                                    onMouseOver={(e) => (e.currentTarget.style.color = "white")} // Change text color on hover
                                    onMouseOut={(e) => (e.currentTarget.style.color = "orange")}>
                                Submit</button>


                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateMT;