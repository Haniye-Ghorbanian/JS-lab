function setImage(img) {

    const frameImage = document.getElementById('frameImage');

    const frameText = document.getElementById('frameText');

    const thumbnails = document.querySelectorAll('.thumbnails img');




    const src = img.getAttribute('src');

    frameImage.setAttribute('src', src);



    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].removeAttribute('style');
        img.setAttribute('style', 'border: 3px solid red;');
    }

    


    if (src === './images/Girl-with-a-Pearl-Earring.jpg') {

      frameText.textContent = 'Girl with a Pearl Earring';

    } else if (src === './images/lastsupper.webp') {

      frameText.textContent = 'The Last Supper';

    } else if (src === './images/The-Starry-Night.jpg') {

      frameText.textContent = 'The Starry Night';

    } else if (src === './images/The_Great_Wave_off_Kanagawa.jpg') {

      frameText.textContent = 'The Great Wave Off Kanagawa';

    } else {

      frameText.textContent = 'Default Text';
    }
}