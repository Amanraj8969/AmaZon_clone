import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import "./Login.css";
import {auth} from "./firebase";




function Login() {
  const history=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
 //function is for track the login details
  const signIn = e =>{
           e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
          history('/')
        })
        .catch(error=>alert(error.message))
  }
//function for track the registration detaill
  const register = e =>{
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      console.log(auth);
      if(auth){
        history('/')
      }
    })
    .catch(error=>alert(error.message))

    // do some fancy firebase registration work

}

  return (
    <div className='login'>
        <Link to='/'>
     <img  className='login_logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqHRmtyAd8rHUdfo5zmPKSA23uQU3C91WCQA&usqp=CAU'/></Link>
     
<div className='login_container'>
    <h1>sign-in</h1>
    <form>
        <h5>E-mail</h5>
        <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
        <h5>Password</h5>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        <button  type='submit' className='login_signInButton' onClick={signIn}>Sign-in</button>
    </form>
    <p>By continuing, you agree to  Clone Amazon's Conditions of Use and Privacy Notice.</p>
    <button className='login_RegisterButton' onClick={register}>Create Your Amazon Account</button>
</div>


    </div>
  )
}

export default Login