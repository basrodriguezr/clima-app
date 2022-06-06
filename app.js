
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
                
                
                //clima
                //mostrar resultados
                console.log('\ninformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSeleccionado.nombre);
                console.log('Lat: ', lugarSeleccionado.lat);
                console.log('Lon: ', lugarSeleccionado.lon);
                console.log('Temperatura: ',);
                console.log('Mínima: ',);
                console.log('Máxima: ',);

            break;
            
            case 2:
                
            break;     
        } 

        await pausa(); 
    }

    
}

main();