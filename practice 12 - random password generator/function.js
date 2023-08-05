

// First Solution

function passwordGenerator(length) {

    // length: the length of the password you want to be generated
    let password = '';
    
    for (i = 0; i < length; i++) {
        
        let randomCharCode = Math.floor(Math.random()*123);

    if (randomCharCode>= 48 && randomCharCode<=57) {
        password += String.fromCharCode(randomCharCode);
    }
    
    else if (randomCharCode >= 65 && randomCharCode<= 90) {
        password += String.fromCharCode(randomCharCode);
    }
    
    else if (randomCharCode >= 97 && randomCharCode<= 122) {
        password += String.fromCharCode(randomCharCode);
    }
    
    else {
        return passwordGenerator(length);
    }
}

return password;

}




// Second Solution

function PasswordGenerator(length) {

    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let password = '';
  
    for (let i = 0; i < length; i++) {

      const randomIndex= Math.floor(Math.random() * characters.length);

      const RandomChar = characters.charAt(randomIndex);

      password += RandomChar;

    }
  
    return password;
    
  }
  
 




