import React from 'react'


import './Header.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import { BiSearch } from "react-icons/bi";
import SearchIcon from '@mui/icons-material/Search';

import { GiShoppingBag } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';







function Header() {
  const [{ basket,user },dispatch] = useStateValue(); 
  const handleAuthentication=()=>{
    if(user){
       auth.signOut();
    }
  }
  
  return (
    
    <div className='header'>
      <Link to='/'>
      <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo'/>
      </Link>
       
        <div className="header-search">
        <input className='header-searchInput' type="text" />
        {/* <BiSearch className='header_searchIcon' />  */}
        <SearchIcon className='header_searchIcon' /> 
            
        </div>
        
        
        <div className="header_nav">
          <Link to={ !user && '/login'}>
         <div className='header_option' onClick={handleAuthentication}>
              <span className='header__optionLineOne'>Hello {!user?'Guest':user.email}</span>
              <span className='header__optionLineTwo'>{user ?'Sign Out':'Sign In'}</span>
         </div>
         </Link>

         <div className='header_option'>
             <span className='header__optionLineOne'>Return</span>
              <span className='header__optionLineTwo'>& order</span>
         </div>
        
          
         <div className='header_option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
         </div>
         <Link to='/Checkout'>
         <div className='.header_optionBasket'>
          <GiShoppingBag className='basket' />
          <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
         </div>
         </Link>



        </div>


        
    </div>
    
  )
}

export default Header