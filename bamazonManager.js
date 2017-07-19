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

app.action= () => {
  inquirer.prompt({
    type: 'list',
    message: 'What action would you like to do?',
    choices: [
      'View Products for Sale',
      'View Low Inventory', 
      'Add to Inventory',
      'Add New Product'
    ],
    name:'action',
  }).then((res) => {
    if (res.action === 'View Products for Sale') app.displayAll();
    if (res.action === 'View Low Inventory') app.lowInventory();
    if (res.action === 'Add to Inventory') app.restock();
    if (res.action === 'Add New Product') app.newItem();
  })
}

//helper function displayAll
app.displayAll = () => {
  connection.query('SELECT * FROM products', (err, res) => {
    if (err) throw err;
    //TODO
    app.items = res.map((v) => {
      return {
        item_id: v.item_id,
        product_name: v.product_name,
        // department_name: v.department_name,
        price: v.price,
        stock_quantity: v.stock_quantity,
      }
    })
    console.table(app.items);
    app.action();
  })
}

app.lowInventory = () => {
  connection.query('SELECT * FROM products WHERE stock_quantity < 5', (err, res) => {
    if (err) throw err;
    console.log('Low inventory: ' + res.map((v) => v.product_name).join(', '));
    app.action();
  })
}

app.restock = () => {
  connection.query('SELECT * FROM products', (err, res) => {
    if (err) throw err;
    app.items = res.map((v) => {
      return {
        item_id: v.item_id,
        product_name: v.product_name,
        // department_name: v.department_name,
        // price: v.price,
        stock_quantity: v.stock_quantity,
      }
    })
    console.table(app.items);
    inquirer.prompt([{
      type: 'input',
      message: 'What is the ID of the item you would like to restock?',
      name:'item_id',
      validate: (num) => {
        return parseInt(num) == num && parseInt(num) <= app.items.length && parseInt(num) > 0
      }
    },
    {
      type: 'input',
      message: 'How many would you like to restock?',
      name: 'quantity',
      validate: (num) =>  (parseInt(num) == num && parseInt(num) > 0) 
    }]).then((res1) => {
      var oldQuantity = app.items.filter((v) => (v.item_id == res1.item_id))[0].stock_quantity;
      connection.query(`UPDATE products SET stock_quantity = '${parseInt(oldQuantity) + parseInt(res1.quantity)}' WHERE item_id = ${res1.item_id}`, (err, res2) => {
        if (err) throw err;
        console.log(`Restock Successful!`);
        app.action();
      })
    });
  })
}

app.newItem = () => {
  inquirer.prompt([{
      type: 'input',
      message: 'What is the name of the new item?',
      name:'product_name',
    },
    {
      type: 'input',
      message: 'Which department does the new item belong to?',
      name:'department_name',
    },
    {
      type: 'input',
      message: 'What is the cost of the new item?',
      name:'price',
    },
    {
      type: 'input',
      message: 'How many of the new item would you like to stock?',
      name: 'quantity',
      validate: (num) =>  (parseInt(num) == num && parseInt(num) > 0) 
    }
  ]).then((res1) => {
    connection.query('INSERT INTO products set ?', {
      product_name: res1.product_name,
      department_name: res1.department_name,
      price: res1.price,
      stock_quantity: res1.quantity
    }, (err, res) => {
      if (err) throw err;
      console.log('New item created!');
      app.action();
    })
  })
}

app.initializa = () => {
connection.connect((err) =>{
  if (err) throw err;
  console.log('Welcome to Bamazon, the Amazon for weird items')
  console.log("connected as Manager " + connection.threadId);
  app.action();
  })
}

app.initializa();  