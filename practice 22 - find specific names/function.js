
let userNames = prompt("Give me the list of names");
let userChar = prompt("Find names start with:")

let char = userChar;
let answer = findSpecificNames(userNames);
document.body.innerHTML = answer; 



function findSpecificNames() {

    

   let names = userNames.split(" ");
    let newArr = [];

    for (let i = 0; i < names.length; i++) {

        let specificName = names[i];

        if (char == specificName[0]) {

            newArr.push(names[i]);
        }
    }

    return newArr;

}


