const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HRFlCA1X34LDuTqQmJQlhL1BDv6YvKfdbc4PQxxHZVzWegmmJbgHPAR1XjoN3JkUmujGxuU7wcx7DWg5SSL2ZXD001XFtoiJ3"
);

// API

// app config

const app = express();

// Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// API routes

app.get("/", (request, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command

exports.api = functions.https.onRequest(app);

// example end point

//http://localhost:5001/clone-5a923/us-central1/api
