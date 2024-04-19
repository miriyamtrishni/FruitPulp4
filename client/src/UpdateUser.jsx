import React,{useState,useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function UpdateUser (){
    const {id} = useParams()
    const [name , setName] =useState()
    const [dob , setDob] =useState()
    const [eid, setEid] =useState()
    const [nic, setNic] =useState()
    const [gender, setGender] =useState()
    const [age , setAge] =useState()
    const[address,setAddress] =useState()
    const [email , setEmail] =useState()
    const [jobtitle , setJobtitle] =useState()
    const [salary , setSalary] =useState()
    const [overtimeHours, setOvertimeHours] = useState(0);
    const [overtimeRate, setOvertimeRate] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [etf, setEtf] = useState(0); // Add etf state
    const [epf, setEpf] = useState(0); // Add epf state
    const [actualSalary, setActualSalary] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {console.log(result)
            setName(result.data.name)
            setEid(result.data.eid)
            setDob(result.data.dob)
            setNic(result.data.nic)
            setGender(result.data.gender)
            setAge(result.data.age)
            setAddress(result.data.address)
            setEmail(result.data.email)
            setJobtitle(result.data.jobtitle)
            setSalary(result.data.salary)
            setOvertimeHours(result.data.overtimeHours)
            setOvertimeRate(result.data.overtimeRate)
            setBonus(result.data.bonus)
            setEtf(result.data.etf)
            setEpf(result.data.epf)
            setActualSalary(result.data.actualSalary)
        
        })
        .catch(err => console.log (err))

    },[] )







    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id, {name ,eid,nic,gender,age,address,email,jobtitle , salary,epf,etf,actualSalary})
        .then(result => {
            console.log(result)
            navigate('/')
        
        })

        .catch(err => console.log(err))

    }
    
    const handleChangeDOB = (e) => {
      setDob(e.target.value);
      calculateAge(e.target.value);
  };

  const calculateAge = (dob) => {
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      setAge(age);
  };

  const handleSalaryChange = (e) => {
    const salaryValue = e.target.value;
    setSalary(salaryValue);
    const etfValue = 0.03 * parseFloat(salaryValue);
    const epfValue = 0.12 * parseFloat(salaryValue);
    setEtf(etfValue);
    setEpf(epfValue);
    const actualSalaryValue = parseFloat(salaryValue) - etfValue - epfValue;
    setActualSalary(actualSalaryValue);
};






    return(

        <div >
      <nav style={{ backgroundColor: "white", padding: "10px 0", width: "100%", fontSize: "15px",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",fontFamily: 'Poppins, sans-serif', fontWeight: '900',  }}>
  <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex", justifyContent: "center" }}>
    <li style={{ marginRight: "25px" }}>
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
          paddingLeft: "500px",
          paddingRight: "60px",
          transition: "all 0.3s ease", // Hover transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#F4BB29")} // Change text color on hover
        onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Change text color on hover out
      >
        HOME
      </Link>
    </li>
          <li style={{ marginRight: "10px" }}>
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
             EMPLOYEE DETAILS
            </Link>
          </li>
          <li style={{ marginRight: "10px" }}>
            <Link
              to="/attendance" 
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
             EMPLOYEE ATTENDANCE
            </Link>
          </li>

          <li style={{ marginRight: "10px" }}>
            <Link
              to="/leave" 
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
              EMPLOYEE LEAVE
            </Link>
          </li>

          <li style={{ marginRight: "10px" }}>
            <Link
              to="/EmployeeDetailsReport" 
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
              GENARATE REPORT
            </Link>
          </li>

          <li style={{ marginRight: "10px" }}>
            <Link
              to="/deleted-employees" // Path to navigate to the deleted employees table
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
              RESIGN EMPLOYEES
            </Link>
          </li>
        </ul>
      </nav>
        
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh",padding: "16px" ,fontFamily: 'Poppins, sans-serif',backgroundColor:"#FEF29B" }}>
        <div style={{ display: "flex", width: "65%", boxShadow: "0 4px 8px rgba(0,0,0,0.3)", borderRadius: "10px", overflow: "hidden" }}>
        <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8f8f8" }}>

                <form onSubmit={Update}style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Update Employee</h2>
                   

                   
                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="names" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Name</label>
                        <input type="text" placeholder="Enter names" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        value={name}  onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center"  }}>
                        <label htmlFor="eid" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Eid</label>
                        <input type="text" placeholder="Enter Employee id" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        maxLength="3" pattern="[A-Za-z0-9]*" // Allow only letters (both uppercase and lowercase) and numbers
                        title="Please enter only letters and numbers for Eid"
                        
                        value={eid} onChange={(e) => setEid(e.target.value)}
                        disabled   required />
                    </div>

                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                                <label htmlFor="dob" style={{ width: "200px", marginRight: "10px", fontWeight: '700' }}>Date of Birth</label>
                                <input type="date" className="form-control" style={{ width: "100%", padding: "8px", margin: "5px 0 15px" }}
                                value={dob} onChange={handleChangeDOB} required />
                            </div>

                    <div style={{ marginBottom: "2px", display: "flex", alignItems: "center" }}>
                                <label htmlFor="age" style={{ width: "200px", marginRight: "10px", fontWeight: '700' }}>Age</label>
                                <input type="text" value={age} className="form-control" style={{ width: "100%", padding: "8px", margin: "5px 0 15px" }} disabled />
                            </div>

                            <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                              <label htmlFor="gender" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Gender</label>
                              <select 
                              className="form-control" 
                              style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                              value={gender}  onChange={(e) => setGender(e.target.value)}
                              required
                           >
                            <option value="">Select Gender</option>
                              <option value="Female">Female</option>
                              <option value="Male">Male</option>
                              <option value="Disclose">Disclose</option>
                              </select>
                              </div>

                              <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                                <label htmlFor="address" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Address</label>
                                <input type="text" placeholder="Enter address" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                                value={address}  onChange={(e) => setAddress(e.target.value)}/>
                              </div>

                            <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                                  <label htmlFor="nic" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>NIC</label>
                                  <input 
                                    type="text" 
                                      placeholder="Enter NIC" 
                                      className="form-control" 
                                      style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                                      maxLength="12"  minLength="12"// Limit input to 12 characters
                                      pattern="[A-Za-z0-9]*" // Allow only letters (both lowercase and uppercase) and numbers
                                      title="Please enter only letters and numbers for NIC" // Error message for unsupported characters
                                      value={nic}  
                                      onChange={(e) => setNic(e.target.value)}
                                      required 
                                    />
                             </div>


                             <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                                  <label htmlFor="email" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Email</label>
                                   <input type="email" placeholder="Enter email" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                                   value={email}  onChange={(e) => setEmail(e.target.value)}/>
                            </div>

                    

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="jobTitle" style={{width: "130px", marginRight: "10px",fontWeight: '700' }}>Job Title</label>
                        <input type="text" placeholder="Enter job title" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        value={jobtitle}  onChange={(e) => setJobtitle(e.target.value)}/>
                    </div>
                    {/* Add overtimeHours */}
                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="overtimeHours" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Overtime Hours</label>
                        <input type="number" placeholder="Enter overtime hours" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                         value={overtimeHours}   onChange={(e) => setOvertimeHours(e.target.value)} required />
                    </div>
                    {/* Add overtimeRate */}
                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="overtimeRate" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Overtime Rate</label>
                        <input type="number" placeholder="Enter overtime rate" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                        value={overtimeRate}    onChange={(e) => setOvertimeRate(e.target.value)} required />
                    </div>
                    {/* Add bonus */}
                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label htmlFor="bonus" style={{ width: "130px", marginRight: "10px",fontWeight: '700' }}>Bonus</label>
                        <input type="number" placeholder="Enter bonus" className="form-control" style={{ width: "100%",padding: "8px", margin: "5px 0 15px" }} 
                         value={bonus}   onChange={(e) => setBonus(e.target.value)} required />
                    </div>

                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
    <label htmlFor="salary" style={{ width: "130px", marginRight: "10px", fontWeight: '700' }}>Salary</label>
    <input 
        type="number" 
        placeholder="Enter salary" 
        className="form-control" 
        style={{ width: "100%", padding: "8px", margin: "5px 0 15px" }}
        value={salary}  
        onChange={(e) => handleSalaryChange(e)} // Pass the event object
    />
</div>


                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label style={{ width: "130px", marginRight: "10px", fontWeight: '700' }}>EPF</label>
                        <input 
                            type="text" 
                            value={epf} 
                            className="form-control" 
                            style={{ width: "100%", padding: "8px", margin: "5px 0 15px" }} 
                            disabled 
                        />
                    </div>
                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label style={{ width: "130px", marginRight: "10px", fontWeight: '700' }}>ETF</label>
                        <input 
                            type="text" 
                            value={etf} 
                            className="form-control" 
                            style={{ width: "100%", padding: "8px", margin: "5px 0 15px" }} 
                            disabled 
                        />
                    </div>
                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <label style={{ width: "130px", marginRight: "10px", fontWeight: '700' }}>Actual Salary</label>
                        <input 
                            type="text" 
                            value={actualSalary} 
                            className="form-control" 
                            style={{ width: "100%", padding: "8px", margin: "5px 0 15px" }} 
                            disabled 
                        />
                    </div>


                    <button style={{ marginLeft: "110px", backgroundColor: "black", color: "white", border: "none",  padding: "10px 20px", borderRadius: "5px" }}>Update</button>


                </form>
              

           </div>
           <div style={{ flex: 1, backgroundImage: "url('/image/im4.jpg')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100%" }}>
                    {/* Optional text or additional styling can be added here */}
                </div>

        </div>

</div>
</div>
    )




}

export default UpdateUser;