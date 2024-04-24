const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const { sendEmail } = require('./mail');

const app = express();
app.use(cors());
app.use(express.json()); 

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "edcat",
});

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// POST endpoint to submit form data
app.post("/api/submitForm", (req, res) => {
  const { name, email, message } = req.body;
  const sql = 'INSERT INTO `message` (`name`, `email`, `message`) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
      if (err) {
          console.error('Error inserting form data:', err);
          res.status(500).json({ error: 'An error occurred while submitting the form' });
          return;
      }
      console.log('Form data inserted successfully');
      res.sendStatus(200);
  });
});
app.post('/api/sendEmail', sendEmail);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
