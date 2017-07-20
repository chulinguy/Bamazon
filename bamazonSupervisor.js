//require packages
const mysql = require("mysql");
const keys = require('./keys');
const inquirer = require('inquirer');
require('console.table');

//app states
var app = {};
app.departments = []; 
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
      'View Products Sales by Department',
      'Create New Department', 
    ],
    name:'action',
  }).then((res) => {
    if (res.action === 'View Products Sales by Department') app.salesByDept();
    if (res.action === 'Create New Department') app.newDept();
  })
}

app.salesByDept = () => {
  var queryStr= 'SELECT department_id, departments.department_name, over_head_costs, dept_sales.department_sales, '; 
  queryStr += '(dept_sales.department_sales - over_head_costs) AS profit ';  
  queryStr += 'FROM departments LEFT JOIN ';
  queryStr += '(SELECT SUM(product_sales) AS department_sales, products.department_name FROM products GROUP BY department_name) '
  queryStr += 'AS dept_sales ON dept_sales.department_name = departments.department_name';

  connection.query(queryStr, (err, res) => {
      if (err) throw err;
      console.log('Showing sales by each department');
      // console.log(res)
      app.departments = res.map((v) => {
      return {
        department_id: v.department_id,
        department_name: v.department_name,
        over_head_costs: v.over_head_costs,
        product_sales: v.department_sales,
        profit: v.profit
      }
    })

    // console.log(app.departments)
    console.table(app.departments);
      app.action();
    })
}

app.newDept = () => {
  inquirer.prompt([{
      type: 'input',
      message: 'Which is the name of the new department?',
      name:'department_name',
    },
    {
      type: 'input',
      message: 'Which is the overhead cost of this new department?',
      name:'over_head_costs',
  }]).then((res1) => {
    connection.query('INSERT INTO departments set ?', {
      department_name: res1.department_name,
      over_head_costs: res1.over_head_costs,
    }, (err, res) => {
      if (err) throw err;
      console.log('New department created!');
      app.action();
    })
  })
}

//initialize app
app.initializa = () => {
connection.connect((err) =>{
  if (err) throw err;
  console.log('Welcome to Bamazon, the Amazon for weird items')
  console.log("connected as Supervisor " + connection.threadId);
  app.action();
  })
}

app.initializa();  