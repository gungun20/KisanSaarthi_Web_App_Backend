const express = require("express");
const cors = require("cors");
const pg = require("pg");
const { Pool } = require("pg");
const bodyparser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres1",
  password: "Kshitij%94.6",
  port: 5432,
});
pool.connect();
app.get("/api/arr", (req, res) => {
  res.send(data);
});
app.post("/api/submit", async (req, res) => {
  const { name, number, state, district } = req.body;
  await pool.query(
    "INSERT INTO register(name,mobile_number,state,district) VALUES($1,$2,$3,$4)",
    [name, number, state, district]
  );
  res.send(state);
});
var number = null;
app.post("/api/verify", (req, res) => {
  number = req.body.number;
  res.send(number);
});

app.get("/api/verify1", async (req, res) => {
  const result = await pool.query(
    "SELECT mobile_number FROM register WHERE mobile_number = $1",
    [number]
  );
  res.send(result);
});

app.listen(4000, () => {
  console.log("Server started running on port 4000");
});
