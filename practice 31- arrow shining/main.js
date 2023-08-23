let arrowUp = document.querySelector('.arrowUp');
let arrowDown = document.querySelector('.arrowDown');
let arrowRight = document.querySelector('.arrowRight');
let arrowLeft = document.querySelector('.arrowLeft');

// relate to manipulation solution
let ArrowUp = "arrowUp";
let ArrowDown = "arrowDown";
let ArrowRight = "arrowRight";
let ArrowLeft = "arrowLeft";

let pressedArr = ['something'];
let re = '"'
// 

function handleKey(e) {


    if (e && e.code === "ArrowUp") {

        // why manipulation doesn't work?

        // pressedArr.splice(0, 1, ArrowUp);
        // pressedArr[0].replace(re, '')
        // pressedArr.forEach(arrow => arrow.classList.add('pressed'));

        removePressedClass();
        arrowUp.classList.add('pressed');

    } else if (e && e.code === "ArrowDown") {


        removePressedClass();
        arrowDown.classList.add('pressed');

    } else if (e && e.code === "ArrowLeft") {


        removePressedClass();
        arrowLeft.classList.add('pressed');

    } else if (e && e.code === "ArrowRight") {


        removePressedClass();
        arrowRight.classList.add('pressed');

    }



}

function removePressedClass() {
    arrowUp.classList.remove('pressed');
    arrowDown.classList.remove('pressed');
    arrowLeft.classList.remove('pressed');
    arrowRight.classList.remove('pressed');
}

window.addEventListener('keydown', handleKey)


