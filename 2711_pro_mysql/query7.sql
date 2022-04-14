create view q7 as
	(select Country, City, Year, avg(AverageTemperatureUncertainty) AS AverageTemperatureUncertainty
    from ((Fact 
    INNER JOIN LOCATION_DIM ON Fact.location_id = LOCATION_DIM.id)
    INNER JOIN TIME_DIM ON Fact.time_id = TIME_DIM.id)
    where latitude > - 23.5 and latitude < 23.5
    group by Country, City, Year
    );