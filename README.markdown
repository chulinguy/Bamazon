# Bamazon: an CLI inventory app for weird items

Bamazon is a Command-Line Interface app built-on a MySQL database that offers 3 role-interfaces:
-Customers can view the current inventory of items and purchase them
-Managers can view current inventory and choose to restock or create a new item for sale.  
-Supervisors can view profits by department and create new departments

---

## Installation

First, go to the Bamazon directory and run the below commands in Commpand Prompt/Bash/Terminal/Zsh to:
-install dependencies:
-create a keys file that stores your MySQL password securely

```
npm install
touch keys.js
```

Then, in a separate Commpand Prompt/Bash/Terminal/Zsh window, start up your MySQL database

```
mysql mysql -u root -p [your password]
```

finally, use a text editor to open your keys.js file and enter the following

```javascript
module.exports = ['your password as a string']
```

## BamazonCustomer.js

**Welcome screen**
![Step1](images/customer-1.jpg)
**Choose what to buy and how many to buy**
![Step2](images/customer-2.jpg)

## Author

[Chi Jen Lu](https://github.com/chulinguy) 

## Other

[MIT License](http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2008-2017, Chi Jen Lu