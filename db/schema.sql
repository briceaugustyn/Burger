-- Created the DB "wishes_db" (only works on local connections)
drop DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;


-- Created the table "wishes" 
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burgers_name varchar(30) NOT NULL,
  devoured bit NOT NULL,
  Primary KEY (id)
);