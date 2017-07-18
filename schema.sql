DROP DATABASE if exists bamazon;
CREATE DATABASE bamazon; 
USE bamazon;

CREATE TABLE products (
  item_id INT(5) auto_increment,
  product_name VARCHAR(255) not null, 
  department_name VARCHAR(255) null,
  price DECIMAL (10,2) not null,
  stock_quantity INT(5) not null
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

SELECT * FROM products;
