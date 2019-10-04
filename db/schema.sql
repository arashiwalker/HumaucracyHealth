DROP DATABASE Humaucracy_Health_db;
CREATE DATABASE Humaucracy_Health_db;

USE Humaucracy_Health_db;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    user_name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
    PRIMARY KEY (id)
);

