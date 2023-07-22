

// solution with if

function sum(input) {
    
    let number = Number(input);

    if (number === 0) {
        return 0;
    }

    let total = number + sum(prompt("Enter a number (Enter 0 to finish):"));

    return total;
}




// solution with while loop


// function sum(input) {

//     let sum = 0;

//     while (true) {

//         let number = Number(input);

//         sum += number;

//         if (number === 0) {
//             return sum;
//         }

        

//         input = prompt("Enter a number (or 0 to finish):");
//     }
// }



