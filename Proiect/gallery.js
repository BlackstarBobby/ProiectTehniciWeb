var images = [
  'img/Gallery1/1.jpg',
  'img/Gallery1/2.jpg',
  'img/Gallery1/3.jpg',
  'img/Gallery1/4.jpg',
  'img/Gallery1/5.jpg',
  'img/Gallery1/6.jpg',
  'img/Gallery1/7.jpg',
  'img/Gallery1/8.jpg'
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
function gallerySlider(direction) {
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

  var div = document.createElement('div');
  div.className = 'slider-reset ' + direction;
  setImage(div, imageIndex);

  var imagePad = document.getElementById('image-pad');
  imagePad.appendChild(div);

  // avem timeout pt ca se modifica clasa prea repede nu apuca sa isi dea browser seaman ca vrem 2 lucuri direrite
  setTimeout(function(){
    div.className = 'slider-reset center';
  }, 10);

  setTimeout(function() {
    setImage(imagePad, imageIndex);
    imagePad.removeChild(div);
  }, 210);
}

setImage(document.getElementById('image-pad'), imageIndex);


document.getElementById('left-pad').onclick = function() {
  gallerySlider('left');
};

document.getElementById('right-pad').onclick = function() {
  gallerySlider('right');
};
