DROP DATABASE IF NOT EXISTS patient_visit_history;
​
CREATE DATABASE patient_visit_history;
​
/* this is how i connect to a database*/
USE patient_visit_history;
​
CREATE TABLE visit_history (
    id INT NOT NULL AUTO_INCREMENT, /* NOT NULL means that this column can not be empty, and it is called a constraint */
    visit_date DATE,
    patient_name VARCHAR(255),
    doctor_name VARCHAR(255),
    perscription VARCHAR(255),
    note VARCHAR(255),
    PRIMARY KEY(id) 
);