import mysql.connector as msql
from mysql.connector import Error
import pandas as pd
irisData = pd.read_csv('GlobalLandTemperaturesByCity.csv',index_col=False)
try:
    conn = msql.connect(host='127.0.0.1', database='weather', user='root', password='dwasdrfyang205')
    if conn.is_connected():
        cursor = conn.cursor()
        cursor.execute("select database();")
        record = cursor.fetchone()
        print("You're connected to database: ", record)
        cursor.execute('DROP TABLE IF EXISTS weather_data;')
        print('Creating table....')
# in the below line please pass the create table statement which you want #to create
        cursor.execute("CREATE TABLE weather_data(tempID int,Year int,Month int,Day int,AverageTemperature double,AverageTemperatureUncertainty double,City varchar(255),Country varchar(255),Latitude double,Longitude double)")
        print("Table is created....")
        #loop through the data frame
        for i,row in irisData.iterrows():
            #here %S means string values 
            sql = "INSERT INTO weather.weather_data VALUES (%d,%d,%d,%d,%f,%f,%s,%s,%f,%f)"
            cursor.execute(sql, tuple(row))
            print("Record inserted")
            # the connection is not auto committed by default, so we must commit to save our changes
            conn.commit()
except Error as e:
            print("Error while connecting to MySQL", e)