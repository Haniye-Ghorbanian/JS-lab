function isOpposite(s1,s2){
  
    let result = '';
    
   
    for (let i = 0; i < s1.length; i++) {
      
      let charCode = s1[i].charCodeAt();
      
      if ( charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(charCode - 32);
      }
      
      else {
        result += String.fromCharCode(charCode + 32);
      }
      
    }
    


    if (s2 === "" || s1 === "") {
      return false;
    }
    
    else if (s2 === result) {
      return true;
    }
    
    else {
      return false;
    }
    
  }