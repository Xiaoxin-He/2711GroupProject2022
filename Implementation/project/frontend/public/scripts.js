
var form = document.getElementById("form");
var selectDatabaseOptions = document.getElementById("database");
var inputs = document.getElementsByTagName("input");
var submitButton = document.getElementById("submitButton");
var queryRuntime = document.getElementById("queryRuntime");
var results = document.getElementById("results");

var beachball = document.createElement("div");
beachball.setAttribute("class", "beachball");

submitButton.addEventListener("submit", function(event){
    console.log("SUBMIT")
});

var neo4j1 = [
    {
      "City": "A Coruña",
      "Average_temp": 8.675204545454553
    },
    {
      "City": "Aachen",
      "Average_temp": 1.074089646464646
    },
    {
      "City": "Aalborg",
      "Average_temp": 0.09576262626262624
    },
    {
      "City": "Aba",
      "Average_temp": 26.80851494252876
    },
    {
      "City": "Abadan",
      "Average_temp": 13.977566473988434
    },
    {
      "City": "Abakaliki",
      "Average_temp": 26.808514942528728
    },
    {
      "City": "Abakan",
      "Average_temp": -18.90506044905008
    },
    {
      "City": "Abbotsford",
      "Average_temp": 0.3525347985347981
    },
    {
      "City": "Abengourou",
      "Average_temp": 27.037332608695657
    },
    {
      "City": "Abeokuta",
      "Average_temp": 27.236083333333326
    }]
var neo4j2 = 
[{
  "country": "Denmark",
  "Average_temp": 7.695134554643073
},
{
  "country": "Turkey",
  "Average_temp": 13.712569727653645
},
{
  "country": "Kazakhstan",
  "Average_temp": 5.393809097127226
},
{
  "country": "China",
  "Average_temp": 9.424935709772594
},
{
  "country": "Spain",
  "Average_temp": 13.941663519122926
},
{
  "country": "Germany",
  "Average_temp": 8.03892867972211
},
{
  "country": "Nigeria",
  "Average_temp": 26.71273598537219
},
{
  "country": "Iran",
  "Average_temp": 15.93324900279215
},
{
  "country": "Russia",
  "Average_temp": 3.5894116099325757
},
{
  "country": "Canada",
  "Average_temp": 6.383751080217921
}]
var neo4j3 = [
    {
      "City": "A Coruña",
      "highest_temperatur": 22.052,
      "Year": 1761
    },
    {
      "City": "Aachen",
      "highest_temperatur": 22.812,
      "Year": 2006
    },
    {
      "City": "Aalborg",
      "highest_temperatur": 20.883,
      "Year": 1997
    },
    {
      "City": "Aba",
      "highest_temperatur": 30.036,
      "Year": 2007
    },
    {
      "City": "Abadan",
      "highest_temperatur": 38.531,
      "Year": 2012
    },
    {
      "City": "Abakaliki",
      "highest_temperatur": 30.036,
      "Year": 2007
    },
    {
      "City": "Abakan",
      "highest_temperatur": 21.503,
      "Year": 1969
    },
    {
      "City": "Abbotsford",
      "highest_temperatur": 18.55,
      "Year": 1958
    },
    {
      "City": "Abengourou",
      "highest_temperatur": 30.743,
      "Year": 1998
    },
    {
      "City": "Abeokuta",
      "highest_temperatur": 30.313,
      "Year": 2010
    }]
var neo4j4 =[
    {
      "highest_average": 4.042
    }
  ]
var neo4j5 = [
    {
      "average_temperature": 2.0854999999999997
    }
  ]
var neo4j6 = [
    {
      "co.country": "Denmark",
      "avg(t.AverageTemperatureUncertainty)": 1.6687204674668346
    },
    {
      "co.country": "Turkey",
      "avg(t.AverageTemperatureUncertainty)": 1.2416325069832355
    },
    {
      "co.country": "Kazakhstan",
      "avg(t.AverageTemperatureUncertainty)": 1.1997625854993028
    },
    {
      "co.country": "China",
      "avg(t.AverageTemperatureUncertainty)": 0.9361211387250726
    },
    {
      "co.country": "Spain",
      "avg(t.AverageTemperatureUncertainty)": 1.4621488957191326
    },
    {
      "co.country": "Germany",
      "avg(t.AverageTemperatureUncertainty)": 1.623561655085284
    },
    {
      "co.country": "Nigeria",
      "avg(t.AverageTemperatureUncertainty)": 0.6893575792712848
    },
    {
      "co.country": "Iran",
      "avg(t.AverageTemperatureUncertainty)": 1.0002266653370546
    },
    {
      "co.country": "Russia",
      "avg(t.AverageTemperatureUncertainty)": 1.3862082129349096
    },
    {
      "co.country": "Canada",
      "avg(t.AverageTemperatureUncertainty)": 1.0625044148036866
    }]
