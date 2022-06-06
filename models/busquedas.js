const axios = require('axios');

class Busquedas{
    historial = [];

    constructor(){
        // leer db si existe
    }

    async ciudad(lugar = ''){
        try{
            //peticion http
            //console.log('ciudad ', lugar);
            const resp= await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/%C3%B1u%C3%B1oa.json?proximity=-73.990593%2C40.740121&language=es&access_token=pk.eyJ1IjoiYmVpc3MiLCJhIjoiY2w0MzFjY3MxMGJqMDNibjI5OGk4cHdlbiJ9.fE1z0G7TLY5mUDICuEOpvA')
            console.log(resp.data);
            return []; //retorna lugares
        }catch(error){
            return [];  
        }
       
    }
}

module.exports = Busquedas;