const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51Lx20gSHgvSf9YWJE38GQ3cVmP0AGMzoN5DDV9HKWkmXTdNUZg3sYGc2awYKggWJ70cjpKYmXMJjjvBXn9r4nj1Z009XYH8Yiw"
);

// to setup an API we need to have fallowing code
/* 1. API config
   2. API middleware
   3. API routes
   4. listen commands */

// 1. API config
const app = express();
//  2. API middleware

app.use(cors({ origin: true }));
// this is like a security which will allow the some perticular
// hosts to access this code
app.use(express.json());

// 3. API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request) => {
  const total = request.query.total;
  // here /payment/create is a path defined inside payment.js
  // (/payments/create?total=${to_get_final_subtotal(Basket) * 100}`)
  // here ?total is called query prams which allows
  // user to define query or logical operation within the url
  // and this post method will send a post request to the
  // defined path and  returns with a secret key required
  // for the payment processing
  // this secret key will change when ever there is
  // a change in subtotal(i.e total).

  // console.log(
  //   "payment request has been made and the final total amt ==>",
  //   total
  // );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// 4. Listen command
exports.api = functions.https.onRequest(app);
// to deploay this backend to the firebase:
/*     1. we need to be function directory
       2. firebase deploy --only functions */

//  to check whether this backend is
//  working or not, we can emulate this this firbase
// (note: still we have not deployed
// this to firebase we are just checking whether it is working or not)
//  Command: firebase emulators:start
//  this command will create a fake server(http://127.0.0.1:5001/clone-6f9dc/us-central1/api) which will boot up the backend

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
