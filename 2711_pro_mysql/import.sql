LOAD DATA LOCAL INFILE '/Users/linyang/Desktop/GlobalLandTemperaturesByCity.csv'
INTO TABLE sys.sys_config
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '/n'
IGNORE 1 ROWS;