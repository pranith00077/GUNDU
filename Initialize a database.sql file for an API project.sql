CREATE DATABASE IF NOT EXISTS my_api_db;
USE my_api_db;

CREATE TABLE IF NOT EXISTS products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

INSERT INTO products (product_name, price) VALUES
('Laptop', 1200.00),
('Mouse', 25.50)
ON DUPLICATE KEY UPDATE product_name=product_name;
