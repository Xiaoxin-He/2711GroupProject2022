create view q3 as
	(select City, max(AverageTemperature) as AverageTemperature
    from ((Fact 
    INNER JOIN LOCATION_DIM ON Fact.location_id = LOCATION_DIM.id)
    INNER JOIN TIME_DIM ON Fact.time_id = TIME_DIM.id)
    group by City
    );