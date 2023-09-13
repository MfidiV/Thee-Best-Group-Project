    <a class="next" onclick="plusSlides(1)">❯</a>
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }

            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
             }

            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";

      let slideIndex = 1;
      showSlides(slideIndex);
      
        }
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      function currentSlide(n) {
        alert(showSlides(slideIndex = n));
      }
      
        // Function to change the color of a clicked menu item
        function changeColor(item) {
          
            // Define the color you want for clicked items (e.g., blue)
            var color = "#0000FF"; // Blue

            // Reset the color of all menu items to the default color
            var menuItems = document.querySelectorAll('.menu-item');
            for (var i = 0; i < menuItems.length; i++) {
                menuItems[i].style.color = "";
            }

            // Change the color of the clicked item
            item.style.color = color;
        }
  
    
    function addNumbers(num1,num2){
      const sum = num1 + num2;
      return sum;
    }
    