let img = document.getElementById('kuvat');
let images = ['/images/matte1.jpg','/images/matte.jpg','/images/maisema1.jpg']
let time = 6000
let lastIndex = 0;

var element = document.querySelector('.fade-out-element'); 
         function fadeOut(el) {
            var opacity = 1; // Initial opacity
            var interval = setInterval(function() {
               if (opacity > 0) {
                  opacity -= 0.1;
                  el.style.opacity = opacity;
               } else {
                  clearInterval(interval); // Stop the interval when opacity reaches 0
               }
            }, 50);
         }
         fadeOut(element);

         function fadeIn(el) {
            var opacity = 0; // Initial opacity
            var interval = setInterval(function() {
               if (opacity < 1) {
                  opacity += 0.1;
                  el.style.opacity = opacity;
               } else {
                  clearInterval(interval); // Stop the interval when opacity reaches 0
               }
            }, 100);
         }

         fadeIn(element)

function changeImg(){
    
    let randomIndex = Math.floor(Math.random() * images.length);
    while (lastIndex == randomIndex){
        randomIndex = Math.floor(Math.random() * images.length);
    }
    lastIndex = randomIndex;

    kuva = images[randomIndex];

    
    img.src = kuva;
    img.style.opacity=0;
    fadeIn(img);
}
window.onload = changeImg;

setInterval(changeImg
,time);

