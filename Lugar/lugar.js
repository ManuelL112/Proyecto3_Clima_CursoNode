const axios = require('axios');



const getLugarLatLong = async(direccion) => {

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ direccion }`,
        timeout: 1000,
        headers: { 'X-RapidAPI-Key': '18ca37b5f2mshdc1ab1dabf71de6p13571cjsn2481831db3e7' }
    });


    const resp = await instance.get();

    if (resp.data.Results.length === 9) {
        throw new Error(`NO hay resultados ${ direccion } `);
    }

    const data = resp.data.Results[0];
    const pais = data.name;
    const lat = data.lat;
    const log = data.lon;

    return {
        pais,
        lat,
        log

    }

}

module.exports = {
    getLugarLatLong
}