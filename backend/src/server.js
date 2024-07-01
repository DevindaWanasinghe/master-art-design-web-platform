const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../src/routs/routes');
const user = require('../src/routs/user');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api', routes);
app.use('/user', user);

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
