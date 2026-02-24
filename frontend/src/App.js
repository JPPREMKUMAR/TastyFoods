
import { Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Restaurant from "./pages/Restaurant"
import Cart from "./pages/Cart"
import Success from "./pages/Success"
import Payment from "./pages/Payment"
import Orders from "./pages/Orders"
import Profile from "./pages/Profile"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const App = () => {


  /*/
    

  import Cart from './components/Cart'
  import RestaurantItem from './components/RestaurantItem'
  
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
  
          /*/

  return (
    <>
      <ToastContainer />
      <>


        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/restaurant/:id" element={<Restaurant />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/success" element={<Success />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/profile" element={<Profile />} />

        </Routes>
      </>

    </>
  )
}

export default App
