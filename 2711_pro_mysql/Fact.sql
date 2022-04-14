INSERT INTO Fact
	select L.id as location_id, T.id as time_id, W.AverageTemperature as AverageTemperature, 
    W.AverageTemperatureUncertainty as AverageTemperatureUncertainty
	FROM weather_data6 W, LOCATION_DIM L, TIME_DIM T
	where W.Year = T.Year and W.Month = T.Month and W.Day = T.Day
	and W.City = L.City and W.Country = L.Country and W.Latitude = L.Latitude
	and W.Longitude = L.Longitude;