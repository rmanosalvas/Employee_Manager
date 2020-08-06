INSERT INTO department
    (name)
VALUES
    ("Legal"),
    ("Finance"),
    ("Information Technology"),
    ("Sales"),
    ("Human Resources");
/* Legal (1), Finance (2), Information Technology (3), Sales (4), Human Resources (5) */

INSERT INTO roles
    (title, salary, department_id)
VALUES
    ("Lead Attorney", 150000, 1),
    ("Junior Associate", 70000, 1),
    ("Financial Lead", 120000, 2),
    ("Analyst", 60000, 2),
    ("Senior Developer", 115000, 3),
    ("Junior Developer", 70000, 3),
    ("Sales Manager", 82000, 4),
    ("Sales Associate"., 50000, 4),
    ("HR Director", 110000, 5),
    ("HR Assistant", 60000, 5);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Charles", "Walter", 3, null),
    ("Sadie", "Rose", 8, 3),
    ("Charles", "Huntsman", 4, null),
    ("Joe", "Montana", 6, 4),
    ()