CREATE DATABASE IF NOT EXISTS Reservaciones;
USE Reservaciones;

CREATE TABLE IF NOT EXISTS Reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    comensales INT,
    fecha DATE,
    preferencia VARCHAR(255),
    nombre_reserva VARCHAR(255)
);
