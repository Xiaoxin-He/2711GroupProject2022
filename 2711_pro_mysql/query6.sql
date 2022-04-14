create view q6 as
	(select Country, avg(AverageTemperatureUncertainty) AS AverageTemperatureUncertainty
    from ((Fact 
    INNER JOIN LOCATION_DIM ON Fact.location_id = LOCATION_DIM.id)
    INNER JOIN TIME_DIM ON Fact.time_id = TIME_DIM.id)
    group by Country
    );