var neo4j7 = [
    {
      "t.Year": 1787,
      "avg(t.AverageTemperatureUncertainty)": 3.1984000000000004
    },
    {
      "t.Year": 1788,
      "avg(t.AverageTemperatureUncertainty)": 2.4638823529411766
    },
    {
      "t.Year": 1789,
      "avg(t.AverageTemperatureUncertainty)": 2.3911818181818174
    },
    {
      "t.Year": 1790,
      "avg(t.AverageTemperatureUncertainty)": 2.7229722222222223
    },
    {
      "t.Year": 1791,
      "avg(t.AverageTemperatureUncertainty)": 2.3967777777777775
    },
    {
      "t.Year": 1792,
      "avg(t.AverageTemperatureUncertainty)": 2.328933333333333
    },
    {
      "t.Year": 1793,
      "avg(t.AverageTemperatureUncertainty)": 2.9144166666666664
    },
    {
      "t.Year": 1794,
      "avg(t.AverageTemperatureUncertainty)": 2.2776666666666663
    },
    {
      "t.Year": 1795,
      "avg(t.AverageTemperatureUncertainty)": 2.676090909090909
    }]
var neo4j8 = [
    {
      "City": "Arhus",
      "Average_Temperature": 7.695134554643087
    },
    {
      "City": "Çorlu",
      "Average_Temperature": 13.3190123183828
    },
    {
      "City": "Çorum",
      "Average_Temperature": 9.957552993916082
    },
    {
      "City": "Öskemen",
      "Average_Temperature": 1.308671558049203
    },
    {
      "City": "Ürümqi",
      "Average_Temperature": 5.930795336787558
    },
    {
      "City": "A Coruña",
      "Average_Temperature": 13.147277321541342
    },
    {
      "City": "Aachen",
      "Average_Temperature": 8.825172773215417
    },
    {
      "City": "Aalborg",
      "Average_Temperature": 7.695134554643094
    },
    {
      "City": "Aba",
      "Average_Temperature": 26.612824207492807
    },
    {
      "City": "Abadan",
      "Average_Temperature": 25.03474879459979
    }] 
var neo4j9 = [
    {
      "Year": 1743,
      "Average_Temperature": 5.193059701492537
    },
    {
      "Year": 1744,
      "Average_Temperature": 10.849167910447754
    },
    {
      "Year": 1745,
      "Average_Temperature": 2.0342723880597027
    },
    {
      "Year": 1750,
      "Average_Temperature": 10.167325513196488
    },
    {
      "Year": 1751,
      "Average_Temperature": 10.330114919354841
    },
    {
      "Year": 1752,
      "Average_Temperature": 4.635729797979795
    },
    {
      "Year": 1753,
      "Average_Temperature": 9.889574444444445
    },
    {
      "Year": 1754,
      "Average_Temperature": 9.827783908045975
    },
    {
      "Year": 1755,
      "Average_Temperature": 9.303893258426973
    },
    {
      "Year": 1756,
      "Average_Temperature": 10.139581632653055
    }]
var neo4j10 = [
    {
      "Year": 1901,
      "Average_Temperature": 18.61112230514096,
      "Average_Temperature_Uncertainty": 0.7549794776119417
    },
    {
      "Year": 1902,
      "Average_Temperature": 18.57229912935323,
      "Average_Temperature_Uncertainty": 0.7242630597014921
    },
    {
      "Year": 1903,
      "Average_Temperature": 18.406392412935386,
      "Average_Temperature_Uncertainty": 0.7127833747927055
    },
    {
      "Year": 1904,
      "Average_Temperature": 18.284173922056357,
      "Average_Temperature_Uncertainty": 0.6865126451077923
    },
    {
      "Year": 1905,
      "Average_Temperature": 18.326854477611988,
      "Average_Temperature_Uncertainty": 0.666603855721392
    },
    {
      "Year": 1906,
      "Average_Temperature": 18.503286691542304,
      "Average_Temperature_Uncertainty": 0.6405632255389716
    },
    {
      "Year": 1907,
      "Average_Temperature": 18.210377902155948,
      "Average_Temperature_Uncertainty": 0.606957918739633
    },
    {
      "Year": 1908,
      "Average_Temperature": 18.30861650082916,
      "Average_Temperature_Uncertainty": 0.6321774461028192
    },
    {
      "Year": 1909,
      "Average_Temperature": 18.36001741293528,
      "Average_Temperature_Uncertainty": 0.6181513266998353
    },
    {
      "Year": 1910,
      "Average_Temperature": 18.34094112769486,
      "Average_Temperature_Uncertainty": 0.613310116086235
    }]
