## Unofficial Weather API using accuweather.com
This is an unofficial API made with NodeJS and MongoDB in order to be used with a [my React Native App](https://github.com/Pierrelouisdelx/Weather)

## Prerequisites
* NodeJS & npm
```
npm install -g npm@latest
```
* MongoDB

## Setup
```
npm install
```

---

### Usage :
```
node server.js
```

------------
### Refresh Data
``GET /refresh``

---

### City Data
``POST /city``
```json
[
    {
        "city": "Paris",
        "background": "http://192.168.1.93:3000/Paris.jpg",
        "weather": "cloudy",
        "weatherIcon": "weather-cloudy",
        "wind": "W 13",
        "tomorrowDay": "Mon",
        "tomorrowIcon": "weather-cloudy",
        "tomorrowTemp": "3°/7°",
        "temperature": "6",
        "temp": "4°/6°",
        "id": 0
    },
]
```

---

### Week Data
``GET /week/:city``
#### Server Response :
```json
[
    {
        "weekDay": "Sun",
        "date": "12/05",
        "weatherIcon": "weather-rainy",
        "temperature": "4°/6°",
        "forecast": "Mainly cloudy, showers around",
        "humidity": "87",
        "id": 0
    },
]
```

---

### Day Data
``GET /day/:city``
#### Server Response :
```json
[
    {
        "weather": "cloudy",
        "time": "12",
        "weatherIcon": "weather-cloudy",
        "temperature": "6",
        "forecast": "Cloudy",
        "humidity": "47",
        "id": 0
    },
]
```

---

### Add city to Database
``GET /search/:city``

