//require packages
const mysql = require("mysql");
const keys = require('./keys');
const inquirer = require('inquirer');
require(console.table);

//create connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: keys,
  database: "bamazon"
});


//helper function displayAll
var displayAll = () => {
  connection.query('SELECT * FROM products', (err, res) => {
    if (err) throw err;
    //TODO:
    connection.end();
  })
}

connection.connect((err) =>{
  if (err) throw err;
  console.log('Welcome to Bamazon, the Amazon for weird items')
  console.log("connected as Customer " + connection.threadId);
  displayAll();

})