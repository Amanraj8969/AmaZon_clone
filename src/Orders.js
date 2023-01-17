import React from 'react'
import { Link } from 'react-router-dom'
import './Orders.css'


function Orders() {
  return (
    <div className='orders'>
     
      <div className='order_info'>
       <h3>Your order successfully placed</h3>
         <h4>Go back to home page</h4>
         <Link to='/'>
         <button>go back</button>
         </Link>

      </div>

      </div>

   
  )
}

export default Orders