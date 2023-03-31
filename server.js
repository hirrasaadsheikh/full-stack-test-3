const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const morgan = require('morgan');
const bodyParser = require("body-parser"); //converts the data to JSON
const app = express(); //create express app
require('dotenv').config(); //for ".env" file
const todoApp = require("./routes/todo.route");

app.use(bodyParser.json())//converts the data to JSON format
app.use(morgan('tiny')); //morgan(':method :url :status :res[content-length] - :response-time ms')
app.use(cors());
app.use("/todos", todoApp);
app.get("/", (req, res) => res.send("Home Page"));

//Connect to DB
mongoose.connect(process.env.DATABASE_URL, //.env file is used when we want to hide the secret information from the world
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => (console.log("Database Connected Successfully!!")))
    .catch((error) => console.log(`${error} Did not connect`));

const port = process.env.PORT|| 8000;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})
module.exports = app;