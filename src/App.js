
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Orders from './Orders';
import Login from './Login';
import { useEffect } from 'react';
import Payment from './Payment';
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import {Elements}  from "@stripe/react-stripe-js"

const promise=loadStripe('pk_test_51MPm5BSJseISqjDOE7xwboYQklJRXm643aTG9iWLz2arlx8Jlht98kDJugBODmlH1IZqVAC9psQTKuhtufCFe9UK00kKBp4iDZ');

function App() {
  const [{},dispatch]=useStateValue();
  useEffect(()=>{
  //will only run when app component loads
  auth.onAuthStateChanged(authUser=>{
    console.log('the user is ',authUser);

    if(authUser){
      //user logged in 
     dispatch({
      type:'SET_USER',
      user:authUser
     })

    }else{
      //the user is loged -out
      dispatch({
        type:'SET_USER',
        user:null

      })
    }
  })

  },[])
  return (
    <Router>
    <div className="app"> 

    <Routes>
     <Route path='/orders' element={<Header/>}/>
     </Routes>
     
     <Routes>
      <Route path='/orders' element={<Orders/>}/>
     </Routes>

    {/* payment page */}
    <Routes>
     <Route path='/payment' element={<Header/>}/>
     </Routes>
     
     <Routes>
      
      <Route path='/payment' element={
     <Elements stripe={promise}>
     <Payment/>
     </Elements>

      }/> 
    
     </Routes>

    {/* <Header/> */}
    <Routes>
      <Route path='/login' element={<Login/>}/>
     </Routes>
{/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
                        {/* checkoutpage */}
     <Routes>
     <Route path='/checkout' element={<Header/>}/>
     </Routes>
     
     <Routes>
      <Route path='/checkout' element={<Checkout/>}/>
     </Routes>
 {/* ///////////////////////////////////////////////////////////////////////////////////////////////     */}
              {/* home page */}
 {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
     <Routes>
      <Route path='/' element={<Header/>}/>
     </Routes>
    
     <Routes>
      <Route path='/' element={<Home/>} />
     </Routes>
   
   {/* //////////////////////////////////////////////////////////////////////////////////////////////   */}
    </div>
    </Router>
  );
}

export default App;
