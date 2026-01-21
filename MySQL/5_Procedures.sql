use zomato;
-- creating a procedure to add restos
DELIMITER $$ create procedure AddRestos(
    in Restaurant_Name varchar(255),
    in City varchar(255),
    in rating int,
    in Cuisines varchar(255)
) begin
insert into zomato (Restaurant_Name, City, rating, Cuisines)
values (Restaurant_Name, City, rating, Cuisines);
end $$ DELIMITER;
call AddRestos("La Cuisin", "New Delhi", 4.8, "Italian");
select *
from zomato;
DELIMITER @@ create procedure FindRestos(
    in rating_n int,
    in City_n varchar(255),
    in Cuisines_n varchar(255)
) begin
select *
from zomato
where rating >= rating_n
    and City = City_n
    and Cuisines = Cuisines_n;
end @@ DELIMITER call FindRestos(4.0, "Mumbai", "Thai");