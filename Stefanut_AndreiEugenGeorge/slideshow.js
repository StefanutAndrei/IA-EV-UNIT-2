var slideIndex = 0;
showSlides();


function slideshow() {

    var i;
    var x = document.getElementsByClassName("column");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(slideshow, 3000); 
}