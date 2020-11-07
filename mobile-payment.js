import express from "express";
import dotenv from "dotenv";
const router = express.Router();

dotenv.config();

const credentials = {
    apiKey: process.env.apiKey,
    username: process.env.username
  };
  
  // Get payments service
  const AfricasTalking = require('africastalking')(credentials);
  
  // Initialize the SDK
  const payments = AfricasTalking.PAYMENTS;
  
  // Initiate the payment
  router.post("/",(req,res)=>{
        const options = {
          //Set the product name
          productName: req.body.productName,
          phoneNumber: req.body.phoneNumber,
          currencyCode: req.body.currencyCode,
          amount: req.body.amount,
        };
        payments.mobileCheckout(options)
        .then (result =>{
            console.log(result);  
            res.json(result)
        }).catch (err => {
          console.log(err);
          res.json(err.toString());
        });         
  })
  
  export default router;
  