const mysql = require('mysql');
require('dotenv').config();
// const dbConfig = require('./dbconfig.json');
// var con = mysql.createConnection(dbConfig);


var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE //mysql에서 use class4
});


con.connect(function(err) {
    if(err) throw err;
    console.log("Database Connected");
    // var sQuery = "CREATE DATABASE NODEPOTFOLIO";
    // var sQuery = "CREATE TABLE customers (name varchar(128), addr varchar(256))";
    // var sQuery = "INSERT INTO customers (name, addr) VALUES ('Adams Dole', 'Los Angles')";
    // var sQuery = "SELECT * FROM customers where name='James Hetfield'";
    // var sQuery = "SELECT * FROM customers ORDER BY addr";
    // var sQuery = "UPDATE customers SET addr='Missisifi River' where name = 'Kirk Hammit'";
    // var sQuery = "DELETE FROM customers WHERE name = 'Adams Dole'";
    var sQuery = "drop table customers";

    con.query(sQuery, (err, result, field) => {
        if(err) return console.log(err)

        console.log(result);
    });
});

// con.end(); //db를 닫아줌 비동기라 db만들기전에 닫아버림