const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const { response, request } = require("express");
const stripe = require("stripe")(
  "sk_test_51Lx20gSHgvSf9YWJE38GQ3cVmP0AGMzoN5DDV9HKWkmXTdNUZg3sYGc2awYKggWJ70cjpKYmXMJjjvBXn9r4nj1Z009XYH8Yiw"
);

// to setup an API we need to have fallowing code
/* 1. API config
   2. API middleware
   3. API routes
   4. listen commands */ 

// 1. API config
const app= express()
//  2. API middleware

app.use(cors({origin:true})) // this is like a security which will allow the some perticular 
// hosts to access this code
app.use(express.json())

// 3. API Routes
app.get("/",(request,response)=>response.status(200).send("hello world"))


// 4. Listen command
exports.api= functions.https.onRequest(app)


//  to check whether this backend is working or not, we can emulate this this firbase
// (note: still we have not deployed this to firebase we are just checking whether it is working or not)
//  Command: firbase emulators:start
//  this command will create a fake server(http://127.0.0.1:5001/clone-6f9dc/us-central1/api) which will boot up the backend 




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
