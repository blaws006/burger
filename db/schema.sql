
create database burgers_db,
use burgers_db
create table burgers(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(45) NOT NULL,
devoured bit(1) NOT NULL,
date DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY_KEY (id)
);