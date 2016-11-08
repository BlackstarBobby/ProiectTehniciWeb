/**
 * Created by bobby on 08-11-2016.
 */
var images = [
    'img/arch1/1.jpg',
    'img/arch1/2.jpg',
    'img/arch1/3.jpg',
    'img/arch1/4.jpg',
    'img/arch1/5.jpg',
    'img/arch1/6.jpg',
    'img/arch1/7.jpg',
    'img/arch1/8.jpg'
];
var imageIndex = 0;

// preload images
for (var i = 0; i < images.length; i++) {
    var imageURL = images[i];
    var image = document.createElement('img');
    image.src = imageURL;

    image.onload = function() {
        console.log('preloaded image');
    }
}

function setImage(element, index) {
    element.style.backgroundImage = 'url(' + images[index] + ')';
}
function gallerySlider21(direction) {
    if (direction === 'right') {
        imageIndex++;
    } else {
        imageIndex++;
    }
    if (imageIndex < 0) {
        imageIndex = images.length
    }
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }

    var div = document.createElement('div21');
    div.className = 'slider-reset21 ' + direction;
    setImage(div, imageIndex);

    var imagePad = document.getElementById('image-pad21');
    imagePad.appendChild(div);

    // avem timeout pt ca se modifica clasa prea repede nu apuca sa isi dea browser seaman ca vrem 2 lucuri direrite
    setTimeout(function(){
        div.className = 'slider-reset21 center';
    }, 10);

    setTimeout(function() {
        setImage(imagePad, imageIndex);
        imagePad.removeChild(div);
    }, 210);
}

setImage(document.getElementById('image-pad21'), imageIndex);


document.getElementById('left-pad21').onclick = function() {
    gallerySlider21('left');
};

document.getElementById('right-pad21').onclick = function() {
    gallerySlider21('right');
};