var mongodb1 = [{
       
    "city": "Bhimavaram",
    "AverageTemperature": "25.073"
  },
{

    "city": "Binzhou",
    "AverageTemperature": "-2.371"
  },
{

    "city": "Arvada",
    "AverageTemperature": "-5.919"
  },
{

    "city": "Bantou",
    "AverageTemperature": "14.58"
  },
{

    "city": "Bansbaria",
    "AverageTemperature": "18.661"
  },
{

    "city": "Aktau",
    "AverageTemperature": "-8.201"
  },
{

    "city": "Alexandria",
    "AverageTemperature": "4.189"
  },
{

    "city": "Akita",
    "AverageTemperature": "5.188"
  },
{

    "city": "Ambattur",
    "AverageTemperature": "25.054"
  },
{

    "city": "Barasat",
    "AverageTemperature": "18.46"
  }]
var mongodb2 = [
    {
      "country": "United Kingdom",
      "year": "1780",
      "AverageTemperature": "13.638"
    },
    {
      "country": "Netherlands",
      "year": "1912",
      "AverageTemperature": "10.744"
    },
    {
      "country": "Peru",
      "year": "1994",
      "AverageTemperature": "20.047"
    },
    {
      "country": "Kazakhstan",
      "year": "1900",
      "AverageTemperature": "1.561"
    },
    {
      "country": "China",
      "year": "1896",
      "AverageTemperature": "6.081"
    },
    {
      "country": "India",
      "year": "1963",
      "AverageTemperature": "29.115"
    },
    {
      "country": "Pakistan",
      "year": "1970",
      "AverageTemperature": "14.255"
    },
    {
      "country": "Kazakhstan",
      "year": "1850",
      "AverageTemperature": "9.218"
    },
    {
      "country": "Kazakhstan",
      "year": "1983",
      "AverageTemperature": "-6.241"
    },
    {
      "country": "United States",
      "year": "1901",
      "AverageTemperature": "2.676"
    }
  ]
