function TripleTrouble(first, second, third) {
    let result = "";
    for (let i = 0; i < first.length; i++) {
      result += first[i] + second[i] + third[i];
    }
    return result;
  }