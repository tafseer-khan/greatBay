const mysql = require('mysql');
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { exit } = require('process');

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




function start() {
  inquirer.prompt([
    {
      type: 'list',
      name: "intro",
      message: "Would you like to bid, post or are you done yet?",
      choices: ["Bid", "Post", "Exit"]

    }
  ]).then(function (data) {
    switch (data.intro) {
      case "Bid":
        bid();
        break;
      case "Post":
        post();
        break;
      case "Exit":
        exit();
        break;
    }
  })
}

const bid = () => {
  connection.query('SELECT * FROM bidItems', (err, res) => {
    if (err) throw err;
    let bidlist = [];
    res.forEach(({ item_name }) => {
      bidlist.push(`${item_name}`)
    });
  }).then(  
    inquirer.prompt([
    {
      type: list,
      name: "bidoptions",
      message: "Which Item would you like to bid on?",
      choices: bidlist

    }]))
    // connection.end();
}
start();
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
});



