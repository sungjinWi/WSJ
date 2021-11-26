const mysql = require("mysql");
const config = require("./dbconfig.json");

let dbPool = mysql.createPool(config); //const 하면 안돼