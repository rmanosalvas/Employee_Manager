const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");


var connection = mysql.createConnection({
    host: "localhost",

    // Your port
    port: 3306,

    // Your username
    user: "root",

    // Your password and Database name
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

// Start the application
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
                "Add a department",
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

                case "Add a department":
                    addDepartment();
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

// View departments
function viewDepartments() {
    var query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.log("Here are the " + res.length + " departments we have!");
        console.table(res);
        init();
    });
};

// View roles
function viewRoles() {
    var query = "SELECT * FROM role"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.log("We currently have " + res.length + " roles in the company");
        console.table(res);
        init();
    })
};

// View employees
function viewEmployees() {
    var query = "SELECT * FROM employee"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.log("We currently have " + res.length + " employees in the company");
        console.table(res);
        init();
    });
};

// Add department
function addDepartment() {
    inquirer
        .prompt([{
            type: "input",
            name: "addDepartment",
            message: "Whats the name of the new department?"
        }])
        .then(function (answer) {
            var query = "INSERT INTO department SET ?";
            connection.query(query, {
                name: answer.addDepartment
            }, function (err) {
                if (err) throw err;
                console.log("Department added!");
                console.table(answer);
            });
            init();
        });
};


// Add role
function addRole() {
    inquirer
        .prompt([{
                type: "input",
                name: "title",
                message: "What is the title of the new role?"
            },
            {
                type: "input",
                name: "salary",
                message: "What is the salary for this new position?"
            },
            {
                type: "input",
                name: "departmentId",
                message: "Whats the department ID you are this role is joining?"
            }
        ])
        .then(function (answer) {
            var query = "INSERT INTO role SET ?";
            connection.query(query, {
                title: answer.title,
                salary: answer.salary,
                department_id: answer.departmentId
            }, function (err) {
                if (err) throw err;
                console.log("Role added!");
                console.table(answer);
            });
            init();
        })
};

// Add employee
function addEmployee() {
    inquirer
        .prompt([{
            type: "input",
            name: "firstName",
            message: "What is the first name of the new employee?"
        }, {
            type: "input",
            name: "lastName",
            message: "What is the last name of the new employee?"
        }])
        .then(function (answer) {
            var query = "INSERT INTO employee SET ?";
            connection.query(query, {
                first_name: answer.firstName,
                last_name: answer.lastName,
                role_id: null,
                manager_id: null
            }, function (err) {
                if (err) throw err;
                console.log("Employee added!");
                console.table(answer);
            });
            init();
        });
};

function updateEmployee() {
    connection.query("SELECT * FROM role")
};

function exitApp() {
    connection.end();
};