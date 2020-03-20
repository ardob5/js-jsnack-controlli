// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

// Chiedo all'utente di inserire due numeri nel mentre dichiaro due variabili

var numOne = parseInt(prompt("Inserire un numero"));
var numTwo = parseInt(prompt("Inserire un altro numero"));
var numMaggiore;
// Verifico sulla console

console.log(numOne + " " + numTwo);

// Calcolo quale dei due numeri è il maggiore

if (numOne > numTwo) {
  numMaggiore = numOne;
} else if (numOne < numTwo) {
  numMaggiore = numTwo;
} else {
  numMaggiore = numOne;
}

// Stampa dell'output
document.getElementById('output').innerHTML = numMaggiore;
