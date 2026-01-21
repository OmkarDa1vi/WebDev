use zomato;
CREATE TABLE RestaurantOwners (
    OwnerID INT PRIMARY KEY AUTO_INCREMENT,
    RestaurantName VARCHAR(255) NOT NULL,
    OwnerName VARCHAR(255) NOT NULL,
    Age INT,
    Gender VARCHAR(20)
);
INSERT INTO RestaurantOwners (RestaurantName, OwnerName, Age, Gender) VALUES
('Spice Village', 'Aarav Mehta', 42, 'Male'),
('The Curry House', 'Priya Sharma', 35, 'Female'),
('Urban Tadka', 'Rohan Gupta', 29, 'Male'),
('Green Leaf', 'Anjali Desai', 48, 'Female'),
('Ocean Pearl', 'Vikram Singh', 55, 'Male'),
('Biryani Blues', 'Sana Khan', 31, 'Female'),
('Flavors of Punjab', 'Harpreet Singh', 40, 'Male'),
('South Feast', 'Karthik Raja', 38, 'Male'),
('The Sweet Spot', 'Meera Iyer', 27, 'Female'),
('Midnight Cravings', 'Arjun Kapoor', 24, 'Male'),
('Royal Thali', 'Sunita Verma', 52, 'Female'),
('Coastal Cravings', 'Nitin Kamath', 45, 'Male'),
('Bistro 24', 'Neha Reddy', 33, 'Female'),
('The Grill Room', 'Sanjay Dutt', 50, 'Male'),
('Healthy Bites', 'Pooja Hegde', 30, 'Female'),
('Vintage Cafe', 'Aditya Birla', 62, 'Male'),
('Sizzling Tandoor', 'Rajesh Khanna', 47, 'Male'),
('Noodle Bar', 'Lin Chen', 36, 'Female'),
('Desi Dhaba', 'Balwinder Singh', 58, 'Male'),
('Modern Plate', 'Ishita Paul', 28, 'Female');

create view Dekh_Bhai_Dekh as 
select z.restaurant_id, z.Restaurant_Name , r.OwnerName, r.Age
from restaurantowners r
join zomato z on z.Restaurant_Name = r.RestaurantName;

select * from Dekh_bhai_Dekh;