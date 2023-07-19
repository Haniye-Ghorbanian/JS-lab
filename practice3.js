// solution for square and recktangle

let height = parseInt(prompt('Enter the height'));
let width = parseInt(prompt('Enter the width'));

let area = width*height;
let peri = 2 * ( width + height );


if ( width == height ) {
    console.log(area);
} else {
    console.log(peri);
}

