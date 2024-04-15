import { useState } from 'react'
import './App.css'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './HomePage';
import WPage from './WPage';
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
