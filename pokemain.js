let characters = ["bulbizarre", "salamèche", "carapuce", "pikachu", "ramoloss"];

let score = localStorage.getItem('score');
let partie = localStorage.getItem('partie');
let best = localStorage.getItem('best');
let issue = "";


if(partie == null || partie == 1) {
  localStorage.setItem('partie', 1);
  localStorage.setItem('score', 0);
}

if(best == null) {
  localStorage.setItem('best', 0);
}

function scorecount(issue) {
  let score = localStorage.getItem('score');
  let partie = localStorage.getItem('partie');
  do {
    if(issue == "win") {
      score++;
      partie++;
      localStorage.setItem('partie', partie);
      localStorage.setItem('score', score);
      break;
    }
    else if(issue == "") {
      partie++;
      localStorage.setItem('partie', partie);
      localStorage.setItem('score', score);
      break;
    }
  } while(partie < 6);
  if (partie == 6) {
    setTimeout(function(){ alert("Fin de la partie! Score: "+score); }, 1000);
    if(score > best) {
      localStorage.setItem('best', score);
    }
    else if (score < best) {
      localStorage.setItem('best', best);
    }
    localStorage.setItem('partie', 1);
    localStorage.setItem('score', 0);
  }
}


function bulbizarre() {

  let random = characters[Math.floor((Math.random() * 5))];

  if (random == "carapuce" || random == "ramoloss") {
    console.log("win!");

    document.getElementById('resultimg').innerHTML = '<img src="gallery/bulbizarre.png" class="char"><img src="gallery/chen.png" class="chen"><img src="gallery/'+random+'.png" class="char">';

    document.getElementById('resulttxt').innerHTML = '<h1>Félicitations!</h1><p>Bulbizarre a battu '+random+'</p><a href="">Rejouer!</a>';
    window.location="#resultbox";
    scorecount("win");
  }

  else if (random == "bulbizarre") {
    console.log("draw");

    document.getElementById('resultimg').innerHTML = '<img src="gallery/bulbizarre.png" class="char"><img src="gallery/chen.png" class="chen"><img src="gallery/'+random+'.png" class="char">';

    document.getElementById('resulttxt').innerHTML = '<h1>Tiens donc!</h1><p>Bulbizarre a rencontré un autre '+random+'</p><a href="">Rejouer!</a>';
    window.location="#resultbox";
    scorecount("");
  }

  else {
    console.log("lose!");

    document.getElementById('resultimg').innerHTML = '<img src="gallery/bulbizarre.png" class="char"><img src="gallery/chen.png" class="chen"><img src="gallery/'+random+'.png" class="char">';

    document.getElementById('resulttxt').innerHTML = '<h1>Coup critique!</h1><p>Bulbizarre a été battu par '+random+'</p><a href="">Rejouer!</a>';
    window.location="#resultbox";
    scorecount("");
  }

}

function salamèche() {
  let random = characters[Math.floor((Math.random() * 5))];

  if (random == "pikachu" || random == "bulbizarre") {
    console.log("win!");
    document.getElementById('resultimg').innerHTML = '<img src="gallery/salamèche.png" class="char"><img src="gallery/chen.png" class="chen"><img src="gallery/'+random+'.png" class="char">';

    document.getElementById('resulttxt').innerHTML = '<h1>Félicitations!</h1><p>Salamèche a battu '+random+'</p><a href="">Rejouer!</a>';
    window.location="#resultbox";
    scorecount("win");
  }
  else if (random == "salamèche") {
    console.log("draw");

    document.getElementById('resultimg').innerHTML = '<img src="gallery/salamèche.png" class="char"><img src="gallery/chen.png" class="chen"><img src="gallery/'+random+'.png" class="char">';

    document.getElementById('resulttxt').innerHTML = '<h1>Tiens donc!</h1><p>Salamèche a rencontré un autre '+random+'</p><a href="">Rejouer!</a>';
    window.location="#resultbox";
    scorecount("");
  }
  else {
    console.log("lose!");
    document.getElementById('resultimg').innerHTML = '<img src="gallery/salamèche.png" class="char"><img src="gallery/chen.png" class="chen"><img src="gallery/'+random+'.png" class="char">';

    document.getElementById('resulttxt').innerHTML = '<h1>Coup critique!</h1><p>Salamèche a été battu par '+random+'</p><a href="">Rejouer!</a>';
    window.location="#resultbox";
    scorecount("");
  }
}

