import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import HomePage from './HomePage';
import WPage from './WPage';

import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

import UsersMT from "./UsersMT.jsx";
import CreateMT from "./CreateMT";
import UpdateMT from "./UpdateMT.jsx";

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

                    <Route path='/usermt' element={<UsersMT/>}></Route>
                    <Route path='/createmt' element={<CreateMT/>}></Route>
                    <Route path='/updatemt/:id' element={<UpdateMT/>}></Route>

                </Routes>

            </BrowserRouter>
        </div>


    )
}

export default App
