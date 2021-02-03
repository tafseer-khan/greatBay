const mysql = require('mysql');
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

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

const bid = () => {
  connection.query('SELECT * FROM items', (err, res) => {
    // console.log(res);
    if (err) throw err;
    let bidlist = ['...nevermind'];
    res.forEach(({ item_name }) => {
      bidlist.push(`${item_name}`);
      // console.log("bidlist");
      inquirer.prompt([
        {
          type: "list",
          name: "bidoptions",
          message: "Which Item would you like to bid on?",
          choices: bidlist
        }
      ]);
    });
  });
    // connection.end();
};

const exit = () => {
  console.log('See ya, then!');
  connection.end();
};

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
};

connection.connect((err) => {
  if (err) throw err;
  // console.log(`connected as id ${connection.threadId}`);
  start();
});



