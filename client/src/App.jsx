import { useState } from 'react'
import './App.css'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './HomePage';
import WPage from './WPage';



import Users from './Users'
import Suppliers from './Suppliers'     
import Attendances from './Attendances'
import Machines from './Machines'
import Distributors from './Distributors'

import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import CreateUserat from './CreateUserat'
import UpdateUserat from './UpdateUserat'

import CreateUsersh from './CreateUsersh';
import UpdateUsersh from './UpdateUsersh';
import SupplierReport from './SupplierReport'
 
import DeletedEmployeesTable from './DeletedEmployeesTable'; // Import the new component
import EmployeeReport from './EmployeeReport';

import Signup from './Signup'
import Login from './Login'

import CreateUserla from './CreateUserla';
import UpdateUserla from './UpdateUserla';

import CreateUserds from './CreateUserds';
import UpdateUserds from './UpdateUserds';

import Productdashboard from './Productdashboard'
import ProductHistory from './ProductHistory'
import Products from './Products'
import CreateProduct from './CreateProduct'
import UpdateProduct from './UpdateProduct'
import Batches from './Batches'
import CreateBatch from './CreateBatch'
import UpdateBatch from './UpdateBatch'

import ProductReport from './ProductReport';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
          <BrowserRouter>
          <Routes>

            <Route path='/' element={<Users />}></Route>
            <Route path='/create' element={<CreateUser />}></Route>
            <Route path='/update/:id' element={<UpdateUser />}></Route>
            
            <Route path='/attendance' element={<Attendances />}></Route>
            <Route path='/createat' element={<CreateUserat />}></Route>
            <Route path='/updateat/:id' element={<UpdateUserat />}></Route>

            <Route path="/HomePage" element={<HomePage/>} />
            <Route path="/WPage" element={<WPage/>} />

            <Route path='/supplier' element={<Suppliers />}></Route>
            <Route path='/createsh' element={<CreateUsersh />}></Route>
            <Route path='/updatesh/:id' element={<UpdateUsersh />}></Route>
            



            <Route path="/deleted-employees" element={<DeletedEmployeesTable />} /> {/* Add route for deleted employees table */}
            <Route path="/EmployeeDetailsReport" element={<EmployeeReport />} />
       
            <Route path="/register" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />

            <Route path="/material-details" element={<SupplierReport />} />

            <Route path='/machinary' element={<Machines />}></Route>
            <Route path='/createla' element={<CreateUserla />}></Route>
            <Route path='/updatela/:id' element={<UpdateUserla />}></Route>

            <Route path='/distributor' element={<Distributors />}></Route>
            <Route path='/createds' element={<CreateUserds />}></Route>
            <Route path='/updateds/:id' element={<UpdateUserds />}></Route>
            
            <Route path='/productdetails' element={<Products />}></Route>
            <Route path='/createproduct' element={<CreateProduct />}></Route>
            <Route path='/updateproduct/:id' element={<UpdateProduct />}></Route>
            <Route path="/HomePage" element={<HomePage/>} />
            <Route path="/WPage" element={<WPage/>} />
            <Route path="/Productdashboard" element={<Productdashboard/>} />
            <Route path="/ProductHistory"  element={<ProductHistory/>}/>
        

            <Route path='/batchdetails' element={<Batches />}></Route>
            <Route path='/createbatch' element={<CreateBatch />}></Route>
            <Route path='/updatebatch/:id' element={<UpdateBatch />}></Route>

          

            <Route path="/ProductDetailsReport" element={<ProductReport />} />
            //<Route path="/BatchDetailsReport" element={<ProductReport />} />

          </Routes>
          
          </BrowserRouter>
    </div>
  
  )
}

export default App
