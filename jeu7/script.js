let joueur = document.getElementById("joueur");
/* de la même façon, à compléter */
let ennemi = document.getElementById("ennemi");
let scoreHTML  = document.getElementById("score");




let bouton_gauche = document.getElementById("gauche");
let bouton_droite = document.getElementById("droite");

let positionJoueur = 175;  
let ennemiX = 175
let ennemiY = 10;

let score = 0;


let vitesse = 5;
let objectif = 5;
let jeuActif = true;


let niveauActuel = 1;
let ecranFin = document.getElementById("ecranFin");
let messageFin = document.getElementById("messageFin");



let music = document.getElementById("music");
let bouton_music = document.getElementById("musicBtn");




function changerNiveau(niveau){
    score = 0;
    scoreHTML.innerHTML = score;
    ennemiY = 0;

    if(niveau === 1){
        vitesse = 4;
        objectif = 15;
        joueur.innerHTML = "🪹";
        ennemi.innerHTML = "🥚";
    }

    if(niveau === 2){
        vitesse = 6;
        objectif = 15;
        joueur.innerHTML = "🍚";
        ennemi.innerHTML = "🐟​";
    }

    if(niveau === 3){
        vitesse = 10;
        objectif = 15;
        joueur.innerHTML = "🛶";
        ennemi.innerHTML = "🪂";
    }



	niveauActuel = niveau;
	ecranFin.style.display = "none";
    jeuActif = true;
}



function victoire(){
    jeuActif = false;

    if(niveauActuel === 1){
        messageFin.innerHTML = "🪺 Bravo ! Niveau facile réussi ! 🐣";
    }
    else if(niveauActuel === 2){
        messageFin.innerHTML = "​🍣 Bien joué ! Niveau moyen validé ! 🥢";
    }
    else if(niveauActuel === 3){
        messageFin.innerHTML = "🚣🏻 Incroyable ! Niveau difficile terminé ! 🛟";
    }

    ecranFin.style.display = "block";
}


function defaite(){
    jeuActif = false;
    
	 if(niveauActuel === 1){
        messageFin.innerHTML = "🍳 Perdu... Essaie encore !";
    }
    else if(niveauActuel === 2){
        messageFin.innerHTML = "​🥣 Perdu... Essaie encore ! ";
    }
    else if(niveauActuel === 3){
        messageFin.innerHTML = "🌊 Perdu... Essaie encore !";
    }
	
    ecranFin.style.display = "block";
}















function deplacerJoueurClavier(event) {
    if (event.key === "ArrowRight") {
        deplacerDroite();
    }
	if (event.key === "ArrowLeft") {
        deplacerGauche();
	}
}

function deplacerDroite() {
	if (positionJoueur < 350 ) { 
		positionJoueur += 20;
		joueur.style.left = positionJoueur + "px";
	}
}

function deplacerGauche() {
	if (positionJoueur > 20 ) { 
		positionJoueur -= 20;
		joueur.style.left = positionJoueur + "px";
	}
}


function descendreEnnemi(){
	
	if(!jeuActif) return;
    
	if(ennemiY < 360){
        ennemiY += vitesse;
        ennemi.style.top = ennemiY + "px";
    } else {
        
        if(Math.abs(positionJoueur - ennemiX) < 40){
            score += 1;
            scoreHTML.innerHTML = score;
			
			
        } else {
			score -= 1;
            scoreHTML.innerHTML = score;
	
		}
	
		
	if(score >= objectif){
		victoire();
	}

	if(score <= -5){
		defaite();
	}
		
		
		ennemiX = Math.floor(Math.random() * (400 - 40));
		ennemi.style.left = ennemiX + "px";
	
        ennemiY = 0;
        ennemi.style.top = ennemiY + "px";
	
	
	
    }
}

	
 function rejouer(){
    score = 0;
    ennemiY = 0;
    scoreHTML.innerHTML = score;
    
    ecranFin.style.display = "none";
    jeuActif = true;
}

	

function startMusic(){
    if(music.paused){
        music.play();
    } else {
        music.pause();
    }
}

bouton_music.onclick = startMusic;




document.onkeydown = deplacerJoueurClavier;

bouton_droite.onclick = deplacerDroite;
bouton_gauche.onclick = deplacerGauche;

setInterval(descendreEnnemi, 30);

