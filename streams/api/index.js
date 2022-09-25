const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db-docker",
  port: "3306",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/streams", (req, res) => {
  const sqlSelect = "SELECT * FROM streams";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.get("/streams/:id", (req, res) => {
  const id = req.params.id;
  const sqlSelect = "SELECT * FROM streams WHERE id = ?";
  db.query(sqlSelect, id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.post("/streams", (req, res) => {
  const userId = req.body.userId;
  const title = req.body.title;
  const description = req.body.description;

  const sqlInsert =
    "INSERT INTO streams (userId, title, description) VALUES (?, ?, ?)";
  db.query(sqlInsert, [userId, title, description], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.patch("/streams/:id", (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const description = req.body.description;

  const sqlUpdate =
    "UPDATE streams SET title = ?, description = ? WHERE id = ?";
  const sqlSelect = "SELECT * FROM streams WHERE id = ?";

  db.query(sqlUpdate, [title, description, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      db.query(sqlSelect, id, (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      });
    }
  });
});

app.delete("/streams/:id", (req, res) => {
  const id = req.params.id;
  const sqlDelete = "DELETE FROM streams WHERE id = ?";

  db.query(sqlDelete, id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
