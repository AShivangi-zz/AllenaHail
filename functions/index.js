const functions = require('firebase-functions');
const express = require ('express');

const app = express();
app.get('/contact',(request, response) => {
    response.send("contact info");
   });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest(app);