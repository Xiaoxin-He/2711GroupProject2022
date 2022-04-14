SELECT city,max(AverageTemperature)
FROM weather.weather_data6
group by(City)