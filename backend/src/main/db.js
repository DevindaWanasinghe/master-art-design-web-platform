const mysql = require('mysql2');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'template_db'
});

db.connect(function(err) {
    if (err) throw err;
    console.log("connected");
});  



module.exports = db;