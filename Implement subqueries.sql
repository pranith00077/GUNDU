USE company_db;
-- Setup supporting table
CREATE TABLE departments (dept_id INT PRIMARY KEY, dept_name VARCHAR(100));
INSERT INTO departments VALUES (1, 'Engineering'), (2, 'Marketing');
ALTER TABLE employees ADD COLUMN department_id INT;
UPDATE employees SET department_id = 1;

-- Find employees in the 'Engineering' department using a subquery
SELECT first_name, email FROM employees
WHERE department_id = (SELECT dept_id FROM departments WHERE dept_name = 'Engineering');

