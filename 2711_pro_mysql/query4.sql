create view q4 as
	(select Country, Year, Month, avg(AverageTemperature) as AverageTemperature
    from ((Fact 
    INNER JOIN LOCATION_DIM ON Fact.location_id = LOCATION_DIM.id)
    INNER JOIN TIME_DIM ON Fact.time_id = TIME_DIM.id)
    where Country = 'Denmark' and year = 1745
    group by Month
    having avg(AverageTemperature) >= all
		(select avg(AverageTemperature)
		from ((Fact 
		INNER JOIN LOCATION_DIM ON Fact.location_id = LOCATION_DIM.id)
		INNER JOIN TIME_DIM ON Fact.time_id = TIME_DIM.id)
		where Country = 'Denmark' and year = 1745
        group by Month
        )
    );