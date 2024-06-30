const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
const cookieparser = require('cookie-parser');
app.use(cookieparser());
const user = require('./routs/user');

app.use(cors({
    origin:['http://localhost:3000'],
    methods:['GET','POST'],
    credentials: true,
}));

app.use('/user',user);




app.listen(8081,()=>{
    console.log("listning");
});