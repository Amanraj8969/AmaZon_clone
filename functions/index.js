const functions= require('firebase-functions');
const express =require('express');
const cors=require('cors');
const { response } = require('express');
const stripe=require('stripe')('sk_test_51MPm5BSJseISqjDO87xbdKZ4n00lPdqtTDGIYgif2x9VtQXm4Eq3si8zQO1Fgc7fEuvoq2en1PEZKhmFtXQNTfhb00BzIv8oGH')


//api
//app config
const app =express();
//middlewarees
app.use(cors({origin:true, allowedHeaders: "*"}));
app.use(express.json());

//API route
app.get('/',(request,response)=>response.status(200).send('hello world'))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });

app.options('/payments/create', async (_, res) => {
    res.setHeader("Allow-Control-Allow-Origin", "*")
    res.setHeader("Allow-Control-Allow-Methods", "*")
    res.setHeader("Allow-Control-Allow-Headers", "*")
})

//listen command
exports.api=functions.https.onRequest(app)

//example
//http://127.0.0.1:5001/project-c00b2/us-central1/api