const mysql = require('mysql');
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const introQ = [

{
  type: list,
  name: "intro",
  message: "Would you like to bid, post or are you done yet?",
  choices: ["Bid", "Post", "Exit"]

}

];



const connection = mysql.createConnection({
  host: 'localhost',

  // Your port, if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'M@trixt15',
  database: 'biditems',
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    connection.end();
  });
  