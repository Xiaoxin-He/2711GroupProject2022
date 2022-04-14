import csv
import MySQLdb
# open the connection to the MySQL server.
# using MySQLdb
mydb = MySQLdb.connect(host='127.0.0.1', user='root', passwd='dwasdrfyang205', db='weather')
cursor = mydb.cursor()
csv_data = csv.reader('GlobalLandTemperaturesByCity.csv')
# execute and insert the csv into the database.
for row in csv_data:
	cursor.execute('INSERT INTO weather.weather_data(tempID,Year,Month,Day, AverageTemperature, AverageTemperatureUncertainty, City, Country, Latitude,Longitude)''VALUES(%d, %d, %d, %d, %f, %f, %s, %s, %f, %f)',row)
mydb.commit()
cursor.close()
