var numero1 = prompt("Ingresa numero 1");
console.log("Primer valor ingresado: "+numero1);

var numero2 = prompt("Ingresa numero 2");
console.log("Segundo valor ingresado: "+numero2);

var numero3 = prompt("Ingresa numero 3");
console.log("Tercer valor ingresado: "+numero3);

if((numero1 === numero2) && (numero1 === numero3)){
    console.log("Los valores son iguales");
}else if((numero1 > numero2) && (numero2 > numero3)){
    console.log("El numero "+numero1+" es mayor que "+numero2+"; y este es mayor que "+numero3);
}else if((numero1 > numero3) && (numero3 > numero2)){
    console.log("El numero "+numero1+" es mayor que "+numero3+"; y este es mayor que "+numero2);
}else if((numero2 > numero1) && (numero1 > numero3)){
    console.log("El numero "+numero2+" es mayor que "+numero1+"; y este es mayor que "+numero3);
}else if((numero2 > numero3) && (numero3 > numero1)){
    console.log("El numero "+numero2+" es mayor que "+numero3+"; y este es mayor que "+numero1);
}else if((numero3 > numero2) && (numero2 > numero1)){
    console.log("El numero "+numero3+" es mayor que "+numero2+"; y este es mayor que "+numero1);
}else if((numero3 > numero1) && (numero1 > numero2)){
    console.log("El numero "+numero3+" es mayor que "+numero1+"; y este es mayor que "+numero2);
}else if((numero1 === numero2) && (numero1 > numero3)){
    console.log("El numero "+numero1+" es igual que "+numero2+" y son mayores que "+numero3)
}else if((numero1 === numero3) && (numero1 > numero2)){
    console.log("El numero "+numero1+" es igual que "+numero3+" y son mayores que "+numero2)
}else if((numero2 === numero1) && (numero2 > numero3)){
    console.log("El numero "+numero2+" es igual que "+numero1+" y son mayores que "+numero3)
}else if((numero2 === numero3) && (numero2 > numero1)){
    console.log("El numero "+numero2+" es igual que "+numero3+" y son mayores que "+numero1)
}else if((numero3 === numero1) && (numero3 > numero2)){
    console.log("El numero "+numero3+" es igual que "+numero1+" y son mayores que "+numero2)
}else if((numero3 === numero2) && (numero3 > numero1)){
    console.log("El numero "+numero3+" es igual que "+numero2+" y son mayores que "+numero1)
}else if((numero1 === numero2) && (numero1 < numero3)){
    console.log("El numero "+numero1+" es igual que "+numero2+" y son menores que "+numero3)
}else if((numero1 === numero3) && (numero1 < numero2)){
    console.log("El numero "+numero1+" es igual que "+numero3+" y son menores que "+numero2)
}else if((numero2 === numero1) && (numero2 < numero3)){
    console.log("El numero "+numero2+" es igual que "+numero1+" y son menores que "+numero3)
}else if((numero2 === numero3) && (numero2 < numero1)){
    console.log("El numero "+numero2+" es igual que "+numero3+" y son menores que "+numero1)
}else if((numero3 === numero1) && (numero3 < numero2)){
    console.log("El numero "+numero3+" es igual que "+numero1+" y son menores que "+numero2)
}else if((numero3 === numero2) && (numero3 < numero1)){
    console.log("El numero "+numero3+" es igual que "+numero2+" y son menores que "+numero1)
}