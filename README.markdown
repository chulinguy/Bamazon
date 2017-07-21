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
**Here's a picture**: [Step1](images/)

## Changes

| Version | Notes                                                                           |
|---------|---------------------------------------------------------------------------------|
|   1.6.x | ([compare][compare-1.6]) Wraped locales in UMD wrappers                         |
|   1.5.x | ([compare][compare-1.5]) Added Date as argument to update function; locales     |
|   1.4.x | ([compare][compare-1.4]) Added allowPast setting; locale updates                |
|   1.3.x | ([compare][compare-1.3]) Added updateFromDOM function; bug fixes; bower support |
|   1.2.x | ([compare][compare-1.2]) Added cutoff setting; locale updates                   |
|   1.1.x | ([compare][compare-1.1]) Added update function; locale updates                  |
|   1.0.x | ([compare][compare-1.0]) locale updates; bug fixes; AMD wrapper                 |
|  0.11.x | ([compare][compare-0.11]) natural rounding; locale updates;                     |
|  0.10.x | ([compare][compare-0.10]) locale updates                                        |
|   0.9.x | ([compare][compare-0.9]) microsecond support; bug fixes                         |
|   0.8.x | ([compare][compare-0.8]) `<time>` element support; bug fixes                    |
|   0.7.x | ([compare][compare-0.7]) locale function overrides; unit tests                  |
|     ... | ...                                                                             |

[compare-1.6]: https://github.com/rmm5t/jquery-timeago/compare/v1.5.4...v1.6.1
[compare-1.5]: https://github.com/rmm5t/jquery-timeago/compare/v1.4.3...v1.5.4
[compare-1.4]: https://github.com/rmm5t/jquery-timeago/compare/v1.3.2...v1.4.3
[compare-1.3]: https://github.com/rmm5t/jquery-timeago/compare/v1.2.0...v1.3.2
[compare-1.2]: https://github.com/rmm5t/jquery-timeago/compare/v1.1.0...v1.2.0
[compare-1.1]: https://github.com/rmm5t/jquery-timeago/compare/v1.0.2...v1.1.0
[compare-1.0]: https://github.com/rmm5t/jquery-timeago/compare/v0.11.4...v1.0.2
[compare-0.11]: https://github.com/rmm5t/jquery-timeago/compare/v0.10.1...v0.11.4
[compare-0.10]: https://github.com/rmm5t/jquery-timeago/compare/v0.9.3...v0.10.1
[compare-0.9]: https://github.com/rmm5t/jquery-timeago/compare/v0.8.2...v0.9.3
[compare-0.8]: https://github.com/rmm5t/jquery-timeago/compare/v0.7.2...v0.8.2
[compare-0.7]: https://github.com/rmm5t/jquery-timeago/compare/v0.6.2...v0.7.2

## Author

[Chi Jen Lu](https://github.com/chulinguy) 

## Other

[MIT License](http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2008-2017, Chi Jen Lu