const { inquireMenu, pausa} = require("./helpers/inquirer");

const main = async() => {
    let opt;

    while(opt!= 0){
        opt =  await inquireMenu();
        
        switch (opt) {
            case 1:
            
            break;
            
            case 2:
                
            break;     
        }  
        await pausa(); 
    }

    
}

main();