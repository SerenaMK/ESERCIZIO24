// Variabili
let numeroCasuale: number;
let giocatore1: number;
let giocatore2: number;
let compare1: number;
let compare2: number;

numeroCasuale = diceRoll();
giocatore1 = diceRoll();
giocatore2 = diceRoll();

// Tira i dadi
function diceRoll(): number {
    return Math.floor((Math.random() * 100) + 1);
}

// Mostrami i numeri usciti
console.log("Numero casuale generato = ", numeroCasuale);
console.log("Numero giocatore 1: ", giocatore1);
console.log("Numero giocatore 2: ", giocatore2);


// Dimmi chi ha vinto
if (giocatore1 == numeroCasuale) {
    "Il giocatore 1 ha vinto!"
}
if (giocatore2 == numeroCasuale) {
    "Il giocatore 2 ha vinto!"
}

// Se non ha vinto nessuno dei due, dimmi chi si è avvicinato di più
if (giocatore1 != numeroCasuale && giocatore2 != numeroCasuale) {
    // Calcola differenza giocatore 1
    if (giocatore1 < numeroCasuale) {
        compare1 = numeroCasuale - giocatore1;
    } else {
        compare1 = giocatore1 - numeroCasuale;
    };

    // Calcola differenza giocatore 2
    if (giocatore2 < numeroCasuale) {
        compare2 = numeroCasuale - giocatore2;
    } else {
        compare2 = giocatore2 - numeroCasuale;
    };

    // Comparazione finale
    if (compare1 < compare2) {
        console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!");
    } else {
        console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!");
    }
}