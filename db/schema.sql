-- DROP DATABASE IF EXISTS fmf;
-- CREATE DATABASE fmf;
-- USE fmf;

-- CREATE TABLE trucks (
--     id INT NOT NULL AUTO_INCREMENT,
--     name VARCHAR(45) NULL,
--     cuisine VARCHAR (45),
--     neighborhood VARCHAR (45),
--     createdAt DATE,
--     updatedAt DATE,
--     PRIMARY KEY (id)
-- );

-- INSERT INTO trucks (name, cuisine, neighborhood, createdAt, UpdatedAt)
-- VALUES ("Veracruz All Natural", "Mexican", "4208 Manchaca Rd. 78704", now(), now()), 
-- ("Gordoughs Big Fat Donuts", "American", "1503 South First Street 78704", now(), now()),
-- ("Con Madre Kitchen", "Mexican", "628 E Oltorf St", now(), now()),
-- ("Pueblo Viejo Taco Truck", "Mexican", "121 Pickle Rd", now(), now()),
-- ("Mama Mal's Italian Cuisine Food Truck", "Southern Italian", "1320 S Lamar Blvd", now(), now()),
-- ("Tamale Addiction", "Mexican", "2340 S Lamar Blvd", now(), now()),
-- ("IL Saporis Italian", "Italian", "603 W Live Oak St", now(), now()),
-- ("Luke's Inside Out", "Sandwich", "1109 S Lamar Blvd", now(), now()),
-- ("Pitalicious", "Mediterranean", "1503 S Congress Ave", now(), now()),
-- ("Cannone Cucina Italiana", "Italian", "1720 Barton Springs Rd", now(), now());
-- SELECT * FROM fmf.trucks;
-- -----------------



DROP DATABASE IF EXISTS fmf;
CREATE DATABASE fmf;
USE fmf;
CREATE TABLE trucks (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NULL,
    cuisine VARCHAR (45),
    neighborhood VARCHAR (45),
    latitude VARCHAR (45),
    longitude VARCHAR (45),
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY (id)
);
INSERT INTO trucks (name, cuisine, neighborhood, latitude, longitude, createdAt, UpdatedAt)
VALUES ("Veracruz All Natural", "Mexican", "4208 Manchaca Rd. 78704", "30.263147", "-97.744425", now(), now()), 
("Gordoughs Big Fat Donuts", "American", "1503 South First Street 78704", "30.249897", "-97.754783", now(), now()),
("Con Madre Kitchen", "Mexican", "628 E Oltorf St", "30.237276", "-97.748874", now(), now()),
("Pueblo Viejo Taco Truck", "Mexican", "121 Pickle Rd", "30.227413", "-97.762834", now(), now()),
("Mama Mal's Italian Cuisine Food Truck", "Southern Italian", "1320 S Lamar Blvd", "30.253747", "-97.763548", now(), now()),
("Tamale Addiction", "Mexican", "2340 S Lamar Blvd", "30.247374", "-97.776833", now(), now()),
("IL Saporis Italian", "Italian", "603 W Live Oak St",  "30.244619", "-97.758060", now(), now()),
("Luke's Inside Out", "Sandwich", "1109 S Lamar Blvd", "30.255304", "-97.761830", now(), now()),
("Pitalicious", "Mediterranean", "1503 S Congress Ave", "30.248802", "-97.749749", now(), now()),
("Cannone Cucina Italiana", "Italian", "1720 Barton Springs Rd", "30.263801", "-97.762879", now(), now());
SELECT * FROM fmf.trucks;