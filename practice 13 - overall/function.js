function overall () {
    debugger
    let ov = Math.floor(Math.random()*101);

    if (ov <= 100 && ov >= 90) {
        document.body.style.backgroundColor = 'green';
        document.body.innerHTML = "<h1>Nice Job</h1>";
    }

    else if (ov <= 89 && ov >= 60) {
        document.body.style.backgroundColor = 'yellow';
        document.body.innerHTML = "<h1>Not Bad</h1>";
    }

    else {
        document.body.style.backgroundColor = 'red';
        document.body.innerHTML = "<h1>Failed</h1>";
    }
}