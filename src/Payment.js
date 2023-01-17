import React,{useEffect, useState} from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link,useNavigate } from 'react-router-dom';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';





function Payment() {
    const [{basket,user},dispatch]=useStateValue();
    const navigate=useNavigate();

   const stripe=useStripe();
   const elements=useElements();

   const [succeeded, setSucceeded]=useState(false);
   const [processing, setProcessing]=useState("");
   const [error ,setError]=useState(null);
   const [disabled,setDisabled]=useState();
   const [clientSecret,setClientSecret]=useState(true);

   useEffect(()=>{
       const getClientSecret=async()=>{
           
        console.log(getBasketTotal(basket))
        const response=await axios({
          headers: {"Access-Control-Allow-Origin": "*"},
          method:'post',
          url:`/payments/create?total=${getBasketTotal(basket)}`
        });
        setClientSecret(response.data.clientSecret)
       }
       getClientSecret();
   },[basket])

   console.log('the secret>>',clientSecret)
   console.log("🧑‍🚒",user)

   const handleSubmit = async (event) =>{
    //do all the fancy strip here
    event.preventDefault();
    setProcessing(true);
       const payload=await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
          card:elements.getElement(CardElement)
        }
             
       }).then(({paymentIntent})=>{
        //paymentIntent=payment confirmation
     
        
      //   db.collection('users')
      //  .doc(user?.uid)
      //  .collection('orders')
      //  .doc(paymentIntent.id)
      //  .set({
      //   basket:basket,
      //   Amount:paymentIntent.amount,
      //   created:paymentIntent.created
      //  })
       
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type:'EMPTY_BASKET'
        })
        navigate("/orders");
        
       })

   }

   const handleChange =event =>{
     //listen for change in the card element
     //display any error as the customer types their card details
     setDisabled(event.empty);
     setError(event.error?event.error.message:"");
   }


  return (
    <div className='payment'>
 
 <div className='payment_container'>
    <h1>
        Checkout(<Link to='/checkout'>{basket?.length}items</Link>)
    </h1>

    {/* delivery address */}
    <div className='payment_section'>
       <div className='payment_title'>
        <h3>delivery Address</h3>
       </div>

     <div className='payment_address'>
        <p>{user?.email}</p>
        <p>Daldali Road salimpur aahra </p>
        <p>Hazam toli Patna </p>
        <p>800003</p>
        </div>  
     

    </div>
     {/* review item */}
     <div className='payment_section'>
       <div className='payment_title'>
        <h3>Review item and delivery</h3>
        </div> 
        <div className='payment_items'>
            {basket.map(item=>(
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                
                
                />
            ))}
        </div>
    </div>
      {/* payment*/}
      <div className='payment_section'>
        <div className='payment_title'>
         <h3>payment Method</h3>
        </div>
        <div className='payment_details'>
            {/* sprit magic */}
            <form onSubmit={handleSubmit}>
          <CardElement onChange={handleChange}/>   
          <div className='payment_priceContainer'>
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <h3>Order Total:{value}</h3>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'INR'}
            />
          <button disabled={processing||disabled|| succeeded}>
            <span>{processing ? <p>Proceesing</p>:"Buy Now"}</span>
            </button>  
          </div>    
             {error && <div>{error}</div>}
            </form>
        </div>
    </div>



 </div>

    </div>
  )
}

export default Payment