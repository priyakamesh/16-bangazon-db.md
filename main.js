'use strict';

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('example.sqlite');//db is the database object
//Insert data to appropriate Tables
//Insert Customer data
const populateCustomers =()=>{
 const {Customers} = require('./jsonfiles/Customers.json');
 Customers.forEach(({Name,Address,City,State,PostalCode,PhoneNumber}) => {
  db.run(`INSERT INTO Customers VALUES (null,"${Name}", "${Address}","${City}","${State}",${PostalCode},${PhoneNumber})`)
 });
};
const populateOrderLine =()=>{
 const {list} = require('./jsonfiles/Order_Line_Items.json');
 list.forEach(({OrderId,ProductId}) => {
  db.run(`INSERT INTO Order_Line_Items VALUES (null,${OrderId},${ProductId})`)
 });
};

const populateOrders =()=>{
 const {Orders} = require('./jsonfiles/Orders.json');
 Orders.forEach(({customerId,paymentOptionsId,PaidFull}) => {
  db.run(`INSERT INTO Orders VALUES (null,${customerId},${paymentOptionsId},"${PaidFull}")`)
 });
};

const populatePaymentOption =()=>{
 const {list} = require('./jsonfiles/Payment_Options.json');
list.forEach(({Name,AccountNumber}) => {
  db.run(`INSERT INTO Payment_Options VALUES (null,"${Name}",${AccountNumber})`)
 });
};

const populateProducts =()=>{
 const {Products} = require('./jsonfiles/Products.json');
 Products.forEach(({Name,Price}) => {
  db.run(`INSERT INTO Products VALUES (null,"${Name}","${Price}")`)
 });
};
// populateCustomers();
// populateOrderLine();
// populateOrders();
// populatePaymentOption();
// populateProducts();
