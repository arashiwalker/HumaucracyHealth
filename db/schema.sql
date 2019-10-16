USE patientInfo_db;
​
CREATE TABLE  patients (
    id INT NOT NULL AUTO_INCREMENT, /* NOT NULL means that this column can not be empty, and it is called a constraint */
    pat_name VARCHAR(255),
    PRIMARY KEY(id) /* if you don't do line 11, you get an error */
);

CREATE TABLE  charts (
    id INT NOT NULL AUTO_INCREMENT, /* NOT NULL means that this column can not be empty, and it is called a constraint */
    pat_id INT NOT NULL,
    doc_name VARCHAR(255),
    FOREIGN KEY (pat_id) REFERENCES patients(id),
    PRIMARY KEY(id) /* if you don't do line 11, you get an error */
);

CREATE TABLE appointments (
	id INT NOT NULL AUTO_INCREMENT,
	doc_name VARCHAR(255),
	patient_name VARCHAR(255),
	vis_date DATE,
	vis_time TIME,
	-- FOREIGN KEY (pat_id) REFERENCES patients(id),
	-- FOREIGN KEY (doc_id) REFERENCES doctors(id),
PRIMARY KEY(id)
);

CREATE TABLE visit_history (
    id INT NOT NULL AUTO_INCREMENT, /* NOT NULL means that this column can not be empty, and it is called a constraint */
    appt_id INT NOT NULL,
    note VARCHAR(255),
    -- FOREIGN KEY (pat_id) REFERENCES patients(id),
    -- FOREIGN KEY (doc_id) REFERENCES doctors(id),
    FOREIGN KEY (appt_id) REFERENCES appointments(id),
    PRIMARY KEY(id) 
);