var mongodb3 = [
    {
        
            "city": "Bacau",
            "year": "1757",
            "AverageTemperature": "4.95"
        },
    {
        
            "city": "Bataysk",
            "year": "1946",
            "AverageTemperature": "-5.397"
        },
    {
        
            "city": "Athens",
            "year": "1892",
            "AverageTemperature": "14.577"
        },
    {
        
            "city": "Angren",
            "year": "1897",
            "AverageTemperature": "-1.116"
        },
    {
        
            "city": "Alanya",
            "year": "1827",
            "AverageTemperature": "23.622"
        },
    {
        
            "city": "Binzhou",
            "year": "1968",
            "AverageTemperature": "1.153"
        },
    {
        
            "city": "Bama",
            "year": "1958",
            "AverageTemperature": "32.871"
        },
    {
        
            "city": "Ballia",
            "year": "2009",
            "AverageTemperature": "29.832"
        },
    {
        
            "city": "Bihar",
            "year": "1818",
            "AverageTemperature": "27.675"
        },
    {
        
            "city": "Angeles",
            "year": "1980",
            "AverageTemperature": "26.713"
        },
    {
        
            "city": "Anyama",
            "year": "1986",
            "AverageTemperature": "26.625"
        
    }
]
var mongodb4 = [
    {
      "_id": "623a81a8e268507b859c3eca",
      "tempID": "18",
      "Year": "1745",
      "Month": "4",
      "Day": "1",
      "AverageTemperature": "4.042",
      "AverageTemperatureUncertainty": "1.138",
      "City": "Arhus",
      "Country": "Denmark",
      "Latitude": "56.1496278",
      "Longitude": "10.2134046"
    },
    {
      "_id": "623a81a9e268507b859c8e8e",
      "tempID": "20739",
      "Year": "1745",
      "Month": "4",
      "Day": "1",
      "AverageTemperature": "4.042",
      "AverageTemperatureUncertainty": "1.138",
      "City": "Aalborg",
      "Country": "Denmark",
      "Latitude": "57.0462626",
      "Longitude": "9.9215263"
    },
    {
      "_id": "623a81a8e268507b859c3ec9",
      "tempID": "17",
      "Year": "1745",
      "Month": "3",
      "Day": "1",
      "AverageTemperature": "0.129",
      "AverageTemperatureUncertainty": "1.088",
      "City": "Arhus",
      "Country": "Denmark",
      "Latitude": "56.1496278",
      "Longitude": "10.2134046"
    },
    {
      "_id": "623a81a9e268507b859c8e8d",
      "tempID": "20738",
      "Year": "1745",
      "Month": "3",
      "Day": "1",
      "AverageTemperature": "0.129",
      "AverageTemperatureUncertainty": "1.088",
      "City": "Aalborg",
      "Country": "Denmark",
      "Latitude": "57.0462626",
      "Longitude": "9.9215263"
    },
    {
      "_id": "623a81a8e268507b859c3ec8",
      "tempID": "16",
      "Year": "1745",
      "Month": "2",
      "Day": "1",
      "AverageTemperature": "-2.732",
      "AverageTemperatureUncertainty": "1.358",
      "City": "Arhus",
      "Country": "Denmark",
      "Latitude": "56.1496278",
      "Longitude": "10.2134046"
    },
    {
      "_id": "623a81a9e268507b859c8e8c",
      "tempID": "20737",
      "Year": "1745",
      "Month": "2",
      "Day": "1",
      "AverageTemperature": "-2.732",
      "AverageTemperatureUncertainty": "1.358",
      "City": "Aalborg",
      "Country": "Denmark",
      "Latitude": "57.0462626",
      "Longitude": "9.9215263"
    },
    {
      "_id": "623a81a8e268507b859c3ec7",
      "tempID": "15",
      "Year": "1745",
      "Month": "1",
      "Day": "1",
      "AverageTemperature": "-1.333",
      "AverageTemperatureUncertainty": "1.642",
      "City": "Arhus",
      "Country": "Denmark",
      "Latitude": "56.1496278",
      "Longitude": "10.2134046"
    },
    {
      "_id": "623a81a9e268507b859c8e8b",
      "tempID": "20736",
      "Year": "1745",
      "Month": "1",
      "Day": "1",
      "AverageTemperature": "-1.333",
      "AverageTemperatureUncertainty": "1.642",
      "City": "Aalborg",
      "Country": "Denmark",
      "Latitude": "57.0462626",
      "Longitude": "9.9215263"
    }
  ]
var mongodb5 = [
    {
      "_id": "623a81a8e268507b859c3eca",
      "tempID": "18",
      "Year": "1745",
      "Month": "4",
      "Day": "1",
      "AverageTemperature": "4.042",
      "AverageTemperatureUncertainty": "1.138",
      "City": "Arhus",
      "Country": "Denmark",
      "Latitude": "56.1496278",
      "Longitude": "10.2134046"
    },
    {
      "_id": "623a81a9e268507b859c8e8e",
      "tempID": "20739",
      "Year": "1745",
      "Month": "4",
      "Day": "1",
      "AverageTemperature": "4.042",
      "AverageTemperatureUncertainty": "1.138",
      "City": "Aalborg",
      "Country": "Denmark",
      "Latitude": "57.0462626",
      "Longitude": "9.9215263"
    },
    {
      "_id": "623a81a8e268507b859c3ec9",
      "tempID": "17",
      "Year": "1745",
      "Month": "3",
      "Day": "1",
      "AverageTemperature": "0.129",
      "AverageTemperatureUncertainty": "1.088",
      "City": "Arhus",
      "Country": "Denmark",
      "Latitude": "56.1496278",
      "Longitude": "10.2134046"
    },
    {
      "_id": "623a81a9e268507b859c8e8d",
      "tempID": "20738",
      "Year": "1745",
      "Month": "3",
      "Day": "1",
      "AverageTemperature": "0.129",
      "AverageTemperatureUncertainty": "1.088",
      "City": "Aalborg",
      "Country": "Denmark",
      "Latitude": "57.0462626",
      "Longitude": "9.9215263"
    }
  ]
