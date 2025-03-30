let opcionesJuego
do {
    opcionesJuego = prompt(`
        Elige una opcion
        1. Nueva Partida
        2. Salir
    `)
    switch(opcionesJuego){
        case "1":
            let vidas = 5;
            while(vidas>0){
                console.log("Tienes: "+vidas+" vidas");
                let numeroM = Math.floor(Math.random()*(10-1)+1);
                console.log("El numero previo de la computadora es "+numeroM);
                console.log("-----------------------------------------------");
                let numeroUser = parseInt(prompt("Ingresa el numero"));

                console.log("numero de maquina: "+numeroM);
                console.log("numero de usuario: "+numeroUser);
                if(numeroM === numeroUser){
                    console.log("Adiviniste el numero");
                }else{
                    console.log("Numero incorrecto");
                    vidas--;
                }

                if(vidas === 0){
                    console.log("Perdiste");
                    console.log("-------------------------------------");
                }
            }
            break;
        default:
            console.log("Valor no valido");
    }
    console.log("Selecciona una nueva partida");
} while (opcionesJuego !== "2");
console.log("Juego finalizado.");