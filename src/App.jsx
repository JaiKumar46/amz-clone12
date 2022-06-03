import React,{useEffect} from 'react'
import Home from "./components/Home/Home"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from "./components/Header/Header"
import Login from './components/Login/Login'
import {auth} from "./Api/firebaseApi"
import {useStateValue} from "./Api/StateProvider"
// import CheckoutProduct from './components/CheckOutProduct/CheckOutProduct'
import CheckOut from "./components/CheckOut/CheckOut"
import Orders from './components/Orders/Orders'
// import Register from "./components/Register/Register"

const App = () => {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
       

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return ( <div>
 
     
   <BrowserRouter>
   <Header/>
   <Routes>
   <Route path="/" element={<Home />} />
         
   <Route path="/login" element={<Login />}/>
  <Route path='/checkout' element={<CheckOut/>}/>
    <Route path='/orders' element={<Orders/>}/>
    {/* <Route path='/register' element={<Register/>}/> */}
   </Routes>
   </BrowserRouter>
  
   </div>
  )
}

export default App