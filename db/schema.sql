DROP DATABASE patientInfo_db;
CREATE DATABASE patientInfo_db;

USE patientInfo_db;
​;

CREATE TABLE charts (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    telephone VARCHAR(20),
    email VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    country VARCHAR(255),
    postal_code INT,
    date_of_birth DATE,
    age INT,
    sex VARCHAR(255),
    PRIMARY KEY(id)
);

CREATE TABLE appointments (
id INT NOT NULL AUTO_INCREMENT,
    doc_name VARCHAR(255),
    loc_name VARCHAR(255),
    pat_name VARCHAR(255),
    reason VARCHAR(255),
    note VARCHAR(255),
    vis_date DATE,
    vis_time TIME,
PRIMARY KEY(id)
);

CREATE TABLE payments (
    id INT NOT NULL AUTO_INCREMENT, /* NOT NULL means that this column can not be empty, and it is called a constraint */
    amount DECIMAL(10,2),    
    PRIMARY KEY(id) 
);