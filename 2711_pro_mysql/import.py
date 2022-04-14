import mysql.connector as msql
from mysql.connector import Error
try:
    conn = msql.connect(host='127.0.0.1', user='root',  
                        password='dwasdrfyang205')#give ur username, password
    if conn.is_connected():
        cursor = conn.cursor()
        cursor.execute("CREATE DATABASE weather")
        print("Database is created")
except Error as e:
    print("Error while connecting to MySQL", e)