
//  Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//     - chiedere all'utente il numero di chilometri da percorrere e l'età del passeggero

//  Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//  il prezzo del biglietto è definito in base ai km (0.21 € al km)
//     - calcolo prezzo del biglietto

//  va applicato uno sconto del 20% per i minorenni
//     - calcolo del prezzo per i < 18anni

//  va applicato uno sconto del 40% per gli over 65.
//     - calcolo del prezzo per i >= 65anni

//  L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali (.toFixed(2) ), per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
 



function myFunction() {

    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;

    let prezzo = km * 0.21;

    if (eta <= 17) {
        prezzo -= prezzo * 0.20;     

    }else if (eta >= 65){
        prezzo -= prezzo * 0.40;

    }

    document.getElementById("biglietto").innerHTML = `il prezzo è di ${prezzo.toFixed(2)} €`

    console.log(prezzo.toFixed(2));
}