import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import HomePage from './HomePage';
import WPage from './WPage';

import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

import CreateMT from "./CreateMT";
import UpdateMT from "./UpdateMT.jsx";
import StocksMT from "./StocksMT.jsx";
import StockReport from "./StockReport"


function App() {
    //const [count, setCount] = useState(0)

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Users/>}></Route>
                    <Route path='/create' element={<CreateUser/>}></Route>
                    <Route path='/update/:id' element={<UpdateUser/>}></Route>
                    <Route path="/HomePage" element={<HomePage/>}/>
                    <Route path="/WPage" element={<WPage/>}/>

                    <Route path='/stocksmt' element={<StocksMT/>}></Route>
                    <Route path='/createmt' element={<CreateMT/>}></Route>
                    <Route path='/updatemt/:id' element={<UpdateMT/>}></Route>
                    <Route path="/stock-details" element={<StockReport/>}/>

                </Routes>

            </BrowserRouter>
        </div>


    )
}

export default App
