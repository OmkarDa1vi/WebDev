create database Tasks;
use Tasks;
-- 1. Create a table employees(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), salary DECIMAL(10,2)). Insert five sample rows of your choice.
create table EmployeesTask (id INT AUTO_INCREMENT PRIMARY KEY, EmpName VARCHAR(50), Salary DECIMAL(10,2)) ;
insert into EmployeesTask (EmpName, Salary) values ( "Jethalal Gada", 150000),
											   ( "Atmanand Bhide", 100000),
                                               ("Tarak Mehta", 150000),
                                               ("Popat Lal", 12000),
                                               ("Roshan Sodhi", 130000);
                                               
-- 2. Update salaries in employees table by increasing salary by 10% for employees earning less than 50000.
update EmployeesTask set salary = salary*1.1 where salary<50000;

-- 3. Delete employees whose salary is below 20000.
delete from EmployeesTask where salary<20000;

-- 4. Create two tables students(id INT PRIMARY KEY, name VARCHAR(50)) and enrollments(id INT PRIMARY KEY, student_id INT, course VARCHAR(50)). Insert at least 3 matching student/enrollment rows, then query all students with their courses using INNER JOIN.
create table Students(id INT PRIMARY KEY, StdName VARCHAR(50));
create table EnrollmentsStd(id INT PRIMARY KEY, student_id INT, course VARCHAR(50), foreign key (student_id) references Students(id));

insert into Students(id, StdName) values (01,"Tappu"),(02, "Sonu"),(03, "Goli");
insert into EnrollmentsStd(id, student_id, course) values (01, 01, "PCM"),(02, 02, "PCB"),(03, 03, "General");

select s.id, s.StdName, e.course
from EnrollmentsStd e
inner join Students s on s.id = e.id;

-- 5. Using LEFT JOIN, list all students and show enrollments if exists; show NULL for students without enrollments.
select s.id, s.StdName, e.id, e.course
from EnrollmentsStd e
left join Students s on s.id = e.id;

-- 6. Create a table products(id INT PRIMARY KEY, name VARCHAR(50), price DECIMAL(10,2)). Add an index on name and demonstrate a SELECT using that index.
create table Products(id INT PRIMARY KEY, ProdName VARCHAR(50), Price DECIMAL(10,2));
create index IndexProd ON Products(ProdName);

insert into Products(id, ProdName,Price) values (1, 'Laptop', 75000.00),
(2, 'Smartphone', 25000.00),
(3, 'Headphones', 2000.00),
(4, 'Keyboard', 1500.00);

select * from Products where ProdName = 'Laptop';