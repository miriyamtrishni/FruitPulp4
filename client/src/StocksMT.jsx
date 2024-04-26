import   {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";



function StocksMT(){

    const [stocksMT, setStocksMT] = useState([])



    useEffect(() => {
        axios.get('http://localhost:3001/stocksMT')
            .then(result => setStocksMT(result.data)) //display users
            .catch(err => console.log(err))
    }, []);


    const handleDelete = (id) => {
        axios.delete("http://localhost:3001/deleteitem/" + id)
            .then(res => {console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))

    }

    const [searchTerm, setSearchTerm] = useState("");//search
    const [searchResults, setSearchResults] = useState([]);//search
    // Function to filter users based on search term
    const handleSearch = () => {
        const results = stocksMT.filter((stocks) => stocks.code === searchTerm);
        setSearchResults(results);
    };

    // Function to clear search results
    const clearSearch = () => {
        setSearchResults([]);
        setSearchTerm("");
    };

    return(
        <div style={{
           // backgroundImage: 'url("/image/im83.jpg")',
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
                <ul style={{listStyleType: "none", margin: 0, padding: 0, display: "flex", justifyContent: "center"}}>
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


            <nav
                style={{backgroundColor: "black", padding: "10px 0", width: "100%", fontSize: "16px"}}>

            </nav>


            <div style={{ display:"flex", justifyContent: "center", alignItems: "center", minHeight:"100vh",fontFamily: 'Poppins, sans-serif'
            }}>


                <div style={{ //border: "none",
                   // borderRadius: "5px",

                    //backgroundImage: 'url("/image/im83.jpg")',
                    //backgroundColor:"#FFFFE1",
                    //boxShadow: "0 4px 8px rgba(0,0,0,0.3)"
                }}>


                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
                        <div style={{ border: "none",
                            borderRadius: "5px",
                            height:"80vh",
                            width: '80vw',

                            //backgroundColor:"#FFFFE1",
                           // boxShadow: "0 4px 8px rgba(0,0,0,0.3)"
                        }}>

                            <Link to="/createmt" style={{
                                backgroundColor: "black",
                                color: "white",
                                border: "none",
                                padding: "15px",
                                borderRadius: "5px",
                                textDecoration: "none",
                                marginBottom: "10px",
                                display: "inline-block",
                                marginLeft:"10px",
                                marginTop:"20px" }}

                                  onMouseOver={(e) => (e.currentTarget.style.color = "orange")} // Change text color on hover
                                  onMouseOut={(e) => (e.currentTarget.style.color = "white")}
                            >Add Item+</Link>

                            <input id="searchInput"
                                   type="text"
                                   value={searchTerm}
                                   onChange={(e) => setSearchTerm(e.target.value)}
                                   placeholder="Search by code.."
                                   style={{ padding: "8px",
                                       borderRadius: "5px",
                                       border: "1px solid #ccc",
                                       marginLeft: "5px",
                                       width: "200px"
                            }}
                            />
                            <button onClick={handleSearch} style={{ backgroundColor: "blue", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", marginLeft: "10px", cursor: "pointer" }}>Search
                            </button>
                            {searchResults.length > 0 ? (
                                <button onClick={clearSearch} style={{
                                    backgroundColor: "red",
                                    color: "white",
                                    border: "none",
                                    padding: "8px 15px",
                                    borderRadius: "5px",
                                    marginLeft: "10px",
                                    cursor: "pointer"
                                }}>Clear Search</button>
                            ) :null
                            }


                            <table style={{ width: "100%", textAlign: "center", borderCollapse: "collapse", marginRight:"80px"}}
                            >
                                <thead>
                                <tr style={{border: "none", background: "#B2BEB5"}}>
                                    <th style={{padding: "10px", border: "1px solid"}}>Code</th>
                                    <th style={{padding: "10px", border: "1px solid"}}>Name</th>
                                    <th style={{padding: "10px", border: "1px solid"}}>Stock Movement</th>
                                    <th style={{padding: "10px", border: "1px solid"}}>Quantity</th>
                                    <th style={{padding: "10px", border: "1px solid"}}>Material Type</th>
                                    <th style={{padding: "10px", border: "1px solid"}}>Action</th>

                                </tr>
                                </thead>
                                <tbody>
                                {
                                    (searchResults.length > 0 ? searchResults : stocksMT).map((stocks) => {

                                        return (
                                            <tr style={{ border: "none" ,height: "50px",fontWeight: "bold"}} key={stocks._id}>

                                                <td style={{border: "1px solid"}}>{stocks.code}</td>
                                                <td style={{border: "1px solid"}}>{stocks.namem}</td>
                                                <td style={{padding: "20px",textAlign:'left'  ,border: "1px solid"}}>{stocks.des}</td>
                                                <td style={{border: "1px solid"}}>{stocks.qty}</td>
                                                <td style={{border: "1px solid"}}>{stocks.type}</td>
                                                <td style={{border: "1px solid"}}>
                                                    <Link to={`/updatemt/${stocks._id}`} style={{ backgroundColor: "yellow",
                                                        color: "black",
                                                        border: "none",
                                                        padding: "10px 10px",
                                                        borderRadius: "5px",
                                                        textDecoration: "none",
                                                        fontWeight: "bold", }}

                                                          onMouseOver={(e) => (e.currentTarget.style.color = "lightblue")} // Change text color on hover
                                                          onMouseOut={(e) => (e.currentTarget.style.color = "black")}>Update</Link>

                                                    <button style={{ marginLeft: "5px",
                                                        backgroundColor: "red",
                                                        color: "white",
                                                        border: "none",
                                                        padding: "11px 15px",
                                                        borderRadius: "5px",
                                                        textDecoration: "none" ,
                                                        fontWeight: "bold"
                                                    }}
                                                            onMouseOver={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover
                                                            onMouseOut={(e) => (e.currentTarget.style.color = "white")} // Change text color on hover out
                                                            onClick={() => handleDelete(stocks._id)}>Delete

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


            </div>
        </div>

    )
}

export default StocksMT;
