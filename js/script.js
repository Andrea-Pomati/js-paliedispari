/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer
 (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta,
 se funziona allora andiamo avanti.
) */

// chiedo all'utente di inserire una parola: collego l'input html alla variabile parola
let parola = document.getElementById("parola");
console.log("La parola inserita è", parola);

// output su pagina:

// creo bottone per il click: collego il bottone html con una variabile button
let button = document.querySelector("button");

// aggiungo il click al button
button.addEventListener("click", 
    function(){
        
        let risultato = parPalindroma(parola.value);
        document.getElementById("risultato").innerHTML = `La parola "${parola.value}" da te inserita ${risultato}.`;

        parola.value = "";
       
    }
);


// creo la funzione per capire se è palindroma:
function parPalindroma(word){
    // divido la parola in sottostringhe:
    let parDivisa = word.split("");
    console.log("La parola divisa è:", parDivisa);

    // inverto le lettere:
    let parInvertita = parDivisa.reverse();
    console.log("La parola invertita è", parInvertita);

    // riunisco le lettere:
    let parFinale = parInvertita.join("");
    console.log("La parola finale è:", parFinale);

    // verifico se è palindroma oppure no:
    if(parFinale === parola.value){
        return "è palindroma"
    }else{
        return "non è palindroma"
    };
}


//-------------------------------------------------------------------------------------------

// PARI E DISPARI 

let inputUser = prompt('Scegli Pari o Dispari');
let userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));

function randomNum (min, max) {
    let numRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numRandom;
}

let numRand = randomNum(1,5);
console.log(`Il numero random è ${numRand}`);

function sum (x,y) {
    let sum = x + y;
    return sum;
}

let sumValue = sum(userNumber, numRand);

console.log(`Il valore della somma è ${sumValue}`);

function checkParidis () {
    let control = '';
    if (sumValue % 2 == 0) {
        control = 'pari';
        return control
    } else {
        control = 'dispari';
        return control
    }
}

console.log(checkParidis());

if (userNumber = checkParidis()) {
    console.log('utente ha vinto');

} else {
    console.log('utente ha perso');
}


