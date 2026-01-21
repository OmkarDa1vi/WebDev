-- 1. Use the zomato_db database
use zomato;
-- 2. Show all tables in the databases
select *
from zomato;
-- 3. Read operation: Retrieve all columns from the Restaurants table where the City is 'New Delhi'
select *
from zomato
where City = 'New Delhi';
-- 4. Create operation: Insert a new record into the Restaurants table with specified values
-- Restaurant_Name = 'Cafe Conti', City = 'Rome', Average_Cost_for_two = 500, Cuisines = 'Italian, Pizza'
-- Note: Other columns not specified will default to NULL
insert into zomato (
        Restaurant_Name,
        City,
        Average_cost_for_two,
        Cuisines
    )
values ('Cafe Conti', 'Rome', 500, 'Italian, Pizza');
-- 5. Update operation: Update the Average_Cost_for_two column in the Restaurants table where Restaurant_Name is 'Maharaja Bhog'
update zomato
set Average_Cost_for_two = 1000
where Restaurant_Name = 'Maharaja Bhog';
-- 6. Delete operation: Remove the record from the Restaurants table where Restaurant_Name is 'Maharaja Bhog'
delete from zomato
where Restaurant_name = 'Maharaja Bhog';
-- 7. Basic select statement: Retrieve all columns from the Restaurants table
select *
from zomato;
-- 8. Displaying a single column: Retrieve only the Restaurant_Name column from the Restaurants table
select Restaurant_Name
from zomato;
-- 9. Selecting multiple columns: Retrieve Restaurant_Name and City columns from the Restaurants table
select Restaurant_Name,
    City
from zomato;
-- 10. Filtering data using WHERE: Retrieve Restaurant_Name and City from Restaurants table where City is 'Makati City'
select Restaurant_Name,
    City
from zomato
where City = 'Makati City';
-- 11. Displaying specific details: Retrieve Restaurant_Name, City, and Cuisines from Restaurants table where City is 'Makati City'
select Restaurant_Name,
    City,
    Cuisines
from zomato
where City = 'Makati City';
-- 12. Using Limit: Retrieve the first 5 rows from the Restaurants table
select *
from zomato
limit 5;
-- 13. Using Order By: Retrieve all columns from the Restaurants table, ordered by Average_Cost_for_two in descending order
select *
from zomato
order by Average_Cost_for_two desc;
-- 14. Using Count: Count the total number of rows in the Restaurants table
select count(*)
from zomato;
-- 15. Using Average: Calculate the average rating from the Restaurants table
select avg(rating)
from zomato;
-- 16. Using Sum: Calculate the total number of votes from the Restaurants table
select sum(votes)
from zomato;
-- 17. Using Limit with Orderby: Retrieve the top 10 rows from the Restaurants table, ordered by rating in descending order
select *
from zomato
order by rating desc
limit 10;