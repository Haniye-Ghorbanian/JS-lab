function diet (input) {


    let countR = 0;
    let countG = 0;
    let countY = 0;

    for (let i = 0; i < input.length; i++) {

        if(input[i] === 'R') {
            countR++;
        }

        else if (input[i] === 'G') {
            countG++;
        }

        else {
            countY++;
        }

    }

    if (countG == 5) {
        return 'nosh';
    }

    else if (countR >= 2 && countY >= 2) {
        return 'nakhor abdollah';
    }

    else if (countR >= 1 && countR <= 2 && countG >= 3 && countR <= 4 ) {
        return 'nosh';
    }

    else if (countR >= 2 && countR <= 5) {
        return 'nakhor abdollah';
    }

    else {
        return 'nosh';
    }

    

}