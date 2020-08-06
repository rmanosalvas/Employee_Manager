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
            name: "path",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a role",
                "Add an employee",
                "Update employee role",
                "Exit"
            ]
        })
        .then(function (answer) {
            statement = answer.path;

            switch (statement) {
                case "View all departments":
                    viewDepartments();
                    break;

                case "View all roles":
                    viewRoles();
                    break;

                case "View all employees":
                    viewEmployees();
                    break;

                case "Add a role":
                    addRole();
                    break;

                case "Add an employee":
                    addEmployee();
                    break;

                case "Update employee role":
                    updateEmployee();
                    break;

                case "Exit":
                    exitApp();
                    break;
            }
        })
}

function viewDepartments () {

};

function viewRoles () {

};

function viewEmployees () {
    
};

function addRole () {
    
};

function addEmployee () {
    
};

function updateEmployee () {
    
};

function exitApp () {
    connection.end();
};
