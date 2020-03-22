// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// Chiedere all'utente di inserire 5 numeri

var num1 = parseInt(prompt ("Scegli il primo numero"));
var num2 = parseInt(prompt ("Scegli il secondo numero"));
var num3 = parseInt(prompt ("Scegli il terzo numero"));
var num4 = parseInt(prompt ("Scegli il quarto numero"));
var num5 = parseInt(prompt ("Scegli il quinto numero"));

// Dichiaro una variabile che faccia la somma dei 5 numeri
var somma = num1 + num2 + num3 + num4 + num5;


// stampo la somma dei 5 numeri
document.getElementById('output').innerHTML = "La somma dei 5 numeri è : " + somma;
