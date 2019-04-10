CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE products (
	id INTEGER(10) AUTO_INCREMENT NOT NULL,
	item VARCHAR(30) NOT NULL,
	catagory VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock INTEGER(10) NOT NULL,
	PRIMARY KEY (id)
);

-- The products seeds --
INSERT INTO products (item, catagory, price, stock)
VALUES  ('Goodist Boy Dog Shampoo', 'Cosmetics', 5.75, 500),
		('Fancy Cat Nail Polish', 'Cosmetics', 6.25, 627),
		('Basic Brown Paper Bag', 'Grocery', 5.99, 300),
		('Paper Towel', 'Grocery', 4.25, 400),
		('Orin Apple', 'Produce', 0.35, 800),
		('Manila Mango', 'Produce', 0.20, 10000),
		('Stork Cold Brew Coffee', 'Grocery', 4.45, 267),
		('Organic Milk', 'Grocery', 4.50, 200),
		('Marvel Diapers', 'Children', 2.75, 476),
		('Avacado Oil', 'Grocery', 12.99, 575),
		('Nose Nanny Snot Sucker', 'Children', 1.50, 423),
		('Yoga Mat', 'Sports', 12.75, 150),
		('5lb Dumb bell', 'Sports', 7.99, 89),
		('Motorhead T-Shirt', 'Clothing', 5.55, 120),
		('Cthulhu Socks', 'Clothing', 17.88, 250),
		('Purina Cat Chow', 'Pet', 7.25, 157),
		('Bast Wet Cat Food', 'Pet', 12.50, 163),
		('Ibuprophen', 'Pharmacy', 4.95, 389),
		('Band Aid', 'Pharmacy', 3.25, 550),
		('Phish Food', 'Grocery', 3.25, 432);