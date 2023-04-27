import express from "express";
import bodyParser from "body-parser";
import { getAllCustomers, getCustomerById, getCustomerCount } from './api/CustomersApi';
import { getAllClaims, getAllClaimsByCustomerId, getClaimById, getClaimCount } from "./api/ClaimsApi";
import { getAllPurchases, getPurchaseById, getPurchaseCount } from "./api/PurchasesApi";

// Create an Express app
const app = express();
const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

// Routes
app.get('/customers/getAllCustomers', getAllCustomers);
app.get('/customers/getCustomerById/:id', getCustomerById); 
app.get('/customers/getCustomerCount', getCustomerCount)
app.get('/claims/getAllClaims', getAllClaims);
app.get('/claims/getClaimById/:id', getClaimById); 
app.get('/claims/getClaimCount', getClaimCount)
app.get('/claims/getAllClaimsByClientId/:customerId', getAllClaimsByCustomerId);
app.get('/purchases/getAllPurchases', getAllPurchases);
app.get('/purchases/getPurchaseById/:id', getPurchaseById); 
app.get('/purchases/getPurchaseCount', getPurchaseCount)
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Reguard Api is listening on port ${PORT}`);
});