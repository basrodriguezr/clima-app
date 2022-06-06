require('dotenv').config();
const { inquireMenu, pausa, leerInput} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {
    let opt;
    const busquedas = new Busquedas();

    while(opt!= 0){
        opt =  await inquireMenu();
        
        switch (opt) {
            case 1:
                //mostrar mensaje
                const lugar = await leerInput('Lugar: ');
                await busquedas.ciudad(lugar);
                
                //buscar lugares
                //seleccionar lugar
                //clima
                //mostrar resultados
                console.log('\ninformación de la ciudad\n'.green);
                console.log('Ciudad: ',);
                console.log('Lat: ',);
                console.log('Lon: ',);
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