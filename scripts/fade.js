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

         function fadeIN(el) {
            var opacity = 0; // Initial opacity
            var interval = setInterval(function() {
               if (opacity < 1) {
                  opacity += 0.1;
                  el.style.opacity = opacity;
               } else {
                  clearInterval(interval); // Stop the interval when opacity reaches 0
               }
            }, 50);
         }

         fadeIN(element)