let array = [];
let numeri = 0;

while (numeri < 50) {
  let numero = parseInt(prompt("Inserisci un numero:"));
  array.push(numero);
  numeri += numero;
}

console.log("hai superato 50");