var mongodb6 = [
    {
  
        "country": "Denmark",
        "year": "1757",
        "AverageTemperatureUncertainty": "11.445"
      },
    {
  
        "country": "Denmark",
        "year": "1758",
        "AverageTemperatureUncertainty": "1.744"
      },
    {
  
        "country": "Denmark",
        "year": "1755",
        "AverageTemperatureUncertainty": "1.047"
      },
    {
  
        "country": "Denmark",
        "year": "1757",
        "AverageTemperatureUncertainty": "3.497"
      },
    {
  
        "country": "Denmark",
        "year": "1757",
        "AverageTemperatureUncertainty": "7.117"
      },
    {
  
        "country": "Denmark",
        "year": "1744",
        "AverageTemperatureUncertainty": "1.454"
      },
    {
  
        "country": "Denmark",
        "year": "1757",
        "AverageTemperatureUncertainty": "4.089"
      },
    {
  
        "country": "Denmark",
        "year": "1753",
        "AverageTemperatureUncertainty": "3.695"
      },
    {
  
        "country": "Denmark",
        "year": "1751",
        "AverageTemperatureUncertainty": "2.329"
      },
    {
  
        "country": "Denmark",
        "year": "1753",
        "AverageTemperatureUncertainty": "6.727"
      }]
var mongodb7 = [
    {
      "country": "Saudi Arabia",
      "AverageTemperatureUncertainty": "AverageTemperatureUncertainty",
      "year": "1902",
      "Latitude": "18.2164282",
      "Longitude": "42.5043596"
    },
    {
      "country": "Saudi Arabia",
      "AverageTemperatureUncertainty": "AverageTemperatureUncertainty",
      "year": "1935",
      "Latitude": "18.2164282",
      "Longitude": "42.5043596"
    },
    {
      "country": "Saudi Arabia",
      "AverageTemperatureUncertainty": "AverageTemperatureUncertainty",
      "year": "1940",
      "Latitude": "18.2164282",
      "Longitude": "42.5043596"
    },
    {
      "country": "Saudi Arabia",
      "AverageTemperatureUncertainty": "AverageTemperatureUncertainty",
      "year": "1942",
      "Latitude": "18.2164282",
      "Longitude": "42.5043596"
    },
    {
      "country": "Saudi Arabia",
      "AverageTemperatureUncertainty": "AverageTemperatureUncertainty",
      "year": "1887",
      "Latitude": "18.2164282",
      "Longitude": "42.5043596"
    },
    {
      "country": "Saudi Arabia",
      "AverageTemperatureUncertainty": "AverageTemperatureUncertainty",
      "year": "1885",
      "Latitude": "18.2164282",
      "Longitude": "42.5043596"
    },
    {
      "country": "Saudi Arabia",
      "AverageTemperatureUncertainty": "AverageTemperatureUncertainty",
      "year": "1900",
      "Latitude": "18.2164282",
      "Longitude": "42.5043596"
    },
    {
      "country": "Saudi Arabia",
      "AverageTemperatureUncertainty": "AverageTemperatureUncertainty",
      "year": "1937",
      "Latitude": "18.2164282",
      "Longitude": "42.5043596"
    },
    {
      "country": "Saudi Arabia",
      "AverageTemperatureUncertainty": "AverageTemperatureUncertainty",
      "year": "1906",
      "Latitude": "18.2164282",
      "Longitude": "42.5043596"
    },
    {
      "country": "Saudi Arabia",
      "AverageTemperatureUncertainty": "AverageTemperatureUncertainty",
      "year": "1873",
      "Latitude": "18.2164282",
      "Longitude": "42.5043596"
    }
  ]
var mongodb8 = [
    {
      "city": "Arhus",
      "AverageTemperature":  "-3.228"
      
    },
    {
      "city": "Arhus",
      "AverageTemperature": "-1.333"
      
    },
    {
      "city": "Arhus",
      "AverageTemperature": "5.123"
      
    },
    {
      "city": "Arhus",
      "AverageTemperature": "7.95"
      
    },
    {
      "city": "Arhus",
      "AverageTemperature": "9.351"
      
    },
    {
      "city": "Arhus",
      "AverageTemperature": "6.765"
      
    },
    {
      "city": "Arhus",
      "AverageTemperature": "2.887"
      
    },
    {
      "city": "Arhus",
      "AverageTemperature":"14.444"
      
    },
    {
      "city": "Arhus",
      "AverageTemperature": "4.851"
      
    },
    {
      "city": "Arhus",
      "AverageTemperature": "13.226"
      
    }
  ]
