import  { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";


function UsersMT(){

    //const [itemMT] = useState([{}])
    const [stocksMT, setStockM] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3001/userMT')
            .then(result => setStockM(result.data)) //display users
            .catch(err => console.log(err))
    }, [])


    const handleDelete = (id) => {
        axios.delete("http://localhost:3001/deleteitem/" + id)
            .then(res => {console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))

    }


    return(
        <div style={{
            backgroundImage: 'url("/image/im82.jpg")',
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
                    backgroundColor: "lightgoldenrodyellow",
                    //backgroundImage: 'url("/image/img84.jpg")',
                    border: "1px solid black",
                    borderRadius: "5px",
                    padding: "20px"
                }}>
                    <Link to="/createmt" style={{
                        backgroundColor: "orange",
                        color: "black",
                        border: "1px solid black",
                        padding: "1px",
                        borderRadius: "5px",
                        textDecoration: "none"
                    }} onMouseOver={(e) => (e.currentTarget.style.color = "white")} // Change text color on hover
                          onMouseOut={(e) => (e.currentTarget.style.color = "black")}
                    >ADD +</Link>
                    <table style={{width: "100%", textAlign: "center", border: "1px solid"}}
                    >
                        <thead>
                        <tr style={{border: "1px solid"}}>
                            <th style={{padding: "10px", border: "1px solid"}}>Code</th>
                            <th style={{padding: "10px", border: "1px solid"}}>Name</th>
                            <th style={{padding: "10px", border: "1px solid"}}>Description</th>
                            <th style={{padding: "10px", border: "1px solid"}}>Quantity</th>
                            <th style={{padding: "10px", border: "1px solid"}}>Type</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            stocksMT.map((stocks) => {

                                return (
                                    <tr style={{border: "1px solid"}}  key={stocks._id}>

                                        <td style={{border: "1px solid"}}>{stocks.code}</td>
                                        <td style={{border: "1px solid"}}>{stocks.namem}</td>
                                        <td style={{border: "1px solid"}}>{stocks.des}</td>
                                        <td style={{border: "1px solid"}}>{stocks.qty}</td>
                                        <td style={{border: "1px solid"}}>{stocks.type}</td>
                                        <td style={{border: "1px solid"}}>
                                            <Link to={`/updatemt/${stocks._id}`} style={{
                                                backgroundColor: "#007fff",
                                                color: "black",
                                                border: "1px solid black",
                                                padding: "1px",
                                                borderRadius: "5px",
                                                textDecoration: "none"
                                            }}
                                                  onMouseOver={(e) => (e.currentTarget.style.color = "lightblue")} // Change text color on hover
                                                  onMouseOut={(e) => (e.currentTarget.style.color = "white")}>Update</Link>

                                            <button style={{
                                                marginLeft: "10px",
                                                backgroundColor: "red",
                                                color: "white",
                                                border: "1px solid black",
                                                padding: "1px",
                                                borderRadius: "5px",
                                                textDecoration: "none",
                                                transition: "background-color 0.3s ease-in-out",
                                            }}
                                                    onMouseOver={(e) => (e.currentTarget.style.color = "lightpink")} // Change text color on hover
                                                    onMouseOut={(e) => (e.currentTarget.style.color = "white")} // Change text color on hover out
                                                    onClick={() => handleDelete(stocks._id)}  >Delete

                                            </button>

                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

            </div>



        </div>

    )
}

export default UsersMT;
