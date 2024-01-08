const resultElement = document.getElementById('main-title');

// Chiedo il nome dell'utente
const nameuser = prompt('Qual è il tuo nome?' , 'Michele');
console.log(nameuser);

// Chiedo il cognome dell'utente
const surnameuser = prompt('Qual è il tuo cognome?' , 'Ianni');
console.log(surnameuser);


// Chiedo il colore preferito dell'utente
const coloruser = prompt('Qual è il tuo colore preferito?' , 'verde');
console.log(coloruser);

// Calcolo la password e la salco in una variabile
let passworduser = nameuser + surnameuser + coloruser;

console.log(passworduser);
passworduser = passworduser + "24";

// Stampo la variabile della password
resultElement.innerHTML = "La password generata è: " + passworduser ;