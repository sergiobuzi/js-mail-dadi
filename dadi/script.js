// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


let betUser = Math.floor(Math.random() * 6) + 1;
console.log("numero dell'user", betUser);
let betComputer = Math.floor(Math.random() * 6) + 1;
console.log("numero del computer", betComputer);

if (betUser > betComputer){
    console.log("hai vinto");

} else if (betUser < betComputer){
    console.log("hai perso");

} else{
    console.log("pareggio");
}