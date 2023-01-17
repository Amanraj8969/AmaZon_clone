import React from 'react'
import "./Home.css";
import Product from './Product';



function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
        <img src="https://m.media-amazon.com/images/I/61RvHn0+pAL._SX3000_.jpg" className='home_image'></img>
        <div className='home_row'>
           <Product 
           id="58971"
           title='Samsung Galaxy S20 FE 5G'
            price={299} 
            image='https://m.media-amazon.com/images/I/41ezRvTwcaL._AC_SR400,600_.jpg' 
            rating={5}/>
            {/* second product */}
             <Product 
           id="99830"
           title='Samsung Galaxy S20 FE 5G (Cloud Mint, 8GB RAM, 128GB'
            price={229} 
            image='https://m.media-amazon.com/images/I/41CkKbseMGL._AC_SR400,600_.jpg' 
            rating={5}/>
           
           
        </div>
        <div className='home_row'>
        <Product 
           id="9423"
           title='Urbano Fashion Mens Slim Fit Washed Jeans Stretchable'
            price={6} 
            image='https://m.media-amazon.com/images/I/61nvFVa1fFL._AC_UL480_FMwebp_QL65_.jpg' 
            rating={4}/>
            {/* 2nd row product */}

            <Product 
           id="3319"
           title='GRITSTONES Mens Solid Regular Fit T-Shirt'
            price={39} 
            image='https://m.media-amazon.com/images/I/71O6Cw0HvkL._AC_UL480_FMwebp_QL65_.jpg' 
            rating={3}/>
            {/* new product */}
            <Product 
           id="44504"
           title='Urbano Fashion Mens White Cotton Full Sleeve Slim Fit Casual Checkered Shirt'
            price={49} 
            image='https://m.media-amazon.com/images/I/91pkJFo0HpL._AC_UL480_FMwebp_QL65_.jpg' 
            rating={4}/>
        </div>
        <div className='home_row'>
        <Product 
           id="2057"
           title='Mens Korean Style High Top Platform Fashion'
            price={799} 
            image='https://m.media-amazon.com/images/I/71TawoxTk6L._AC_UL480_FMwebp_QL65_.jpg' 
            rating={3}/>
           
        </div>
        <div className='home_row'>
        <Product 
           id="2037"
           title='Fire-Boltt Phoenix Smart Watch with Bluetooth Calling 1.3",120+ Sports Modes, 240*240 PX High Res with SpO2, Heart Rate Monitoring & IP67 Rating'
            price={799} 
            image='https://m.media-amazon.com/images/I/61y2VVWcGBL._SX522_.jpg' 
            rating={4}/>
           
        </div>
        <div className='home_row'>
        <Product 
           id="1037"
           title='Samsung 138 cm (55 inches) Crystal 4K Neo Series Ultra HD Smart LED TV UA55AUE65AKXXL (Black)'
            price={70990} 
            image='https://m.media-amazon.com/images/I/41IAkUhz1NL._SY300_SX300_QL70_FMwebp_.jpg' 
            rating={4}/>
           
        </div>
        <div className='home_row'>
        <Product 
           id="037"
           title='Samsung 138 cm (55 inches) Crystal 4K Neo Series Ultra HD Smart LED TV UA55AUE65AKXXL (Black)'
            price={70990} 
            image='https://m.media-amazon.com/images/I/41IAkUhz1NL._SY300_SX300_QL70_FMwebp_.jpg' 
            rating={4}/>
           
        </div>

        <div className='home_row'>
        <Product 
           id="0437"
           title='Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35'
            price={7990} 
            image='https://m.media-amazon.com/images/I/814ePfNubRL._AC_UL480_FMwebp_QL65_.jpg' 
            rating={4}/>
           
        </div>

        

        </div>

    </div>
  )
}

export default Home