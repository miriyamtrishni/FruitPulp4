import  {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function UpdateMT () {
    const {id} = useParams()
    const [code, setCode] = useState('');
    const [namem, setName] = useState('');
    const [des, setDes] = useState('');
    const [qty, setQty] = useState('');
    const [type, setType] = useState('');
    const navigateM = useNavigate()


    useEffect(() => {
        axios.get('http://localhost:3001/getUserM/'+id)
            .then(result => {
                console.log(result)
                setCode(result.data.code)
                setName(result.data.namem)
                setDes(result.data.des)
                setQty(result.data.qty)
                setType(result.data.type)

            }) //display users
            .catch(err => console.log(err))


    }, [])

    const UpdateMT = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updatemt/"+id, {code, namem, des, qty, type})
            .then(result => {
                console.log(result)
                navigateM('/userMT')

            })
    }


        return (
            <div>
                <div style={{
                    backgroundImage: 'url("/image/im81.jpg")',
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
                                onMouseOver={(e) => (e.currentTarget.style.color = "white")} // Change text color on hover
                                onMouseOut={(e) => (e.currentTarget.style.color = "orange")} // Change text color on hover out
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
                                onMouseOver={(e) => (e.currentTarget.style.color = "white")} // Change text color on hover
                                onMouseOut={(e) => (e.currentTarget.style.color = "orange")} // Change text color on hover out
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
                    backgroundColor: "lightgreen",
                    border: "1px solid black",
                    borderRadius: "5px",
                    padding: "20px"
                }}>


                    <form onSubmit={UpdateMT}>
                        <h2>Update Item</h2>
                        <div style={{marginBottom: "10px", display: "flex", alignItems: "center"}}>
                            <label htmlFor="code" style={{width: "80px", marginRight: "10px"}}>Code</label>
                            <input type="text" placeholder='Enter item code' className="form-control" value={code}
                                   style={{width: "100%"}} onChange={(e) => setCode(e.target.value)}></input>
                        </div>

                        <div style={{marginBottom: "10px", display: "flex", alignItems: "center"}}>
                            <label htmlFor="namem" style={{width: "80px", marginRight: "10px"}}>Name</label>
                            <input type="text" placeholder='Enter item name' className='form-control' value={namem}
                                   style={{width: "100%"}} onChange={(e) => setName(e.target.value)}></input>
                        </div>

                        <div style={{marginBottom: "10px", display: "flex", alignItems: "center"}}>
                            <label htmlFor="des" style={{width: "80px", marginRight: "10px"}}>Description</label>
                            <input type="text" placeholder='Enter item Description' className='form-control' value={des}
                                   style={{width: "100%"}} onChange={e => setDes(e.target.value)}></input>
                        </div>

                        <div style={{marginBottom: "10px", display: "flex", alignItems: "center"}}>
                            <label htmlFor="qty" style={{width: "80px", marginRight: "10px"}}>Quantity</label>
                            <input type="text" placeholder='Enter item Quantity' className='form-control' value={qty}
                                   style={{width: "100%"}} onChange={(e) => setQty(e.target.value)}></input>
                        </div>

                        <div style={{marginBottom: "10px", display: "flex", alignItems: "center"}}>
                            <label htmlFor="type" style={{width: "80px", marginRight: "10px"}}>Type</label>
                            <select
                                className="form-control"
                                style={{width: "100%"}}
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                //onChange={(e) => setType(e.target.value)}
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
                                onMouseOut={(e) => (e.currentTarget.style.color = "orange")}> Update </button>


                    </form>

                 </div>
                </div>
                </div>
            </div>
        )
    }


export default UpdateMT;