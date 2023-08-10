

// dom nodes
let addBtn      = document.querySelector(".add");
let minusBtn    = document.querySelector(".minus");
let addWhenOdd  = document.querySelector(".btn-warning");
let h2          = document.querySelector("h2")

// function
function addCounter() {
    let count = +h2.textContent;
    h2.textContent = ++count;

    
}

function minusCounter() {
    let count = +h2.textContent;
    h2.textContent = --count;
}


function addWhenOddCounter() {
    let count = +h2.textContent;

    if (count % 2 !== 0) {
        h2.textContent = count + 0;
    }

    else {
        h2.textContent = ++count;
    }
}

// events
addBtn.addEventListener("click", addCounter);
minusBtn.addEventListener("click", minusCounter);
addWhenOdd.addEventListener("click", addWhenOddCounter);
