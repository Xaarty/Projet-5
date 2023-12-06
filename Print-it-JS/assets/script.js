
//Event listener vérification du "clic" gauche à la souris

let arrowLeft = document.querySelector("#banner .arrow_left");

arrowLeft.addEventListener("click", (event) => {
	if (event.button === 0){
		console.log("clic gauche fleche gauche")
	}
});

let arrowRight = document.querySelector("#banner .arrow_right");

arrowRight.addEventListener("click", (event) => {
	if (event.button === 0){
		console.log("clic gauche fleche droite")
	}
});

