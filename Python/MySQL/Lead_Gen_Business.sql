-- 1.
SELECT SUM(amount) as March_of_2012
FROM billing
WHERE charged_datetime >= "2012-03-01" AND charged_datetime <="2012-03-31" 

-- 2.
SELECT SUM(amount) as Revenue_from_Client
FROM billing
JOIN clients ON clients.client_id = billing.client_id
WHERE clients.client_id = 2

-- 3.


-- 4.
