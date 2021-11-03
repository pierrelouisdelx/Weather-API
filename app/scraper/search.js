const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const newCity = require('../controllers/newCity.js')

const headers = {
    Accept : "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Encoding" : "gzip, deflate, br",
    "Accept-Language" : "en-US,en;q=0.5",
    Connection : "keep-alive",
    DNT : 1,
    Host : "www.accuweather.com",
    "Sec-Fetch-Dest" : "document",
    "Sec-Fetch-Mode" : "navigate",
    "Sec-Fetch-Site" : "none",
    "Sec-Fetch-User" : "?1",
    "Sec-GPC" : 1,
    TE : "trailers",
    "Upgrade-Insecure-Request" : 1,
    "User-Agent" : "Mozilla/5.0 (X11; Linux x86_64; rv:93.0) Gecko/20100101 Firefox/93.0"
}

const search = async(city) => {
    url = `https://www.accuweather.com/web-api/autocomplete?query=${city}&language=en-us`
    const response = await fetch(url, { method: 'GET', headers: headers});
    var data = await response.json();

    data = data[0];

    city = data.localizedName;
    c = `https://www.accuweather.com/en/${data.country.id}/${city}/${data.key}/current-weather/${data.key}`
    w = `https://www.accuweather.com/en/${data.country.id}/${city}/${data.key}/daily-weather-forecast/${data.key}`
    d = `https://www.accuweather.com/en/${data.country.id}/${city}/${data.key}/hourly-weather-forecast/${data.key}`
    newCity(city, c, w, d);
}

module.exports = search;
