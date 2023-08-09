let littleBoxes = document.getElementsByClassName("little-box");

for (let i = 0; i < littleBoxes.length; i++) {

    littleBoxes[i].onclick = function getRandomColor() {

        let color = randomColor();

        this.style.backgroundColor = color;

    }
}

function randomColor() {

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let rgb = `rgb(${red}, ${green}, ${blue})`;

    return rgb;
}


