--Creando la base de datos
CREATE DATABASE crudnodejsmysql;

--Utilizando la base de datos
use crudnodejsmysql;

--Creando tablas
CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono VARCHAR(15)
);

--Mostrando todas las tablas
SHOW TABLES;

--Ver estructura de tabla customer
describe customer;