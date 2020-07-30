DROP DATABASE IF EXISTS fmf;
CREATE DATABASE fmf;

USE fmf;

CREATE TABLE foodtruck_name (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NULL,
    cuisine VARCHAR (45),
    neighborhood VARCHAR (45),
    PRIMARY KEY (id)
);

INSERT INTO foodtruck_name (name, cuisine, neighborhood)
VALUES ("Veracruz All Natural", "Mexican", "4208 Manchaca Rd. 78704"), 
("Gordoughs Big Fat Donuts", "American", "1503 South First Street 78704"),
("Con Madre Kitchen", "Mexican", "628 E Oltorf St"),
("Pueblo Viejo Taco Truck", "Mexican", "121 Pickle Rd"),
("Mama Mal's Italian Cuisine Food Truck", "Southern Italian", "1320 S Lamar Blvd"),
("Tamale Addiction", "Mexican", "2340 S Lamar Blvd"),
("IL Saporis Italian", "Italian", "603 W Live Oak St"),
("Luke's Inside Out", "Sandwich", "1109 S Lamar Blvd"),
("Pitalicious", "Mediterranean", "1503 S Congress Ave"),
("Cannone Cucina Italiana", "Italian", "1720 Barton Springs Rd");