function carapuce() {
  let random = characters[Math.floor((Math.random() * 5))];

  if (random == "salamèche" || random == "ramoloss") {
    console.log("win!");
    document.getElementById('resultimg').innerHTML = '<img src="gallery/carapuce.png" class="char"><img src="gallery/chen.png" class="chen"><img src="gallery/'+random+'.png" class="char">';

    document.getElementById('resulttxt').innerHTML = '<h1>Félicitations!</h1><p>Carapuce a battu '+random+'</p><a href="">Rejouer!</a>';
    window.location="#resultbox";
    scorecount("win");
  }
  else if (random == "carapuce") {
    console.log("draw");
    document.getElementById('resultimg').innerHTML = '<img src="gallery/carapuce.png" class="char"><img src="gallery/chen.png" class="chen"><img src="gallery/'+random+'.png" class="char">';

    document.getElementById('resulttxt').innerHTML = '<h1>Tiens donc!</h1><p>Carapuce a rencontré un autre '+random+'</p><a href="">Rejouer!</a>';
    window.location="#resultbox";
    scorecount("");
  }
  else {
    console.log("lose!");
    document.getElementById('resultimg').innerHTML = '<img src="gallery/carapuce.png" class="char"><img src="gallery/chen.png" class="chen"><img src="gallery/'+random+'.png" class="char">';

    document.getElementById('resulttxt').innerHTML = '<h1>Coup critique!</h1><p>Carapuce a été battu par '+random+'</p><a href="">Rejouer!</a>';
    window.location="#resultbox";
    scorecount("");
  }
}

function pikachu() {
  let random = characters[Math.floor((Math.random() * 5))];

  if (random == "carapuce" || random == "bulbizarre") {
    console.log("win!");
    document.getElementById('resultimg').innerHTML = '<img src="gallery/pikachu.png" class="char"><img src="gallery/chen.png" class="chen"><img src="gallery/'+random+'.png" class="char">';

    document.getElementById('resulttxt').innerHTML = '<h1>Félicitations!</h1><p>Pikachu a battu '+random+'</p><a href="">Rejouer!</a>';
    window.location="#resultbox";
    scorecount("win");
  }
  else if (random == "pikachu") {
    console.log("draw");
    document.getElementById('resultimg').innerHTML = '<img src="gallery/pikachu.png" class="char"><img src="gallery/chen.png" class="chen"><img src="gallery/'+random+'.png" class="char">';

    document.getElementById('resulttxt').innerHTML = '<h1>Tiens donc!</h1><p>Pikachu a rencontré un autre '+random+'</p><a href="">Rejouer!</a>';
    window.location="#resultbox";
    scorecount("");
  }
  else {
    console.log("lose!");
    document.getElementById('resultimg').innerHTML = '<img src="gallery/pikachu.png" class="char"><img src="gallery/chen.png" class="chen"><img src="gallery/'+random+'.png" class="char">';

    document.getElementById('resulttxt').innerHTML = '<h1>Coup critique!</h1><p>Pikachu a été battu par '+random+'</p><a href="">Rejouer!</a>';
    window.location="#resultbox";
    scorecount("");
  }
}

function ramoloss() {
  let random = characters[Math.floor((Math.random() * 5))];

  if (random == "salamèche" || random == "pikachu") {
    console.log("win!");
    document.getElementById('resultimg').innerHTML = '<img src="gallery/ramoloss.png" class="char"><img src="gallery/chen.png" class="chen"><img src="gallery/'+random+'.png" class="char">';

    document.getElementById('resulttxt').innerHTML = '<h1>Félicitations!</h1><p>Ramoloss a battu '+random+'</p><a href="">Rejouer!</a>';
    window.location="#resultbox";
    scorecount("win");
  }
  else if (random == "ramoloss") {
    console.log("draw");
    document.getElementById('resultimg').innerHTML = '<img src="gallery/ramoloss.png" class="char"><img src="gallery/chen.png" class="chen"><img src="gallery/'+random+'.png" class="char">';

    document.getElementById('resulttxt').innerHTML = '<h1>Tiens donc!</h1><p>Ramoloss a rencontré un autre '+random+'</p><a href="">Rejouer!</a>';
    window.location="#resultbox";
    scorecount("");
  }
  else {
    console.log("lose!");
    document.getElementById('resultimg').innerHTML = '<img src="gallery/ramoloss.png" class="char"><img src="gallery/chen.png" class="chen"><img src="gallery/'+random+'.png" class="char">';

    document.getElementById('resulttxt').innerHTML = '<h1>Coup critique!</h1><p>Ramoloss a été battu par '+random+'</p><a href="">Rejouer!</a>';
    window.location="#resultbox";
    scorecount("");
  }
}