var mongodb9 = [
    {
      "city": "Arhus",
      "AverageTemperatureUncertainty": "7.794",
      "Latitude": "56.1496278",
      "Longitude": "10.2134046"
    },
    {
      "city": "Arhus",
      "AverageTemperatureUncertainty": "4.914",
      "Latitude": "56.1496278",
      "Longitude": "10.2134046"
    },
    {
      "city": "Arhus",
      "AverageTemperatureUncertainty": "8.046",
      "Latitude": "56.1496278",
      "Longitude": "10.2134046"
    },
    {
      "city": "Arhus",
      "AverageTemperatureUncertainty": "2.133",
      "Latitude": "56.1496278",
      "Longitude": "10.2134046"
    },
    {
      "city": "Arhus",
      "AverageTemperatureUncertainty": "3.835",
      "Latitude": "56.1496278",
      "Longitude": "10.2134046"
    },
    {
      "city": "Arhus",
      "AverageTemperatureUncertainty": "5.283",
      "Latitude": "56.1496278",
      "Longitude": "10.2134046"
    },
    {
      "city": "Arhus",
      "AverageTemperatureUncertainty": "2.032",
      "Latitude": "56.1496278",
      "Longitude": "10.2134046"
    },
    {
      "city": "Arhus",
      "AverageTemperatureUncertainty": "0.876",
      "Latitude": "56.1496278",
      "Longitude": "10.2134046"
    },
    {
      "city": "Arhus",
      "AverageTemperatureUncertainty": "1.756",
      "Latitude": "56.1496278",
      "Longitude": "10.2134046"
    },
    {
      "city": "Arhus",
      "AverageTemperatureUncertainty": "5.37",
      "Latitude": "56.1496278",
      "Longitude": "10.2134046"
    }
  ]
var mongodb10 = [
    {
      "country": "Denmark",
      "AverageTemperatureUncertainty": "0.248",
      "AverageTemperature": "-0.325"
    },
    {
      "country": "Denmark",
      "AverageTemperatureUncertainty": "0.537",
      "AverageTemperature": "15.914"
    },
    {
      "country": "Denmark",
      "AverageTemperatureUncertainty": "0.396",
      "AverageTemperature": "6.481"
    },
    {
      "country": "Denmark",
      "AverageTemperatureUncertainty": "0.249",
      "AverageTemperature": "16.913"
    },
    {
      "country": "Denmark",
      "AverageTemperatureUncertainty": "0.322",
      "AverageTemperature": "18.427"
    },
    {
      "country": "Denmark",
      "AverageTemperatureUncertainty": "0.29",
      "AverageTemperature": "-3.115"
    },
    {
      "country": "Denmark",
      "AverageTemperatureUncertainty": "0.271",
      "AverageTemperature": "18.651"
    },
    {
      "country": "Denmark",
      "AverageTemperatureUncertainty": "0.456",
      "AverageTemperature": "8.332"
    },
    {
      "country": "Denmark",
      "AverageTemperatureUncertainty": "0.181",
      "AverageTemperature": "12.615"
    },
    {
      "country": "Denmark",
      "AverageTemperatureUncertainty": "0.264",
      "AverageTemperature": "-5.946"
    }
  ]
var sql1=[
    {"City":"Ashdod", "AverageTemperature":13.596381342062191},
 {"City":"Astana", "AverageTemperature":-15.267497504159733},
 {"City":"Austin", "AverageTemperature":11.027544194107465},
 {"City":"Auckland", "AverageTemperature":18.255717842323648},
 {"City":"Atsugi", "AverageTemperature":2.2128095238095224},
 {"City":"Atibaia", "AverageTemperature":22.44258587786259},
 {"City":"Asyut", "AverageTemperature":13.491237676056345},
 {"City":"Aswan", "AverageTemperature":17.040231884057977},
 {"City":"Asunci\u00f3n", "AverageTemperature":26.998440839694666},
 {"City":"Ashikaga", "AverageTemperature":2.2128095238095224},
 {"City":"Asgabat", "AverageTemperature":2.0895539305301645}
]
var sql2 = [{"Country":"Afghanistan", "Year":1833, "AverageTemperature":10.404},
{"Country":"Afghanistan", "Year":1834, "AverageTemperature":10.403999999999998},
{"Country":"Afghanistan", "Year":1835, "AverageTemperature":11.521166666666666},
{"Country":"Afghanistan", "Year":1837, "AverageTemperature":12.209833333333334},
{"Country":"Afghanistan", "Year":1838, "AverageTemperature":9.6495},
{"Country":"Afghanistan", "Year":1839, "AverageTemperature":7.210000000000001},
{"Country":"Afghanistan", "Year":1840, "AverageTemperature":10.159083333333333},
{"Country":"Afghanistan", "Year":1841, "AverageTemperature":9.757083333333332},
{"Country":"Afghanistan", "Year":1842, "AverageTemperature":10.485083333333334},
{"Country":"Afghanistan", "Year":1843, "AverageTemperature":10.673166666666669}]

