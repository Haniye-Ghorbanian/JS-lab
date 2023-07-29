function WhoAteTheCookie(input) {
    
    let name = "";

    // Check if the input is Not a Number
    if (isNaN(input)) {
      name = "Zach";
    } else if (typeof input === "number") {
      name = "Monica";
    } else {
      name = "the dog";
    }
    return "Who ate the last cookie? It was " + name + "!";
  }