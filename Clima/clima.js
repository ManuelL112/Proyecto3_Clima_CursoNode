const axios = require('axios');



const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=41967a2c3f0bded7d24cb47152172aa2&units=metric`)

    return resp.data.main.temp;



}

module.exports = {
    getClima
}