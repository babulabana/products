import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login'
import { Link, Route, Routes } from 'react-router'
import Logout from './component/Logout'
import Userhome from './component/Userhome'
import HomeWithlogin from './component/Homewithlogin'
import Products from './component/Products'
import ProductDetails from './component/ProductDetails'
import MobileDetails from './component/MobileDetails'
import Mobiles from './component/Mobiles'
import { Usercontext } from './context/Usercontext'
import { Cartcontext } from './context/Cartcontext'
import Cart from "./component/Cart"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Link to="/cart" className='underline m-5'>go to Cart</Link>
    <Link to="/mobiles"> mobiles</Link>
    <Usercontext.Provider value={{username:"vishal" ,email:"labanababu1510@gmail.com"}}>
    <Cartcontext.Provider value={{items:[]}} >
    <div>
    {/* <Userhome></Userhome> */}
    <Routes>
      
    <Route path='/cart' element={<Cart></Cart>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/logout' element={<Logout></Logout>}></Route>
    <Route path='/userhome' element={<Userhome></Userhome>}></Route>
    <Route path='/homewithlogin' element={<HomeWithlogin></HomeWithlogin>}></Route>
    <Route path='/' element={<HomeWithlogin></HomeWithlogin>}></Route>
    
    <Route path='/products' element={<Products></Products>}></Route>
    <Route path='/productdetails/:pid' element={<ProductDetails></ProductDetails>}></Route>
    <Route path='/mobiledetails/:pid' element={<MobileDetails></MobileDetails>}></Route>


    <Route path='/mobiles' element={<Mobiles></Mobiles>}></Route>
    {/* <Route path='' element={}></Route> */}
    </Routes>
    </div>

    </Cartcontext.Provider>
    </Usercontext.Provider>
    </>
  )
}

export default App
