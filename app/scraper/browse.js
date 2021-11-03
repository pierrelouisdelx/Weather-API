const puppeteer = require('puppeteer');

const city = require('./city.js');
const week = require('./week.js');
const day = require('./day.js');

const insert = require('../controllers/insertData.js')

const browse = async(city_name, city_url, week_url, day_url) => {
    city_data = {};
    week_data = [];
    day_data = [];

    try {
        const browser = await puppeteer.launch({
            headless: false
        });
        const [page] = await browser.pages();

        await page.goto(day_url, { waitUntil: 'networkidle0' });
        var html = await page.evaluate(() => document.querySelector('*').outerHTML);

        day_data = day(html);

        await page.goto(week_url, { waitUntil: 'networkidle0' });
        html = await page.evaluate(() => document.querySelector('*').outerHTML);

        week_data = week(html);

        await page.goto(city_url, { waitUntil: 'networkidle0' });
        html = await page.evaluate(() => document.querySelector('*').outerHTML);

        city_data = city(html);

        city_data.city = city_name;
        city_data.background = `http://192.168.1.93:3000/${city_name}.jpg`;
        city_data.weather = day_data[0].weather;
        city_data.weatherIcon = day_data[0].weatherIcon;
        city_data.tomorrowDay = week_data[1].weekDay;
        city_data.tomorrowIcon = week_data[1].weatherIcon;
        city_data.tomorrowTemp = week_data[1].temperature;
        city_data.temperature = day_data[0].temperature;
        city_data.temp = week_data[0].temperature;

        insert(city_name, city_url, week_url, day_url, [city_data], week_data, day_data);

        await browser.close();

    } catch (err) {
        console.error(err);
    }
}

module.exports = browse;
