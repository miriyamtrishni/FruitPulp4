import  {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function UpdateMT () {
    const {id} = useParams()
    const [code, setcode] = useState('');
    const [namem, setnamem] = useState('');
    const [des, setdes] = useState('');
    const [qty, setqty] = useState('');
    const [type, settype] = useState('');
    const navigateM = useNavigate()


    useEffect(() => {
        axios.get('http://localhost:3001/getstockM/'+id)
            .then(result => {
                console.log(result)
                setcode(result.data.code)
                setnamem(result.data.namem)
                setdes(result.data.des)
                setqty(result.data.qty)
                settype(result.data.type)

            }) //display users
            .catch(err => console.log(err))


    }, [])

    const UpdateMT = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updatemt/"+id, {code, namem, des, qty, type})
            .then(result => {
                console.log(result)
                navigateM('/stocksmt')

            })
    }


        return (
            <div>
                <div style={{
                    backgroundImage: 'url("/image/im81.jpg")',
                    backgroundSize: 'cover',

                }}>

                    <nav style={{
                        backgroundColor: "white",
                        padding: "10px 0",
                        width: "100%",
                        fontSize: "15px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '900',
                    }}>
                        <ul style={{
                            listStyleType: "none",
                            margin: 0,
                            padding: 0,
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <li style={{marginRight: "40px"}}>
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    left: '20px',
                                    fontSize: '15px',
                                    fontWeight: '1000',
                                    fontFamily: 'Poppins, sans-serif',

                                    color: '#F4BB29',
                                    marginLeft: '20px'
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
                            <li style={{marginRight: "40px"}}>
                                <Link
                                    to="/stocksmt"
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
                                    ITEM DETAILS
                                </Link>
                            </li>
                            <li style={{marginRight: "40px"}}>
                                <Link
                                    to="/createmt"
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
                                    ADD NEW ITEM
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/stock-details"
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
                </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "100vh",
                        padding: "20px",
                        fontFamily: 'Poppins, sans-serif',
                        backgroundColor: "#FEF29B"
                    }}>
                        <div style={{
                            display: "flex",
                            width: "80%",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                            borderRadius: "10px",
                            overflow: "hidden"
                        }}>
                            <div style={{flex: 1, padding: "20px", backgroundColor: "#f8f8f8"}}>

                                <form onSubmit={UpdateMT}
                                      style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                    <h2 style={{textAlign: "center", marginBottom: "20px"}}>Update Item</h2>
                                    <div style={{marginBottom: "2px", display: "flex", alignItems: "center"}}>
                                        <label htmlFor="code" style={{
                                            width: "130px",
                                            marginRight: "10px",
                                            fontWeight: '700'
                                        }}>Code</label>
                                        <input type="text" placeholder='Enter item code' className="form-control"
                                               value={code}
                                               style={{width: "100%", padding: "8px", margin: "5px 0 15px"}}
                                               onChange={(e) => setcode(e.target.value)}></input>
                                    </div>

                                    <div style={{marginBottom: "2px", display: "flex", alignItems: "center"}}>
                                        <label htmlFor="code" style={{
                                            width: "130px",
                                            marginRight: "10px",
                                            fontWeight: '700'
                                        }}>Name</label>
                                        <input type="text" placeholder='Enter item code' className="form-control"
                                               value={namem}
                                               style={{width: "100%", padding: "8px", margin: "5px 0 15px"}}
                                               onChange={(e) => setnamem(e.target.value)}></input>
                                    </div>


                                    <div style={{marginBottom: "2px", display: "flex", alignItems: "center"}}>
                                        <label htmlFor="code" style={{
                                            width: "130px",
                                            marginRight: "10px",
                                            fontWeight: '700'
                                        }}>Stock movement</label>
                                        <select
                                            className="form-control"

                                            value={type}
                                            style={{width: "100%", padding: "8px", margin: "5px 0 15px"}}
                                            onChange={(e) => setdes(e.target.value)}
                                            //onChange={(e) => setType(e.target.value)}
                                            required
                                        >
                                            <option value="type">select stock movement type</option>
                                            <option value="Raw">Add</option>
                                            <option value="use">Use</option>
                                            <option value="waste">waste</option>
                                            <option value="produce">produce</option>
                                        </select>
                                    </div>

                                    <div style={{marginBottom: "2px", display: "flex", alignItems: "center"}}>
                                        <label htmlFor="code" style={{
                                            width: "130px",
                                            marginRight: "10px",
                                            fontWeight: '700'
                                        }}>Quantity(kg)</label>
                                        <input type="text" placeholder='Enter item code' className="form-control"
                                               value={qty}
                                               style={{width: "100%", padding: "8px", margin: "5px 0 15px"}}
                                               onChange={(e) => setqty(e.target.value)}></input>
                                    </div>


                                    <div style={{marginBottom: "2px", display: "flex", alignItems: "center"}}>
                                        <label htmlFor="code" style={{
                                            width: "130px",
                                            marginRight: "10px",
                                            fontWeight: '700'
                                        }}>Material Type</label>
                                        <select
                                            className="form-control"

                                            value={type}
                                            style={{width: "100%", padding: "8px", margin: "5px 0 15px"}}
                                            onChange={(e) => settype(e.target.value)}
                                            //onChange={(e) => setType(e.target.value)}
                                            require d
                                        >

                                            <option value="Raw">Raw product</option>
                                            <option value="Finished">Finished product</option>
                                            <option value="Packing">Packing material</option>
                                        </select>
                                    </div>

                                    <button style={{
                                        marginLeft: "110px",
                                        backgroundColor: "black",
                                        color: "white",
                                        border: "none",
                                        padding: "10px 20px",
                                        borderRadius: "5px"
                                    }}
                                            onMouseOver={(e) => (e.currentTarget.style.color = "white")} // Change text color on hover
                                            onMouseOut={(e) => (e.currentTarget.style.color = "orange")}> Update
                                    </button>


                                </form>


                            </div>
                        </div>
                    </div>
            </div>


        )
}


export default UpdateMT;