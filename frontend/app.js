const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse the request body
app.use(express.urlencoded({ extended: true}));

//Serve the form at the root url
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','index.html'));
    });

//Handle the form submission
app.post('/submit', async (req, res) =>{
    try {
    const response = await axios.post('http://backend:5000/submit', req.body);
    res.send('Form submitted successfully');
    }
    catch (error){
    res.send('Error submitting form');
    }
    });

app.listen(port, () => {
    console.log('Frontend listening at http://localhost:${port}');
    });