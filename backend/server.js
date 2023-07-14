const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const port = 3036;

// Enable CORS middleware
app.use(cors());
app.use(express.json());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "srv1042.hstgr.io",
  user: "u438552292_signup_root",
  password: "Resc00p@12345",
  database: "u438552292_signup"
});

app.post('/signup', (req,res) => {
    const sql = "INSERT INTO users (email, username, password) VALUES(?, ?, ?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    connection.query(sql, [values], (err,data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });