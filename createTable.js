'use strict';

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('example.sqlite');//db is the database object
//Create Customer table
db.run("CREATE TABLE IF NOT EXISTS Customers (customerId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,Name TEXT NOT NULL,Address TEXT NOT NULL,City TEXT NOT NULL,State TEXT NOT NULL,PostalCode  INT NOT NULL,PhoneNumber INT)");

//create Products table
db.run("CREATE TABLE IF NOT EXISTS Products (productId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,Name TEXT,Price NUMERIC(10,2) NOT NULL)");

//Create Payment_Options Table
db.run("CREATE TABLE IF NOT EXISTS Payment_Options (paymentOptionId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name TEXT NOT NULL,AccountNumber INTEGER)");

//Create Orders Table
db.run("CREATE TABLE IF NOT EXISTS Orders (orderId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,customerId INTEGER NOT NULL REFERENCES Customers,paymentOptionId INTEGER NOT NULL REFERENCES Payment_Options,paidFull TEXT)");

//Create ORDER_line_items Table
db.run("CREATE TABLE IF NOT EXISTS Order_Line_Items (orderLineItemId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,orderId INTEGER NOT NULL REFERENCES Orders,productId INTEGER NOT NULL REFERENCES Products)");
