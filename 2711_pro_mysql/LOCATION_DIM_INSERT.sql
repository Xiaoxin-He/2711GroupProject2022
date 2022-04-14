SET @row_number = 0; 
INSERT INTO LOCATION_DIM(Country, City, Latitude, Longitude)
	SELECT  Country, City, Latitude, Longitude
	FROM raw_data
    group by Country, City, Latitude, Longitude;