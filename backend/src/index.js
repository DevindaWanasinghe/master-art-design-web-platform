const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../src/routs/routes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
  });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
