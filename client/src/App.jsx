import { useState } from 'react'
import './App.css'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './HomePage';
import WPage from './WPage';
import Users from './Users'

import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import DeletedEmployeesTable from './DeletedEmployeesTable'; // Import the new component
import EmployeeReport from './EmployeeReport';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Users />}></Route>
            <Route path='/create' element={<CreateUser />}></Route>
            <Route path='/update/:id' element={<UpdateUser />}></Route>
            <Route path="/HomePage" element={<HomePage/>} />
            <Route path="/WPage" element={<WPage/>} />
            <Route path="/deleted-employees" element={<DeletedEmployeesTable />} /> {/* Add route for deleted employees table */}
            <Route path="/EmployeeDetailsReport" element={<EmployeeReport />} />
       


          </Routes>
          
          </BrowserRouter>
    </div>
  
  )
}

export default App
