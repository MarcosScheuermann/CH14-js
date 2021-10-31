// Challenger14 - mayor o igual

let dato1 = Number(prompt("Ingrese un numero"));
let dato2 = Number (prompt("ingrese otro numero"));

if (!isNaN (dato1 && dato2)) {
    if (dato1>dato2) {
        console.log("El Numero es Mayor");
    }
    if (dato1==dato2) {
        console.log("Son iguales");
    }
    if (dato1<dato2) {
        console.log("El numero es Menor");
    }

    let result = (dato1>dato2)? "Mayor" : "Menor";
    let result1 = (dato1 == dato2)? "Iguales" : "Distintos";

    console.log(`El resultado es ${result}.`);
    console.log(`Los resultados son ${result1}.`);
    
}else console.log("INGRESE SOLO NUMEROS");