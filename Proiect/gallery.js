function initGallery(rootElement, images) {
    var imageIndex = 0;

    // preload images
    for (var i = 0; i < images.length; i++) {
        var imageURL = images[i];
        var image = document.createElement('img');
        image.src = imageURL;

        image.onload = function () {
            console.log('preloaded image');
        }
    }

    var imagePad = rootElement.getElementsByClassName('image-pad')[0];

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

        imagePad.appendChild(div);

        // avem timeout pt ca se modifica clasa prea repede nu apuca sa isi dea browser seaman ca vrem 2 lucuri direrite
        setTimeout(function () {
            div.className = 'slider-reset center';
        }, 10);

        setTimeout(function () {
            setImage(imagePad, imageIndex);
            imagePad.removeChild(div);
        }, 210);
    }

    setImage(imagePad, imageIndex);


    rootElement.getElementsByClassName('left-pad')[0].onclick = function () {
        gallerySlider('left');
    };

    rootElement.getElementsByClassName('right-pad')[0].onclick = function () {
        gallerySlider('right');
    };
}

window.onload = function () {
    initGallery(
        document.getElementById('gallery1'),
        [
            'img/Gallery1/1.jpg',
            'img/Gallery1/2.jpg',
            'img/Gallery1/3.jpg',
            'img/Gallery1/4.jpg',
            'img/Gallery1/5.jpg',
            'img/Gallery1/6.jpg',
            'img/Gallery1/7.jpg',
            'img/Gallery1/8.jpg'
        ]
    );

    initGallery(
        document.getElementById('gallery11'),
        [
            'img/Gallery2/1.jpg',
            'img/Gallery2/2.jpg',
            'img/Gallery2/3.jpg',
            'img/Gallery2/4.jpg',
            'img/Gallery2/5.jpg',
            'img/Gallery2/6.jpg',
            'img/Gallery2/7.jpg',
            'img/Gallery2/8.jpg'
        ]
    );

    initGallery(
        document.getElementById('gallery2'),
        [
            'img/arch1/1.jpg',
            'img/arch1/2.jpg',
            'img/arch1/3.jpg',
            'img/arch1/4.jpg',
            'img/arch1/5.jpg',
            'img/arch1/6.jpg',
            'img/arch1/7.jpg',
            'img/arch1/8.jpg'
        ]
    );

    initGallery(
        document.getElementById('gallery22'),
        [
            'img/arch2/1.jpg',
            'img/arch2/2.jpg',
            'img/arch2/3.jpg',
            'img/arch2/4.jpg',
            'img/arch2/5.jpg',
            'img/arch2/6.jpg',
            'img/arch2/7.jpg',
            'img/arch2/8.jpg'
        ]
    );

    initGallery(
        document.getElementById('gallery3'),
        [
            'img/prod1/1.jpg',
            'img/prod1/2.jpg',
            'img/prod1/3.jpg',
            'img/prod1/4.jpg',
            'img/prod1/5.jpg',
            'img/prod1/6.jpg',
            'img/prod1/7.jpg'
        ]
    );

    initGallery(
        document.getElementById('gallery33'),
        [
            'img/prod2/1.jpg',
            'img/prod2/2.jpg',
            'img/prod2/3.jpg',
            'img/prod2/4.jpg',
            'img/prod2/5.jpg',
            'img/prod2/6.jpg'
        ]
    );


};