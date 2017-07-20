//require packages
const mysql = require("mysql");
const keys = require('./keys');
const inquirer = require('inquirer');
require('console.table');

//app states
var app = {};
app.items = []; 
//create connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: keys,
  database: "bamazon"
});

//function displayAllandbuy
app.displayAllandBuy = () => {
  connection.query('SELECT * FROM products', (err, res) => {
    if (err) throw err;
    app.items = res.map((v) => {
      return {
        item_id: v.item_id,
        product_name: v.product_name,
        department_name: v.department_name,
        price: v.price,
        stock_quantity: v.stock_quantity,
        product_sales: v.product_sales
      }
    })
    console.table(app.items);
    app.buy();
  })
}

//buy helper function
app.buy = () => {
  inquirer.prompt([{
    type: 'input',
    message: 'What is the ID of the item you would like to purchase?',
    name:'item_id',
    validate: (num) => {
      return parseInt(num) == num && parseInt(num) <= app.items.length && parseInt(num) > 0
    }
  },
  {
    type: 'input',
    message: 'How many would you like to purchase?',
    name: 'quantity',
    validate: (num) =>  (parseInt(num) == num && parseInt(num) > 0) 
  
  }]).then((res1) => {
    var oldQuantity = app.items.filter((v) => (v.item_id == res1.item_id))[0].stock_quantity;
    var itemPrice = app.items.filter((v) => (v.item_id == res1.item_id))[0].price;
    var oldSales = app.items.filter((v) => (v.item_id == res1.item_id))[0].product_sales;
    if (res1.quantity > oldQuantity){
      console.log('Insufficient quantity in stock!')
      app.displayAllandBuy();  
    } else {
      connection.query(`UPDATE products SET ? WHERE item_id = ${res1.item_id}`, {
        stock_quantity: oldQuantity - parseInt(res1.quantity),
        product_sales: oldSales + (itemPrice * parseInt(res1.quantity)) 
      }, (err, res2) => {
        if (err) throw err;
        console.log(`Purchase Successful! You spent ${itemPrice * res1.quantity}`);
        app.displayAllandBuy();
      })
    }
  });
}

//initialize app
app.initializa = () => {
connection.connect((err) =>{
  if (err) throw err;
  console.log('Welcome to Bamazon, the Amazon for weird items')
  console.log("connected as Customer " + connection.threadId);
  app.displayAllandBuy();
  })
}

app.initializa();  