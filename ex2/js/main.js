// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// Chiedo all'utente di inserire due parole e le identifico in due variabili
var wordOne = prompt("Inserisci una parola");
var wordTwo = prompt("Inserisci un'altra parola");

var wordOutPut;
// Check in console
console.log( wordOne + " " + wordTwo);

// Controllo quale parola è piu lunga
if (wordOne.length > wordTwo.length) {
  wordOutPut = wordOne + " " + wordTwo;
} else if (wordOne.length < wordTwo.length) {
  wordOutPut = wordTwo + " " + wordOne;
} else {
  wordOutPut = "Le parole sono lunghe uguali : " + wordOne + wordTwo;
}

// Stampa output
document.getElementById('output').innerHTML = wordOutPut;
