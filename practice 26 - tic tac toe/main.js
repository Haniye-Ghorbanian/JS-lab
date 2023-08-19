

// Getting Doms

const cells = document.querySelectorAll('.cell');
const board = document.querySelector('.board');
let initialTieScore = document.querySelector('.tieScoreFigure');
let initialOScore = document.querySelector('.oScoreFigure');
let initialXScore = document.querySelector('.xScoreFigure');
const winComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
    [0, 3, 6],
    [0, 4, 8],
    [2, 4, 6]
]





// Turn Flag

let oTurn = true;

startPlayWithFriend();

// Game start function 

function startPlayWithFriend() {

    resetBoard();
    board.classList.add('o');
    oTurn = true;

}


// The game will restart with this function

function resetBoard() {
    for (const cell of cells) {
        cell.classList.remove('o', 'x');
        cell.addEventListener('click', showSign);
    }

}






// check for whose turn it is with this function

function showSign(e) {

    if (oTurn === true) {
        board.classList.remove('o');
        board.classList.add('x');
        this.classList.add('o');
        this.removeEventListener('click', showSign);
        oTurn = false;
    }

    else {
        board.classList.remove('x');
        board.classList.add('o');
        this.classList.add('x');
        this.removeEventListener('click', showSign);
        oTurn = true;
    }

    checkWin();
}




// Check for the win and tie

function checkWin() {
    const oCells = Array.from(cells).filter(cell => cell.classList.contains('o'));
    const xCells = Array.from(cells).filter(cell => cell.classList.contains('x'));

    const oIndexes = oCells.map(cell => Array.from(cells).indexOf(cell));
    const xIndexes = xCells.map(cell => Array.from(cells).indexOf(cell));

    let isTie = false;
    if (oCells.length + xCells.length === cells.length) {
        isTie = true;
    }

    let oWin = false;
    let xWin = false;

    for (const combination of winComb) {
        oWin = combination.every(index => oIndexes.includes(index));
        xWin = combination.every(index => xIndexes.includes(index));

        if (oWin || xWin) {
            break;
        }
    }

    // The board will get cleared after every set

    if (oWin || xWin || (oCells.length + xCells.length === cells.length)) {
        cells.forEach(cell => cell.removeEventListener('click', showSign));
        setTimeout(resetBoard, 1500); // Clear the board after 1.5 second
    }




    let tieScore = 0;
    let oScore = 0;
    let xScore = 0;

    if (oWin) {
        oScore += +initialOScore.textContent + 1;
        initialOScore.textContent = String(oScore);
    } else if (xWin) {
        xScore += +initialXScore.textContent + 1;
        initialXScore.textContent = String(xScore);
    } else if (oCells.length + xCells.length === cells.length) {
        tieScore += +initialTieScore.textContent + 1;
        initialTieScore.textContent = String(tieScore);
    }


}











// Playing with a robot

startPlayWithCom();

function startPlayWithCom() {

}

