create view q1 as
	(select City, avg(AverageTemperature) AS AverageTemperature
    from ((Fact 
    INNER JOIN LOCATION_DIM ON Fact.location_id = LOCATION_DIM.id)
    INNER JOIN TIME_DIM ON Fact.time_id = TIME_DIM.id)
    where Month = 12 or Month = 1 or Month = 2
    group by City
    );