let numeros = [12, 5, 8, 20, 3, 15, 10, 7];
let frutas = ["manzana", "pera", "banana", "naranja"]

numeros.push(25);
console.log(numeros);
numeros.unshift(2);

let ultimoNumero = numeros.pop();
console.log(numeros);

let primerNumero = numeros.shift();
console.log(numeros);


console.log(numeros.includes(20));

console.log(numeros.indexOf(15));
console.log(numeros.findIndex(numero => numero > 10));
console.log(numeros.some(numero => numero < 0));
console.log(numeros.every(numero => numero > 0));

let mayor_a_diez = numeros.find(numero => numero > 10);
console.log(mayor_a_diez);


let dobles = numeros.map(numero => numero * 2);
console.log(dobles);

let mayoresDiez = numeros.filter(numero => numero > 10);
console.log(mayoresDiez);

let pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares);

let numerosATextos = numeros.map(numero => "Número: " + numero);
console.log(numerosATextos);


let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma);

let promedio = suma / numeros.length;
console.log(promedio);


let producto = numeros.reduce((acumulador, numero) =>acumulador * numero, 1);
console.log(producto);
console.log(numeros);

let ordenados = numeros.slice().sort((a, b) => a - b);
console.log(ordenados);
console.log(numeros);

let invertidos = numeros.slice().reverse();
console.log(invertidos);

let elementos = numeros.slice(1, 3);
console.log(elementos); 
console.log(numeros);

let eliminado = numeros.slice(2, 1);
console.log(eliminado);
console.log(numeros);

let combinados = numeros.concat([100, 200, 300]);
console.log(combinados);


let frutasTexto = frutas.join(" - ");
console.log(frutasTexto);
