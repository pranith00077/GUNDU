USE company_db;
-- INSERT
INSERT INTO employees (first_name, email) VALUES ('John Doe', 'john.doe@example.com'), ('Jane Smith', 'jane.smith@example.com');
-- SELECT
SELECT * FROM employees;
-- UPDATE
UPDATE employees SET email = 'j.smith@example.com' WHERE first_name = 'Jane Smith';
-- DELETE
DELETE FROM employees WHERE id = 1;
