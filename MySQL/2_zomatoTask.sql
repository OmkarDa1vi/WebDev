-- 1. Use the Restaurants databases
use Restaurants;

-- 2. Show all tables in the database
select
    *
from
    Restaurant;

-- 3. Read operation: Retrieve all columns from the Restaurants table where the City is 'New Delhi'
select
    *
from
    Restaurant
where
    City = 'New Delhi';

-- 4. Create operation: Insert a new record into the Restaurants table with specified values
-- Restaurant_Name = 'Cafe Conti', City = 'Rome', Average_Cost_for_two = 500, Cuisines = 'Italian, Pizza'
-- Note: Other columns not specified will default to NULL
insert into
    Restaurant (
        RestaurantName varchar(250),
        City varchar(250),
        Cuisine varchar(250),
        AvgCost int,
    )
values
    ('Cafe Conti', 'Rome', 'Italian', 500,);

-- 5. Update operation: Update the Average_Cost_for_two column in the Restaurants table where Restaurant_Name is 'The Table'
update Restaurant
set
    AvgCost = 2500
where
    RestaurantName = 'TheTable';

-- 6. Delete operation: Remove the record from the Restaurants table where Restaurant_Name is 'The Table'
delete from Restaurant
where
    RestaurantName = 'The Table';

-- 7. Basic select statement: Retrieve all columns from the Restaurants table
select
    *
from
    Restaurant;

-- 8. Displaying a single column: Retrieve only the Restaurant_Name column from the Restaurants table
select
    RestaurantName
from
    Restaurant;

-- 9. Selecting multiple columns: Retrieve Restaurant_Name and City columns from the Restaurants table
select
    RestaurantName,
    City
from
    Restaurant;

-- 10. Filtering data using WHERE: Retrieve Restaurant_Name and City from Restaurants table where City is 'Mumbai'
select
    RestaurantName,
    City
from
    Restaurant
where
    City = 'Mumbai';

-- 11. Displaying specific details: Retrieve Restaurant_Name, City, and Cuisines from Restaurants table where City is 'Mumbai'
select
    RestaurantName,
    City,
    Cuisine
from
    Restaurant
where
    City = 'Mumbai';

-- 12. Using Limit: Retrieve the first 5 rows from the Restaurants table
select
    *
from
    Restaurant
Limit
    5;

-- 13. Using Order By: Retrieve all columns from the Restaurants table, ordered by Average_Cost_for_two in descending order
select
    *
from
    Restaurant
order by
    AvgCost desc;

-- 14. Using Count: Count the total number of rows in the Restaurants table
select
    count(*)
from
    Restaurant;

-- 15. Using Average: Calculate the average rating from the Restaurants table
select
    avg(Ratings)
from
    Restaurant;

-- 16. Using Sum: Calculate the total number of votes from the Restaurants table
select
    sum(Votes)
from
    Restaurant;

-- 17. Using Limit with Orderby: Retrieve the top 10 rows from the Restaurants table, ordered by rating in descending order
select
    *
from
    Restaurant
order by
    Ratings desc
limit
    10;