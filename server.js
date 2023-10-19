const express = require("express")
const dotenv = require("dotenv");
var cookieParser = require("cookie-parser");

const app = express();
const auth = require("./routes/auth");
dotenv.config({ path: "./config.env" });

app.use(cookieParser());
app.use(express.json());
require("./db/connection");
app.use(auth);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listening on PORT ${PORT}`);
});
//express
//npm i moongoose
// npm i dotenv

// npm i react-router-dom
//npm i jsonwebtoken
//npm i cookie-parser
// npm i bycriptjs to install
