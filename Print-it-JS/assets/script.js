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

slides.forEach((slide) => {
    const image = slide.image;
    console.log(image);
});




//ajout des "dots"

let Dots = document.querySelector(".dots")
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div")
	dot.classList.add("dot", "dot_" + i)  //ajout de la class dot et une classe unique avec i
	if (i === 0) {
		dot.classList.add("dot_selected")
	}
	Dots.appendChild(dot)

}


let changementCarrousel = 0
let bannerImg = document.querySelector(".banner-img")
let bannerTxt = document.getElementById("banner-txt")

//Event listener vérification du "clic" gauche à la souris

let arrowLeft = document.querySelector("#banner .arrow_left");
arrowLeft.addEventListener("click", (event) => {
	if (event.button === 0){

		changementCarrousel --

		if (changementCarrousel < 0 ){
			changementCarrousel = slides.length - 1
		}

		//Changement de texte et d'image
		bannerImg.src = `./assets/images/slideshow/${slides[changementCarrousel].image}`
		bannerTxt.innerHTML = slides[changementCarrousel].tagLine       // Attention pas sécurisé

		//Selectionne tout les dot et enlève la classe 'dot_selected'
		document.querySelectorAll(".dot").forEach(dot => {
			dot.classList.remove("dot_selected");})
		
		//ajoute la classe dot_selected au dot correspondant
		let dotChangementCarrousel = document.querySelector(`.dot_${changementCarrousel}`)
		dotChangementCarrousel.classList.add("dot_selected")
	}
});

let arrowRight = document.querySelector("#banner .arrow_right");
arrowRight.addEventListener("click", (event) => {
	if (event.button === 0){

		changementCarrousel ++

		if (changementCarrousel > slides.length - 1 ){
			changementCarrousel = 0
		}

		//Changement de texte et d'image
		bannerImg.src = `./assets/images/slideshow/${slides[changementCarrousel].image}`
		bannerTxt.innerHTML = slides[changementCarrousel].tagLine       // Attention pas sécurisé

		//Selectionne tout les dot et enlève la classe 'dot_selected'
		document.querySelectorAll(".dot").forEach(dot => {
			dot.classList.remove("dot_selected");})
		
		//ajoute la classe dot_selected au dot correspondant
		let dotChangementCarrousel = document.querySelector(`.dot_${changementCarrousel}`)
		dotChangementCarrousel.classList.add("dot_selected")
	}
});