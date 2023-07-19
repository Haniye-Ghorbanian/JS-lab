let ask = confirm('So you wanted to know if there is any free seats in Bobs bus?');

if (ask == true) {

    // This part runs if user clicks ok in confirm box
    // Prompt the user for the bus capacity, number of people on the bus, and number of people waiting for the bus
    // In each prompt if cancel is clicked or no value is entered, the else statement will run which is: Dont fool me around 🤨 

    let on = prompt('Now tell me how many people are on the bus');
    if (on !== null && on !== '' && on >= 0 ) {

    
        
        let wait = prompt('And how many people are waiting for the bus?');

        if (wait !== null && wait !== '' && wait !== 0 && wait > 0) {

            
            
            let cap = prompt('Ok, tell me the capacity of the bus');

            if (cap !== null && cap !== '' && cap !== 0  && cap > 0) {

                // Convert the input strings to numbers
                let On = parseInt(on);
                let Wait = parseInt(wait);
                let Cap = parseInt(cap);

                // solution formula
                let result = On + Wait - Cap;



                if ((result > 0) && (Cap === On)) {

                    // If there is no seats for people waiting
                    console.log('There is no free seats for you 😞 ');





                } else if (result > 0 && Cap > On) {

                    // If a part of the people waiting can seat and a part of them have to Wait
                    let CanSeat = Cap - On;
                    let HaveToWait = Wait - CanSeat;
                    console.log('There are enough free seats for only' + ' ' + CanSeat + ' ' + 'of you 😃. But the rest' + ' ' + HaveToWait + ' ' + 'of you have to wait more 😞');




                } else if (result < 0) {

                    // If everyone can seat and also there will be extra free seats or seat

                    // Calculates existing free seats in the bus
                    let FreeSeats = Cap - On;
                    // Calculates extra free seats left in the bus
                    let ExtraFreeSeats = Cap - (On + Wait);
                    console.log('The bus has' + ' ' + FreeSeats + ' ' + 'free seats, so all of you can get on the bus and also there will be extra' + ' ' + ExtraFreeSeats + ' ' + ' extra seats. Enjoy your trip! 😉');



                } else if (result == 0) {

                    // If everyone can seat but there won't be any extra
                    console.log('The bus has free space for all of you 😄 but there will not be any extra free seats 🙄')

                } else if (Cap < On) {

                    // If cap number is greater than the on number this message will appear
                    console.log('Bus capacity cant be greater than the number of people on it');
                }

                
                

            } else if (cap == 0) {

                // If 0 is entered in cap prompt box
                console.log('If you knew the bus has no free seats then why are you asking ? 😂');

            } else {

                // If cancel in third prompt (cap) is clicked or clicking ok without entering a value
                console.log('Dont fool me around 🤨');

            }

        } else if (wait == 0) {

            // If 0 is entered in wait prompt box
            console.log('So why do you want to know how many people can get on the bus if no one is waiting 😂');

        } else {

            // If cancel in second (Wait) prompt is clicked or clicking ok without entering a value
            console.log('Dont fool me around 🤨');

        }
    } else {

        // If cancel in first (on) prompt is clicked or clicking ok without entering a value
        console.log('Dont fool me around 🤨');

    }
} else {

    // If user clicks on cancel in confirm box
    console.log('What are you doing here then?🤨');

}