var sql3 = [{"City":"Arhus", "AverageTemperature":20.883},
{"City":"Aberdeen", "AverageTemperature":16.328},
{"City":"Aalborg", "AverageTemperature":20.883},
{"City":"Aachen", "AverageTemperature":22.812},
{"City":"A Coru", "AverageTemperature":22.052},
{"City":"Aorum", "AverageTemperature":24.746},
{"City":"Alu", "AverageTemperature":26.891},
{"City":"Achalpur", "AverageTemperature":35.697},
{"City":"Abohar", "AverageTemperature":36.768},
{"City":"Acuf1a", "AverageTemperature":31.899}]
var sql4 = [{"Country":"Denmark", "Year":1745, "Month":4, "AverageTemperature":4.042}]
var sql5 =[{"Country":"Denmark", "Year":1745, "Month":3, "AverageTemperature":0.129},
{"Country":"Denmark", "Year":1745, "Month":4, "AverageTemperature":4.042}]
var sql6 = [{"Country":"Denmark", "AverageTemperatureUncertainty":1.6687204674668301},
{"Country":"United Kingdom", "AverageTemperatureUncertainty":1.6095407914279642},
{"Country":"Germany", "AverageTemperatureUncertainty":1.6235616550852754},
{"Country":"Spain", "AverageTemperatureUncertainty":1.4632972498200063},
{"Country":"Turkey", "AverageTemperatureUncertainty":1.2416325069832488},
{"Country":"India", "AverageTemperatureUncertainty":0.9303933792704615},
{"Country":"Mexico", "AverageTemperatureUncertainty":0.8629493333333328},
{"Country":"Russia", "AverageTemperatureUncertainty":1.3862082129348958},
{"Country":"China", "AverageTemperatureUncertainty":0.9361211387250752},
{"Country":"Venezuela", "AverageTemperatureUncertainty":0.7079133285360186}];
var sql7 = [{"Country":"Afghanistan", "City":"Baglan", "Year":1833, "AverageTemperatureUncertainty":2.201916666666667},
{"Country":"Afghanistan", "City":"Baglan", "Year":1834, "AverageTemperatureUncertainty":2.1765833333333333},
{"Country":"Afghanistan", "City":"Baglan", "Year":1835, "AverageTemperatureUncertainty":1.914},
{"Country":"Afghanistan", "City":"Baglan", "Year":1837, "AverageTemperatureUncertainty":2.1276666666666664},
{"Country":"Afghanistan", "City":"Baglan", "Year":1838, "AverageTemperatureUncertainty":2.2868333333333335},
{"Country":"Afghanistan", "City":"Baglan", "Year":1839, "AverageTemperatureUncertainty":2.2855999999999996},
{"Country":"Afghanistan", "City":"Baglan", "Year":1840, "AverageTemperatureUncertainty":2.0689999999999995},
{"Country":"Afghanistan", "City":"Baglan", "Year":1841, "AverageTemperatureUncertainty":2.0068333333333332},
{"Country":"Afghanistan", "City":"Baglan", "Year":1842, "AverageTemperatureUncertainty":2.077166666666667},
{"Country":"Afghanistan", "City":"Baglan", "Year":1843, "AverageTemperatureUncertainty":1.9940833333333332}];
var sql8 = [{"City":"Arhus", "AverageTemperature":7.695134554643088},
{"City":"Aberdeen", "AverageTemperature":8.281679090334816},
{"City":"Aalborg", "AverageTemperature":7.695134554643057},
{"City":"Aachen", "AverageTemperature":8.82517277321541},
{"City":"A Coru\u00f1a", "AverageTemperature":13.147277321541385},
{"City":"\u00c7orum", "AverageTemperature":9.957552993916112},
{"City":"\u00c7orlu", "AverageTemperature":13.319012318382839},
{"City":"Achalpur", "AverageTemperature":25.829766347687425},
{"City":"Abohar", "AverageTemperature":24.75302112337976},
{"City":"Acu\u00f1a", "AverageTemperature":19.438795945350407}];
var sql9 = [{"Country":"Algeria", "City":"Algiers", "Year":1753, "AverageTemperatureUncertainty":3.0816666666666666},
{"Country":"Algeria", "City":"Algiers", "Year":1754, "AverageTemperatureUncertainty":3.0751666666666675},
{"Country":"Algeria", "City":"Algiers", "Year":1755, "AverageTemperatureUncertainty":3.863833333333334},
{"Country":"Algeria", "City":"Algiers", "Year":1756, "AverageTemperatureUncertainty":3.29475},
{"Country":"Algeria", "City":"Algiers", "Year":1757, "AverageTemperatureUncertainty":4.3495},
{"Country":"Algeria", "City":"Algiers", "Year":1758, "AverageTemperatureUncertainty":4.609166666666668},
{"Country":"Algeria", "City":"Algiers", "Year":1759, "AverageTemperatureUncertainty":4.354},
{"Country":"Algeria", "City":"Algiers", "Year":1760, "AverageTemperatureUncertainty":3.7555833333333344},
{"Country":"Algeria", "City":"Algiers", "Year":1761, "AverageTemperatureUncertainty":3.2100833333333334},
{"Country":"Algeria", "City":"Algiers", "Year":1762, "AverageTemperatureUncertainty":4.018416666666668}];
var sql10 = [{"Year":1900, "AverageTemperature":18.71739635157545, "AverageTemperatureUncertainty":0.7660167910447732},
{"Year":1901, "AverageTemperature":18.61112230514103, "AverageTemperatureUncertainty":0.7549794776119406},
{"Year":1902, "AverageTemperature":18.57229912935316, "AverageTemperatureUncertainty":0.724263059701492},
{"Year":1903, "AverageTemperature":18.406392412935364, "AverageTemperatureUncertainty":0.7127833747927048},
{"Year":1904, "AverageTemperature":18.284173922056436, "AverageTemperatureUncertainty":0.6865126451077944},
{"Year":1905, "AverageTemperature":18.326854477611978, "AverageTemperatureUncertainty":0.6666038557213955},
{"Year":1906, "AverageTemperature":18.503286691542318, "AverageTemperatureUncertainty":0.6405632255389713},
{"Year":1907, "AverageTemperature":18.210377902155805, "AverageTemperatureUncertainty":0.6069579187396359},
{"Year":1908, "AverageTemperature":18.308616500829196, "AverageTemperatureUncertainty":0.6321774461028191},
{"Year":1909, "AverageTemperature":18.360017412935353, "AverageTemperatureUncertainty":0.6181513266998346}];

