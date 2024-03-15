
//!Tarea 1

for (i= 100; i >= 0; i -= 10) {
    
    console.log(i);
}




//!TAREA 3
let numbers = [15, 25, 10, 82, 14, 78, 2, 7, 5, 59];

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);

}

for(number of numbers) {

    if (number % 2 === 0){
        console.log("Este numero es par");
        console.log(number);
    }
    
    
}

for(number of numbers) {

    if (number > 10 &&  number < 60){
        console.log("Este numero es mayor a 10 y menor que 60");
        console.log(number);
    }
    
    
}


//!TAREA 4

let peliculas = [];
while(true){


let nombre = prompt("Escriba el nombre de una pelicula");
let clasificacion = prompt("Escriba la clasificacion de la pelicula");


    if (nombre == null && clasificacion == null){
        break;
    }else{
        peliculas.push({
            Titulo: nombre,
            Calificacion: clasificacion
        });
    }


    for(pelicula of peliculas){
        if (pelicula.clasificacion < 7){
            console.log(`La pelicula tiene una calificacion menor que 7, la pelicula es: ${Titulo.nombre} con una calificacion de ${Titulo.clasificacion}`);
        }
    }


    for(pelicula of peliculas){
        if (pelicula.clasificacion > 7){
            console.log(`La pelicula tiene una calificacion mayor que 7, la pelicula es: ${Titulo.nombre} con una calificacion de ${Titulo.clasificacion}`);
        }
    }

}



//! TAREA NRO 5

let vessel = {
    LATITUD: 40.07288,
    LONGITUD: 154.48535,
    CURSO: 285.6,
    VELOCIDAD: 14.0,
    OMI: 9175717,
    NOMBRE: "MARENO"
}

for (let key in vessel) {
    console.log(`${key} -> ${vessel[key]}`);
    
}



//! TAREA NRO 6



while (true) {

    let primerNumero = Number(prompt("Intruduce el primer numero"))
    let SegundoNumero = Number(prompt("Intruduce el segundo numero"))
    let operacion = isNaN(prompt(`Operacion que deseas realizar? ${"+"}, ${"-"}, ${"*"},${"/"}`))
    let resultado;



    if(primerNumero == "S" || segundoNumero == "S" || operacion == "S"){
        break;
    }

    if(!Number.isNaN(primerNumero) && !Number.isNaN(SegundoNumero) && !Number.isNaN(operacion)){
        switch(operacion){
            case "+":
                resultado = primerNumero + SegundoNumero;
                console.log(resultado);
                break;
            case "-":
                resultado = primerNumero - SegundoNumero;
                console.log(resultado);
                break;
            case "*":
                resultado = primerNumero * SegundoNumero;
                console.log(resultado);
                break;
            case "/":
                resultado = primerNumero / SegmentundoNumero;
                console.log(resultado);
                break;
                default:
                    resultado = "El operador que selecciono no existe"

        }
    }else {
        resultado = "El valor que introducio no es un numero"
    }
    alert(resultado)
}