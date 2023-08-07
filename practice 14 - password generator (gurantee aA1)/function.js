function passwordGenerator(length) {

    // length: the length of the password you want to be generated
    let password = '';

    for (i = 0; i < length; i++) {

        let randomCharCode = Math.floor(Math.random() * 123);

        if (randomCharCode >= 48 && randomCharCode <= 57) {
            password += String.fromCharCode(randomCharCode);
        }

        else if (randomCharCode >= 65 && randomCharCode <= 90) {
            password += String.fromCharCode(randomCharCode);
        }

        else if (randomCharCode >= 97 && randomCharCode <= 122) {
            password += String.fromCharCode(randomCharCode);
        }

        else {
            return passwordGenerator(length);
        }
    }

    return checkPassword(password);

}



// gurantee the password has at least one number, one lowercase letter and one uppercase letter

function checkPassword(password) {

    let hasLowerCase = false;

    let hasUpperCase = false;

    let hasNumber = false;
  
    for (let i = 0; i < password.length; i++) {

      let charCode = password[i].charCodeAt();
  
      if (charCode >= 48 && charCode <= 57) {

        hasNumber = true;

      } else if (charCode >= 65 && charCode <= 90) {

        hasUpperCase = true;

      } else if (charCode >= 97 && charCode <= 122) {

        hasLowerCase = true;

      }
    }
  


    if (hasLowerCase && hasUpperCase && hasNumber) {

      return password;

    } else {

      return passwordGenerator(password.length);

    }
  }