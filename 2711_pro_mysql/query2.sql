create view q2 as
	(select Country, Year, avg(AverageTemperature) AS AverageTemperature
    from ((Fact 
    INNER JOIN LOCATION_DIM ON Fact.location_id = LOCATION_DIM.id)
    INNER JOIN TIME_DIM ON Fact.time_id = TIME_DIM.id)
    group by Country, Year
    );