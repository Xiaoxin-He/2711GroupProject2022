create view q10 as
	(select Year, avg(AverageTemperature) AS AverageTemperature, avg(AverageTemperatureUncertainty) AS AverageTemperatureUncertainty
    from ((Fact 
    INNER JOIN LOCATION_DIM ON Fact.location_id = LOCATION_DIM.id)
    INNER JOIN TIME_DIM ON Fact.time_id = TIME_DIM.id)
    where Year >= 1900 and Year <= 2000
    group by Year
    order by Year
    );