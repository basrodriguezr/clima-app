const axios = require('axios');
require('dotenv').config();
class Busquedas{
    historial = [];

    constructor(){
        // leer db si existe
    }

    get paramsMapBox(){
        return {
            //'access_token': 'pk.eyJ1IjoiYmVpc3MiLCJhIjoiY2w0MzFjY3MxMGJqMDNibjI5OGk4cHdlbiJ9.fE1z0G7TLY5mUDICuEOpvA',
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad(lugar = ''){
        try{
            //peticion http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapBox
            });
            const resp = await instance.get();
            console.log(resp.data);
            return []; //retorna lugares
        }catch(error){
            return [];  
        }       
    }
}

module.exports = Busquedas;