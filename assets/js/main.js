  var bombsArray = [];
  var safeArray = [];
  var maxNumber = 100 ;

  bombsArray = createBombs(bombsArray, maxNumber);
  console.log(bombsArray);



  var punteggio = game(bombsArray, safeArray, maxNumber);
  console.log("Hai totalizzato:");
  console.log(punteggio + " punti");
  document.getElementById("output").innerHTML = "Hai totalizzato : " + punteggio + " punti";
  document.getElementById("output2").innerHTML = "i numeri esplosivi erano : " + bombsArray + " ci dispiace";
  document.getElementById("output3").innerHTML = "I numeri corretti che hai inserito : " + safeArray;





// FUNZIONI
// CONTO FINO A 16
// GENERO UN NUMERO RANDOM MAX 100
function createBombs(bombsArray, maxNumber) {
  while (bombsArray.length < 16) {
 var numero = randomNumberInRange(1, maxNumber);
 if (!bombsArray.includes(numero)) {
   bombsArray.push(numero);
  }
}
  return bombsArray;
}
// CONTO DA 1 A 100-16
// VERIFICO CHE NUMERO SIA COMPRESO TRA 0 E 100
// VERIFICO CHE NON SIA UN NUMERO ASSOCIATO AD UNA BOMBA
function game(bombsArray, safeArray, maxNumber) {
  while (safeArray.length < maxNumber - 16 ) {
    var numeroUtente = parseInt(prompt("Scrivi un numero compreso tra 1 e 100"));
  if (!isNaN(numeroUtente) && 1 <= numeroUtente && numeroUtente <= 100 && !safeArray.includes(numeroUtente)) {

    if (!bombsArray.includes(numeroUtente)) {
      safeArray.push(numeroUtente);
    }
    else {
      return safeArray.length;
    }
  }
}
  return safeArray.length;
}

// NUMERO RANDOM
function randomNumberInRange(min, maxNumber){
  if (isNaN(min) || isNaN(maxNumber) ) {
    console.log("questi non sono numeri");
  }
  else {
    return Math.floor(Math.random() * (maxNumber - min + 1)) + min ;
  }
}
