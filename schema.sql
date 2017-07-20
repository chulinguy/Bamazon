DROP DATABASE if exists bamazon;
CREATE DATABASE bamazon; 
USE bamazon;

CREATE TABLE products (
  item_id INT(5) auto_increment,
  product_name VARCHAR(255) not null, 
  department_name VARCHAR(255) null,
  price DECIMAL (10,2) not null,
  stock_quantity INT(5) not null,
  product_sales INT(10) DEFAULT 0,
  primary key (item_id)
);

INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES
('Salmon Filet Pillow', 'Furnitures & Appliances', 49.95, 25),
('Banana Slicer', 'Furnitures & Appliances', 17.50, 53),
('Bacon-flavored Toothpaste', 'Personal Hygenie', 6.45, 120),
('Curry-flavored Dental Floss', 'Personal Hygenie', 5.00,78),
('Emergency Mustache Kit', 'Party Accessories', 4.95, 307),
('Moving Beer Pong Robot', 'Party Accessories', 35.00, 9),
('Disco Ball Helmet', 'Transportation & Sports', 22.00, 23),
('You-Suck-at-Parking Cards', 'Transportation & Sports', 9.95, 194),
('Katamari', 'Video Games', 25.00, 44),
('March of the Penguins', 'Video Games', 60, 4);

CREATE TABLE departments (
  department_id INT(5) auto_increment,
  department_name VARCHAR(255),
  over_head_costs INT(10) not null,
  primary key (department_id)
); 

INSERT INTO departments (department_name, over_head_costs)
VALUES
('Furnitures & Appliances', 2400),
('Personal Hygenie', 6450),
('Party Accessories', 1495),
('Transportation & Sports', 2200),
('Video Games', 6015);

SELECT * FROM products;
SELECT * FROM departments;
 
-- SELECT department_id, departments.department_name, over_head_costs, dept_sales.department_sales, 
--   (dept_sales.department_sales - over_head_costs) AS profit  
-- FROM departments LEFT JOIN 
-- (SELECT SUM(product_sales) AS department_sales, products.department_name FROM products GROUP BY department_name)
-- AS dept_sales
-- ON dept_sales.department_name = departments.department_name
