const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ngo_site'
});

db.connect(err => {
   if (err) throw err;
  console.log('Connected to MySQL database.');
});

app.get('/categories', (req, res) => {
  db.query('SELECT * FROM gallery', (err, results) => {
     if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => console.log(`API server on port ${port}`));
//npm install
//npm install express mysql2

//node "react/Connection between API and Database using Express-MySQL.js" run in terminal to start server
//create a database in xaamp and a table
// database name: ngo_site
//table name: gallery