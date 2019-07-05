
CREATE DATABASE airbnb;

USE airbnb;


CREATE TABLE HOUSES (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    house_desc TEXT,
    owner_name VARCHAR(255),
    total_rooms INTEGER,
    total_beds INTEGER,
    total_baths INTEGER,
    total_guests INTEGER,
    UNIQUE KEY ownerNames (owner_name)
);


CREATE TABLE IMAGES (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    image_url TEXT NULL,
    house_id INTEGER NULL,
    UNIQUE KEY unique_img_url 
    (image_url),
    FOREIGN KEY (house_id)
      REFERENCES HOUSES (id)
)

CREATE TABLE AMENITIES (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    items TEXT NULL,
    category TEXT,
    house_id INTEGER,
    FOREIGN KEY (house_id) REFERENCES HOUSES.id
)