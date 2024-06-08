CREATE DATABASE sprocket_factory_db;

USE sprocket_factory_db;

CREATE TABLE factories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255)
);

CREATE TABLE sprocket_production (
    id INT AUTO_INCREMENT PRIMARY KEY,
    factory_id INT,
    actual_production INT,
    goal_production INT,
    timestamp INT,
    FOREIGN KEY (factory_id) REFERENCES factories (id)
);

CREATE TABLE sprockets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    teeth INT,
    pitch_diameter DECIMAL(5, 2),
    outside_diameter DECIMAL(5, 2),
    pitch DECIMAL(5, 2)
);