var GFG_FUN = function(listinput) {
    var cols = [];
    
    for (var i = 0; i < listinput.length; i++) {
        for (var k in listinput[i]) {
            if (cols.indexOf(k) === -1) {
                 
                // Push all keys to the array
                cols.push(k);
            }
        }
    }
     
    // Create a table element
    var table = document.createElement("table");
     
    // Create table row tr element of a table
    var tr = table.insertRow(-1);
     
    for (var i = 0; i < cols.length; i++) {
         
        // Create the table header th element
        var th = document.createElement("th");
        th.innerHTML = cols[i];
        
        // Append columnName to the table row
        tr.appendChild(th);
    }
     
    // Adding the data to the table
    for (var i = 0; i < listinput.length; i++) {
         
        // Create a new row
        trow = table.insertRow(-1);
        for (var j = 0; j < cols.length; j++) {
            var cell = trow.insertCell(-1);
            
            // Inserting the cell at particular place
            cell.innerHTML = listinput[i][cols[j]];
        }
    }
   
    // Add the newly created table containing json data
    var el = document.getElementById("table1");
    el.innerHTML = "";
    el.appendChild(table);
} 
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // get original form data entries
    var formData = new FormData(form);
    var formDataEntries = Object.fromEntries(formData.entries());
    
 
    GFG_FUN(eval(formDataEntries.database+formDataEntries.query)); 
    
   
});


