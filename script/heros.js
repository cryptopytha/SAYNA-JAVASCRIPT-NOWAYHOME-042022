// zoom
let ami = document.getElementsByClassName('img-fluid');
for (let i = 0; i<ami.length; i++) {
    let image = ami[i];
    image.addEventListener('mouseover', function () {
        image.style.transform ='scale(1.2)'
    });
    image.addEventListener('mouseout', function () {
        image.style.transform ='scale(1)'
    });
}

// slide
window.onload = function() {
    var images = document.querySelectorAll('.slide-img');
    addActive = function(slide) {slide.classList.add('active')};
    removeActive = function(slide) {slide.classList.remove('active')};
    addActive(images[0]);
    setInterval(function (){
        for (var i = 0; i < images.length; i++){
            addActive(images[0]);
            images[i].style.zIndex = 100;
            setTimeout(removeActive, 350, images[i]);
        } 
      }, 4000);
}


    