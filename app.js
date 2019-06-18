const lugar = require('./lugar/lugar');
const clima = require('./Clima/clima');

let pais = 'new+york';


const getInfo = async(pais) => {

    try {
        const resp = await lugar.getLugarLatLong(pais);
        const resClima = await clima.getClima(resp.lat, resp.log)
        return `El cliema de ${ resp.pais } es de ${ resClima }`;
    } catch (e) {
        return `No se pudo determinar el Clima de ${ resp.pais }, ${ e } `
    }


}

getInfo(pais).then(console.log).catch(console.log)