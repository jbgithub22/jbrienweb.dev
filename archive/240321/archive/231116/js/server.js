const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000; // You can choose any available port

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // Serve static files from the public folder
// app.use(express.static('public'));

// Optionally, you can serve the index.html from the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join('/home/ubuntu/jbrienweb.dev', 'public', 'index.html'));
});

app.post('/submit-feedback', (req, res) => {
    const feedbackData = req.body;
    // You can process and store the feedback data here
    console.log('Feedback Received:', feedbackData);
    res.send('Feedback submitted successfully!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});