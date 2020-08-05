const mysql = require("mysql");
const inquirer = require("inquirer");
const conTab = require("console.table");


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password123",
    database: "employeeDB"
});

connection.connect(function (err) {
    if (err) {
        throw err;
    } else {
        init();
    }
});

function init() {
    inquirer
        .prompt({
            type: "list",
            name: "firstQ",
            message: "What would you like to do?",
            choices: [
                
            ]
        })
}