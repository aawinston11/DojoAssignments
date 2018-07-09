-- 1.
SELECT name as Country, language as Language, percentage as Percentage
FROM languages
JOIN countries ON languages.country_id = countries.id
WHERE language = "Slovene"
ORDER BY percentage DESC;

-- 2.
SELECT countries.name as Name, COUNT(cities.name) as Number_of_Cities
FROM cities
JOIN countries ON cities.country_id = countries.id
GROUP BY countries.name
ORDER BY countries.name

-- 3.
SELECT cities.name as Name, cities.population as Population
FROM cities
JOIN countries ON cities.country_id = countries.id
WHERE countries.name = "Mexico" AND cities.population > 500000
ORDER BY cities.population DESC

-- 4.
SELECT countries.name as Name, language as Language, percentage as Percentage
FROM languages
JOIN countries ON languages.country_id = countries.id
WHERE languages.percentage > 89
ORDER BY Percentage DESC;

-- 5.
SELECT name as Name, surface_area as Surface_Area, population as Population
From countries
WHERE surface_area < 501 AND population > 100000

-- 6.
SELECT name as Name, capital as Captial, life_expectancy as Life_Expectancy, government_form as Form_of_Government
FROM countries
WHERE government_form = "Constitutional Monarchy" AND capital > 200 AND life_expectancy > 75

-- 7.
SELECT countries.name as Country_Name, cities.name as City_Name, cities.district as District, cities.population as Population
FROM cities
JOIN countries ON cities.country_id = countries.id
WHERE countries.name = "Argentina" AND cities.district = "Buenos Aires" AND cities.population > 500000

-- 8.
SELECT region as Regions, count(name) as Number_of_Countries
from countries
GROUP BY regions
ORDER BY regions;