'use strict';

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('example.sqlite');//db is the database object

//Drop Table
const dropCustomers =()=>{
  db.run('DROP TABLE Customers');
};

const dropProducts =()=>{
  db.run('DROP TABLE Products');
};
const dropOrders =()=>{
  db.run('DROP TABLE Orders');
};
const dropPaymentOptions = ()=>{
  db.run('DROP TABLE Payment_Options');
};
const dropOrderLineItem = ()=>{
  db.run('DROP TABLE Order_Line_Items');
};
// dropCustomers();
// dropProducts();
// dropOrders();
// dropPaymentOptions();
// dropOrderLineItem();
