const fs = require('fs');
const axios = require('axios');
require('dotenv').config();
class Busquedas{
    historial = [];
    dbPath = './db/dataBase.json'

    constructor(){
        // leer db si existe
        this.leerBD();
    }

    get historialCapitalizado(){
        return this.historial.map(lugar => {
            let palabras = lugar.split(' ');
            palabras = palabras.map(p => p[0].toUpperCase() + p.substring(1));

            return palabras.join(' ');
        });
    }

    get paramsMapBox(){
        return {
            //'access_token': 'pk.eyJ1IjoiYmVpc3MiLCJhIjoiY2w0MzFjY3MxMGJqMDNibjI5OGk4cHdlbiJ9.fE1z0G7TLY5mUDICuEOpvA',
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    get paramsOpenWeather(){
        return {
            //'access_token': '99dcce6c71dbf6da84b688e5e7839cd8',
            'appid': process.env.OPENWEATHER_KEY,
            'units': 'metric',
            'lang': 'es'
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
           
            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lon: lugar.center[0],
                lat: lugar.center[1]
            }));

        }catch(error){
            return 'errorrrrrrrrrrrrrrr';  
        }       
    }

    async obtenerClima(lat,lon){
        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {...this.paramsOpenWeather,lat,lon}
            });

            const resp = await instance.get();
            
            const {weather, main} = resp.data;
            //console.log(resp.data.weather);
            // console.log(resp.data.main);


            return {
                temperatura: main.temp,
                minima: main.temp_min,
                maxima: main.temp_max,
                sen_termica: main.feels_like,
                clima: weather[0].description
            }

            // return resp.data.features.map( lugar => ({
            //     id: lugar.id,
            //     nombre: lugar.place_name,
            //     lon: lugar.center[0],
            //     lat: lugar.center[1]
            // }));
        } catch (error) {
            return "No se encuentra el lugar seleccionado.";
        }
    }

    agregarHistorial(lugar=''){
        if(this.historial.includes(lugar.toLocaleLowerCase())){
            return;
        }
        this.historial.unshift(lugar.toLocaleLowerCase());

        this.guardarDB();
    }

    guardarDB(){
        const payload = {
            historial:this.historial
        }; 

        fs.writeFileSync(this.dbPath,JSON.stringify(payload));
    }

    leerBD(){
        if(!fs.existsSync(this.dbPath)){
            return null;
        }
     
        const info = fs.readFileSync(this.dbPath,{encoding:'utf-8'});
        const data = JSON.parse(info);
        //console.log(data);
     
        this.historial = data.historial;
    }
}

module.exports = Busquedas;