SET @row_number = 0; 
INSERT INTO TIME_DIM(Year, Month, Day)
	SELECT  Year, Month, Day
	FROM raw_data
    group by Year, Month, Day;