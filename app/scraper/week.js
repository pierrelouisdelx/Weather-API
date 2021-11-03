const JSSoup = require('jssoup').default;

function getIcon(n)
{
    n = parseInt(n, 10);
    switch(n)
    {

        case 1:
            return 'weather-sunny';
        case 2:
        case 3:
        case 4:
        case 6:
            return 'weather-partly-cloudy';
        case 5:
            return 'weather-hazy';
        case 7:
        case 8:
            return 'weather-cloudy';
        case 11:
            return 'weather-fog';
        case 12:
            return 'weather-rainy';
        case 13:
        case 14:
            return 'weather-partly-rainy';
        case 15:
            return 'weather-lightning';
        case 16:
        case 17:
            return 'weather-partly-lightning';
        case 18:
            return 'weather-pouring';
        case 19:
            return 'weather-snowy';
        case 20:
        case 21:
        case 23:
            return 'weather-partly-snowy';
        case 22:
            return 'weather-snowy-heavy';
        case 25:
            return 'weather-hail';
        case 32:
            return 'weather-windy';
        case 33:
            return 'weather-night';
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
            return 'weather-night-partly-cloudy';

    }
}

const getWeek = (html) => {
    week = []
    try {
        var soup = new JSSoup(html)
        divs = soup.findAll('div', 'daily-wrapper')

        for (var i = 0; i < divs.length; i++)
        {
            var date = divs[i].find('h2', 'date')
            date = date.findAll('span')
            dow = date[0].text
            sub = date[1].text.split('/')
            month = sub[0]
            d = ('0' + sub[1]).slice(-2)
            sub = d + '/' + month

            var img = divs[i].find('img').attrs['data-src']
            var n  = img.lastIndexOf('/');
            img = img.substring(n + 1);
            img = img.split('.')[0];
            img = getIcon(img)

            var temp = divs[i].find('div', 'temp')
            temp = temp.findAll('span')
            high = temp[0].text.split('&')[0]
            low = temp[1].text.split('&')[0].substring(1)
            t = low + '/' + high

            var forecast = divs[i].find('div', 'phrase').text.trim()

            var precip = divs[i].find('div', 'precip').text
            precip = precip.replace(/\s/g, '').split('%')[0]

            day = {
                weekDay: dow,
                date: sub,
                weatherIcon: img,
                temperature: t,
                forecast: forecast,
                humidity: precip,
                id: i,
            }

            week.push(day)
        }
        return week;
    } catch (err) {
      console.error(err)
    }
}

module.exports = getWeek;
