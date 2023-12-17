CREATE DATABASE IF NOT EXISTS contacto;

USE contacto;

CREATE TABLE IF NOT EXISTS contacto_formulario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    descripcion TEXT
);
