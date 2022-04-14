create view q5 as
	(select Country, Year, Month, avg(AverageTemperature) as AverageTemperature
    from ((Fact 
    INNER JOIN LOCATION_DIM ON Fact.location_id = LOCATION_DIM.id)
    INNER JOIN TIME_DIM ON Fact.time_id = TIME_DIM.id)
    where Country = 'Denmark' and year = 1745 and month IN (3,4,5)
    group by Month
    );