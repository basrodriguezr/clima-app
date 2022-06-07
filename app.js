
const { inquireMenu, pausa, leerInput, listarLugares} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {
    let opt;
    const busquedas = new Busquedas();

    while(opt!= 0){
        opt =  await inquireMenu();
        
        switch (opt) {
            case 1:
                //mostrar mensaje
                const termino = await leerInput('Lugar: ');

                //buscar lugares
                const lugares = await busquedas.ciudad(termino);

                //seleccionar lugar
                const id = await listarLugares(lugares); 
                const lugarSeleccionado = lugares.find(l => l.id ===id);
                //console.log(lugarSeleccionado);
                
                const clima = await busquedas.obtenerClima(lugarSeleccionado.lat, lugarSeleccionado.lon);

                //console.log(clima);

                //clima
                //mostrar resultados
                console.clear();
                console.log('\ninformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSeleccionado.nombre);
                console.log('Lat: ', lugarSeleccionado.lat);
                console.log('Lon: ', lugarSeleccionado.lon);
                console.log('Temperatura: ',clima.temperatura);
                console.log('Mínima: ',clima.minima);
                console.log('Máxima: ',clima.maxima);
                console.log('Sencación termica: ',clima.sen_termica);
                console.log('¿Cómo está el clima?: ',clima.clima);
            break;
            
            case 2:
                
            break;     
        } 

        await pausa(); 
    }

    
}

main();