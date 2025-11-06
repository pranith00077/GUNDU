DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL
);

INSERT INTO employees (first_name) VALUES ('Alice'), ('Bob');

SELECT 'Database setup complete.' AS status;
