//declaracion de funcion
function sumar(){
    console.log(2 + 2);
}
sumar();

//expresion de funcion
const sumar2 = function(){
    console.log(2 + 2);
}
sumar2();


const reproductor = {
    reproducir: () =>  console.log(`Reprodiciendo Cancion...`)
}

reproductor.reproducir();


//Arrows function
const aprendiendo = function() {
    console.log('Aprendiendo JS')
}

const aprendiendo2 = teconlogia => `Aprendiendo ${teconlogia}`;
console.log(aprendiendo2('JS'))
//pasar parametros a un arrow function

const numeros = [1, 2, 3, 4, 5]
numeros.forEach( n => console.log(n) );


