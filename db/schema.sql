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
("Gordoughs Big Fat Donuts", "American", "1503 South First Street 78704");





