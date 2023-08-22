lowercaseCountryNames();


function lowercaseCountryNames() {

    let countries = ["iran", "australia", "brazil", "USA", "geramny", "finland", "china", "norway", "England", "italy", "georgia", "UAE", "argentina"];
    const lowercaseCountries = countries.map(country => country.toLowerCase());

    recognizeFirstLetter(lowercaseCountries);

    return lowercaseCountries;
}




function recognizeFirstLetter(lowercaseCountries) {

    let newArr = [];

    for (let i = 0; i < lowercaseCountries.length; i++) {

        newArr.push(lowercaseCountries[i][0].toLowerCase().charCodeAt());

    }

    let firstLetterCodes = [...new Set(newArr)].sort((a, b) => a - b);
    let firstLetters = Array.from(String.fromCharCode(...firstLetterCodes)).map(code => code.toUpperCase());
    createList(firstLetters, lowercaseCountries);
    return firstLetters;
}





function createList(firstLetters, lowercaseCountries) {

    let specificCountries = [];
    
    for (let i = 0; i < firstLetters.length; i++) {
        specificCountries.push(...lowercaseCountries.filter(country => country[0] === firstLetters[i].toLowerCase()));
        let ul = document.createElement('ul');
        document.body.appendChild(ul);
        ul.textContent = `${firstLetters[i]}(${specificCountries.length})`;


        for (let n = 0; n < specificCountries.length; n++) {
            let li = document.createElement('li');
            li.textContent = specificCountries[n];
            ul.appendChild(li);

        }

        specificCountries = [];
    }
}


