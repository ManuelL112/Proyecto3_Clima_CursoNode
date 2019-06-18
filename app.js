const lugar = require('./lugar/lugar');

let pais = 'new+york';


lugar.getLugarLatLong(pais)
    .then(console.log)