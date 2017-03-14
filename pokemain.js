let characters = ["bulbizarre", "salamèche", "carapuce", "pikachu", "ramoloss"];

  let plante = document.getElementById('plante');
  let eau = document.getElementById('eau');
  let feu = document.getElementById('feu');
  let psy = document.getElementById('psy');
  let electrik = document.getElementById('electrik');

  function versus(computer) {
    let number = Math.random();
    console.log(number);

    if (number < 0.2) {
      computer = plante;
    }
    if (number >= 0.2 && number < 0.4) {
      computer = eau;
    }
    if (number >= 0.4 && number < 0.6) {
      computer = feu;
    }
    if (number >= 0.6 && number < 0.8) {
      computer = psy;
    }
    if (number >= 0.8 && number < 1) {
      computer = electrik;
    }
  }

  function uplante(computer) {
    if (computer = eau || computer = psy) {
      echo "win";
    }
    if (computer = plante) {
      echo "draw";
    }
    if (computer = electrik || computer = feu) {
      echo "lose";
    }
  }
  console.log("ici");
  console.log("computer");
  console.log("uplante(computer)");

  function ueau() {
    if (feu || psy) {
      win
    }
    if (eau) {
      draw
    }
    if (electrik || plante) {
      lose
    }
  }

  function ufeu() {
    if (plante || electrik) {
      win
    }
    if (feu) {
      draw
    }
    if (eau || psy) {
      lose
    }
  }

  function upsy() {
    if (electrik || feu) {
      win
    }
    if (psy) {
      draw
    }
    if (plante || eau) {
      lose
    }
  }

  function uelectrik() {
    if (eau || plante) {
      win
    }
    if (electrik) {
      draw
    }
    if (psy || feu) {
      lose
    }
  }
