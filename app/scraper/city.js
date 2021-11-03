const JSSoup = require('jssoup').default;

const getCity = (html) => {
    try {
        var soup = new JSSoup(html)
        divs = soup.find('div', 'left')

        var wind = divs.findAll('div', 'detail-item')[2]
        wind = wind.findAll('div')[1].text.split('k')[0].trim();

        city = {
            city: '',
            background: '',
            weather: '',
            weatherIcon: '',
            wind: wind,
            tomorrowDay: '',
            tomorrowIcon: '',
            tomorrowTemp: '',
            temperature: '',
            temp: '',
            id: 0
        }

        return city;
    } catch (err) {
      console.error(err)
    }
}

module.exports = getCity;
