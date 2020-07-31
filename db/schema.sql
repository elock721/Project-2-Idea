DROP DATABASE IF EXISTS fmf;
CREATE DATABASE fmf;
USE fmf;

CREATE TABLE trucks (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NULL,
    cuisine VARCHAR (45),
    neighborhood VARCHAR (45),
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY (id)
);

INSERT INTO trucks (name, cuisine, neighborhood, createdAt, UpdatedAt)
VALUES ("Veracruz All Natural", "Mexican", "4208 Manchaca Rd. 78704", now(), now()), 
("Gordoughs Big Fat Donuts", "American", "1503 South First Street 78704", now(), now()),
("Con Madre Kitchen", "Mexican", "628 E Oltorf St", now(), now()),
("Pueblo Viejo Taco Truck", "Mexican", "121 Pickle Rd", now(), now()),
("Mama Mal's Italian Cuisine Food Truck", "Southern Italian", "1320 S Lamar Blvd", now(), now()),
("Tamale Addiction", "Mexican", "2340 S Lamar Blvd", now(), now()),
("IL Saporis Italian", "Italian", "603 W Live Oak St", now(), now()),
("Luke's Inside Out", "Sandwich", "1109 S Lamar Blvd", now(), now()),
("Pitalicious", "Mediterranean", "1503 S Congress Ave", now(), now()),
("Cannone Cucina Italiana", "Italian", "1720 Barton Springs Rd", now(), now());
SELECT * FROM fmf.trucks;


