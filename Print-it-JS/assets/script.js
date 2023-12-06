const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]

console.log(slides)

let Dots = document.querySelector(".dots")
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div")
	dot.classList.add("dot")
	if (i === 0) {
		dot.classList.add("dot_selected")
	}
	Dots.appendChild(dot)

}


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