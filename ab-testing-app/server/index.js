const express = require('express');
const cors = require('cors'); 
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Choose your desired port

app.use(cors()); // Enable CORS for your React app
app.use(bodyParser.json()); // To parse JSON request bodies

// The /track endpoint
app.post('http://localhost:3000/track', (req, res) => {
  const { version, buttonId } = req.body;

  // 1. Store the data
  console.log(`Version ${version}, Button ${buttonId} clicked!`);

  // 2. Send a response
  res.status(200).json({ message: 'Data received successfully' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});