# Bamazon: an CLI inventory app for weird items

Bamazon is a Command-Line Interface app built-on a MySQL database that offers 3 role-interfaces:
* Customers can view the current inventory of items and purchase them
* Managers can view current inventory and choose to restock or create a new item for sale.  
* Supervisors can view profits by department and create new departments

---

## Installation

First, go to the Bamazon directory and run the below commands in Commpand Prompt/Bash/Terminal/Zsh to:
* install dependencies:
* create a keys file that stores your MySQL password securely

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

**Step 1 : Welcome screen**

![Step1](https://github.com/chulinguy/Bamazon/blob/master/images/customer-1.JPG)

**Step 2: Choose what to buy and how many to buy**

![Step2](https://github.com/chulinguy/Bamazon/blob/master/images/customer-2.JPG)

## BamazonManager.js

**Step 1 : Welcome screen**

![Step1](../../blob/master/images/manager-1.jpg)

**OPTION 1: Choose to see current inventory**

![Option 1](../../blob/master/images/manager-2.jpg)

**OPTION 2: Choose to see items that are low in inventory (less than five in stock)**

![Option 2](../../blob/master/images/manager-3.jpg)

**OPTION 2: Restock items**

![Option 2](../../blob/master/images/manager-4.jpg)

## Author

[Chi Jen Lu](https://github.com/chulinguy) 

## Other

[MIT License](http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2008-2017, Chi Jen Lu