// Solution for Bob's bus

let ask = confirm('So you wanted to know if there is any free seat in Bobs bus?');

if (ask == true) {

    // This part runs if user clicks ok in confirm box
    // Prompt the user for the bus capacity, number of people on the bus, and number of people waiting for the bus
    // In each prompt if cancel is clicked or no value is entered, the else statement will run which is: Dont fool me around 🤨 

    let on = prompt('Now tell me how many people are on the bus');
    if (on !== null && on !== '') {

        let wait = prompt('And how many people are waiting for the bus?');
        if (wait !== null && wait !== '' && wait !== 0) {

            let cap = prompt('Ok, tell me the capacity of the bus');
            if (cap !== null && cap !== '' && cap !== 0) {

                // Convert the input strings to numbers
                let On = parseInt(on);
                let Waite = parseInt(wait);
                let Cap = parseInt(cap);

                let result = On + Waite - Cap;

                if ((result > 0) && (Cap === On)) {

                    // If there is no seats for people waiting
                    console.log('There is no free seats for you 😞 ');

                } else if (result > 0) {

                    // If a part of the people waiting can seat and a part of them have to waite
                    let CanSeat = Cap - On;
                    let HaveToWaite = Waite - CanSeat;
                    console.log('There are enough free seats for only' + ' ' + CanSeat + ' ' + 'of you 😃. But the rest' + ' ' + HaveToWaite + ' ' + 'of you have to waite more 😞');

                } else if (result < 0) {

                    // If everyone can seat and also there will be extra free seats or seat

                    // Calculates existing free seats in the bus
                    let FreeSeats = Cap - On;
                    // Calculates extra free seats left in the bus
                    let ExtraFreeSeats = Cap - (On + Waite);
                    console.log('The bus has' + ' ' + FreeSeats + ' ' + 'free seats, so all of you can get on the bus and also there will be extra' + ' ' + ExtraFreeSeats + ' ' + ' extra seats. Enjoy your trip! 😉');

                } else if (result == 0) {

                    // If everyone can seat but there won't be any extra
                    console.log('The bus has free space for all of you 😄 but there will not be any extra free seats 🙄')
                }

            } else {

                // If user clicks on cancel in confirm box
                console.log('Dont fool me around 🤨');
            }

        } else {

            // If cancel in first prompt (On) is clicked or clicking ok without entering a value
            console.log('Dont fool me around 🤨');

        }
    } else {

        // If cancel in second (Waite) prompt is clicked or clicking ok without entering a value
        console.log('Dont fool me around 🤨');

    }
} else {

    // If cancel in third (Cap) prompt is clicked or clicking ok without entering a value
    console.log('What are you doing here then?🤨');

}







