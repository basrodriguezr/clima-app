const axios = require('axios');

class Busquedas{
    historial = [];

    constructor(){
        // leer db si existe
    }

    async ciudad(lugar = ''){
        //peticion http
        //console.log('ciudad ', lugar);
        const resp= await axios.get('https://reqres.in/api/users?page=2')
        console.log(resp.data);
        return []; //retorna lugares
    }
}

module.exports = Busquedas;