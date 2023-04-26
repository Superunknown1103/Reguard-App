import express from "express";

// Create an Express app
const app = express();

// // Set up a route
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Reguard-back is listening on port ${PORT}`);
});