function randomBackgroundImage () {

let backgroundUrls = [ './images/Amesterdam.jpg', './images/cape-town.jpg', './images/Edinburg.jpg', './images/Rome.jpg', './images/San-Miguel-de-Allende.jpg' ];

let imagesText = ['Amsterdam', 'Cape Town', 'Edinburg', 'Rome', 'San Miguel de Allende'];

let h2 = document.getElementById('title');

let random = Math.floor(Math.random()*backgroundUrls.length);

document.body.setAttribute('style', `background-image: url(${backgroundUrls[random]})`);

h2.textContent = imagesText[random];

}

window.addEventListener('DOMContentLoaded', randomBackgroundImage);