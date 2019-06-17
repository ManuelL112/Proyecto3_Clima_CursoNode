const axios = require('axios');

let pais = "Colombia"

const getLugarLatLong = () => {
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ pais }`,
        timeout: 1000,
        headers: { 'X-RapidAPI-Key': '18ca37b5f2mshdc1ab1dabf71de6p13571cjsn2481831db3e7' }
    });


    instance.get()
        .then(resp => console.log(resp.data.Results[0]))
        .catch(err => console.log('ERROR', err));
}