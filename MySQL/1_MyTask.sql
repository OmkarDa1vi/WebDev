create database Restaurants;
-- using the database   
use Restaurants;

create table
    Restaurant (
        id INT PRIMARY KEY auto_increment,
        RestaurantName varchar(250),
        City varchar(250),
        Cuisine varchar(250),
        AvgCost int,
        Currency varchar(20),
        Delivery boolean,
        PriceRange int,
        Ratings int,
        Votes varchar(15),
        TableBooking boolean
    );

INSERT INTO
    Restaurant (
        RestaurantName,
        City,
        Cuisine,
        AvgCost,
        Currency,
        Delivery,
        PriceRange,
        Ratings,
        Votes,
        TableBooking
    )
VALUES
    (
        'Peshawri',
        'Mumbai',
        'North Indian',
        3500,
        'INR',
        false,
        4,
        5,
        '1200',
        true
    ),
    (
        'Dakshin',
        'Chennai',
        'South Indian',
        2500,
        'INR',
        false,
        4,
        5,
        '850',
        true
    ),
    (
        'Karim’s',
        'Delhi',
        'Mughlai',
        800,
        'INR',
        true,
        2,
        4,
        '2500',
        false
    ),
    (
        'Peter Cat',
        'Kolkata',
        'Continental',
        1200,
        'INR',
        true,
        3,
        5,
        '3100',
        true
    ),
    (
        'MTR (Mavalli Tiffin Rooms)',
        'Bengaluru',
        'South Indian',
        400,
        'INR',
        true,
        1,
        5,
        '4500',
        false
    ),
    (
        'Tunday Kababi',
        'Lucknow',
        'Awadhi',
        600,
        'INR',
        true,
        2,
        4,
        '1800',
        false
    ),
    (
        'Vidyarthi Bhavan',
        'Bengaluru',
        'South Indian',
        200,
        'INR',
        false,
        1,
        5,
        '5000',
        false
    ),
    (
        'Britannia & Co.',
        'Mumbai',
        'Parsi',
        1500,
        'INR',
        false,
        3,
        4,
        '900',
        false
    ),
    (
        'Paranthe Wali Gali',
        'Delhi',
        'North Indian',
        300,
        'INR',
        true,
        1,
        4,
        '1200',
        false
    ),
    (
        'Chutneys',
        'Hyderabad',
        'South Indian',
        700,
        'INR',
        true,
        2,
        4,
        '2100',
        true
    ),
    (
        'Flurys',
        'Kolkata',
        'Bakery',
        1000,
        'INR',
        true,
        3,
        4,
        '1500',
        false
    ),
    (
        'Paragon Restaurant',
        'Kozhikode',
        'Malabar',
        900,
        'INR',
        true,
        2,
        5,
        '3400',
        true
    ),
    (
        'Gajalee',
        'Mumbai',
        'Seafood',
        2200,
        'INR',
        true,
        4,
        4,
        '750',
        true
    ),
    (
        'Shree Thaker Bhojanalay',
        'Mumbai',
        'Gujarati',
        800,
        'INR',
        false,
        2,
        5,
        '1100',
        false
    ),
    (
        'Bawarchi',
        'Hyderabad',
        'Biryani',
        600,
        'INR',
        true,
        2,
        4,
        '15000',
        false
    ),
    (
        'Glenary’s',
        'Darjeeling',
        'Continental',
        1200,
        'INR',
        true,
        3,
        4,
        '800',
        true
    ),
    (
        'Pind Balluchi',
        'Gurgaon',
        'North Indian',
        1100,
        'INR',
        true,
        3,
        3,
        '500',
        true
    ),
    (
        'Sagar Ratna',
        'Chandigarh',
        'South Indian',
        600,
        'INR',
        true,
        2,
        4,
        '950',
        false
    ),
    (
        'Agrawal’s Thali',
        'Indore',
        'Rajasthani',
        500,
        'INR',
        true,
        1,
        4,
        '400',
        false
    ),
    (
        'The Table',
        'Mumbai',
        'European',
        4500,
        'INR',
        false,
        4,
        5,
        '600',
        true
    );

select
    *
from
    Restaurant;

-- Instructions for selecting various information from the Restaurants table: 
--  1. Select the names of all the restaurants.
select
    RestaurantName
from
    Restaurant;

-- 2. Select the cities where the restaurants are located
select
    RestaurantName,
    City
from
    Restaurant;

-- 3. Select the cuisines offered by the restaurants
select
    RestaurantName,
    Cuisine
from
    Restaurant;

-- 4. Select the average cost for two at each restaurant.
select
    RestaurantName,
    AvgCost
from
    Restaurant;

-- 5. Select the currencies used by the restaurants.
select
    RestaurantName,
    Currency
from
    Restaurant;

-- 6. Select whether online delivery is available at each restaurant
select
    RestaurantName,
    Delivery
from
    Restaurant;

-- 7. Select the price range of each restaurant. 
select
    RestaurantName,
    PriceRange
from
    Restaurant;

-- 8. Select the ratings of each restaurant.
select
    RestaurantName,
    Ratings
from
    Restaurant;

-- 9. Select the voting counts for each restaurant. 
select
    RestaurantName,
    Votes
from
    Restaurant;

-- 10. Select whether table booking is available at each restaurant
select
    RestaurantName,
    TableBooking
from
    Restaurant;

-- 11.Retrieve the names of restaurants located in Mumbai.
select
    RestaurantName,
    TableBooking
from
    Restaurant
where
    City = Mumbai;