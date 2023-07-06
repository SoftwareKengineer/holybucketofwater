const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const { Sequelize } = require("sequelize");
const db = require ("./models")

var coolingtowerbrand = require('./routes/coolingtowerbrand');
var coolingtower = require('./routes/coolingtower');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  "fvdcorky",
  "fvdcorky",
  "l5wSX_AWtD020fKW15hxJpQ0YLi7hly_",
  {
    host: "lallah.db.elephantsql.com",
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const app = express();
app.use(cors());

const port = 3001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/coolingtowerbrands', coolingtowerbrand);
app.use('/coolingtowers', coolingtower);

app.get("/", (req, res) => {
res.send ("maybe you mean /coolingtowers")
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
