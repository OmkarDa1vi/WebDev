create schema GadaP_Electronics;
use Gada_Electronics;
create table Categories (
    CategoryID INT PRIMARY KEY,
    CategoryName VARCHAR(50),
    Description VARCHAR(255)
);
insert into Categories (CategoryID, CategoryName, Description)
values (
        1,
        'Laptops & Computers',
        'Portable and desktop computers, including gaming rigs and workstations.'
    ),
    (
        2,
        'Smartphones & Tablets',
        'Mobile phones, iPads, and Android tablets with latest cellular tech.'
    ),
    (
        3,
        'Audio & Headphones',
        'Bluetooth speakers, noise-canceling headphones, and home theater systems.'
    ),
    (
        4,
        'Cameras & Photography',
        'DSLRs, mirrorless cameras, lenses, and action cameras like GoPro.'
    ),
    (
        5,
        'Wearable Technology',
        'Smartwatches, fitness trackers, and health monitoring devices.'
    ),
    (
        6,
        'Smart Home',
        'Smart bulbs, security cameras, and voice-controlled assistants.'
    ),
    (
        7,
        'Television & Video',
        '4K OLED/QLED TVs, projectors, and streaming devices.'
    ),
    (
        8,
        'Gaming Consoles',
        'PlayStation, Xbox, Nintendo Switch, and related peripherals.'
    ),
    (
        9,
        'Computer Peripherals',
        'Keyboards, mice, monitors, and external hard drives.'
    ),
    (
        10,
        'Home Appliances',
        'Tech-enabled kitchen appliances, vacuum cleaners, and air purifiers.'
    );
create table Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(50) NOT NULL,
    CategoryID INT,
    Price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);
INSERT INTO Products (ProductID, ProductName, CategoryID, Price)
VALUES (101, 'MacBook Pro 14', 1, 169900.00),
    (102, 'Dell XPS 13', 1, 115000.00),
    (103, 'iPhone 15 Pro', 2, 134900.00),
    (104, 'Samsung Galaxy S24', 2, 79999.00),
    (105, 'Sony WH-1000XM5', 3, 29900.00),
    (106, 'Bose SoundLink II', 3, 18500.00),
    (107, 'Canon EOS R5', 4, 320000.00),
    (108, 'GoPro Hero 12', 4, 45000.00),
    (109, 'Apple Watch Series 9', 5, 41900.00),
    (110, 'Fitbit Charge 6', 5, 14999.00),
    (111, 'Philips Hue Starter Kit', 6, 9500.00),
    (112, 'Amazon Echo Dot (5th Gen)', 6, 5499.00),
    (113, 'Sony Bravia 55-inch 4K', 7, 75000.00),
    (114, 'Apple TV 4K', 7, 14900.00),
    (115, 'PlayStation 5', 8, 54990.00),
    (116, 'Nintendo Switch OLED', 8, 32000.00),
    (117, 'Logitech MX Master 3S', 9, 9500.00),
    (118, 'LG 27-inch 4K Monitor', 9, 28000.00),
    (119, 'Dyson V15 Vacuum', 10, 65000.00),
    (120, 'Instant Pot Duo', 10, 12500.00);
-- Display Table Contents
select *
from Categories;
select *
from Products;

-- Inner Join
SELECT p.ProductID,
    p.ProductName,
    c.CategoryName
FROM Products p
    INNER JOIN Categories c ON p.CategoryID = c.CategoryID;

-- Left Join 
SELECT p.ProductID,
    p.ProductName,
    c.CategoryName
FROM Products p
    LEFT JOIN Categories c ON p.CategoryID = c.CategoryID;

-- Right Join 
SELECT p.ProductID,
    p.ProductName,
    c.CategoryName
FROM Products p
    RIGHT JOIN Categories c ON p.CategoryID = c.CategoryID;

-- CROSS Join 
SELECT p.ProductName,
    c.CategoryName
FROM Products p
    CROSS JOIN Categories c;

-- SELF Join 
SELECT p1.ProductID AS Product1_ID,
    p1.ProductName AS Product1,
    p2.ProductID AS Product2_ID,
    p2.ProductName AS Product2,
    p1.CategoryID
FROM Products p1
    JOIN Products p2 ON p1.CategoryID = p2.CategoryID
    AND p1.ProductID <> p2.ProductID;