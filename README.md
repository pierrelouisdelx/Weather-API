## Unofficial Weather API using accuweather.com
This is an unofficial API made with NodeJS and MongoDB in order to be used with a React Native app that will be available very soon

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
		}
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
		}
	]
```

---

### Add city to Database
``GET /search/:city``

