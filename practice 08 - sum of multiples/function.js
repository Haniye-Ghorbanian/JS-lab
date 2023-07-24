// There are 2 solutions included for this problem


// Solution 1:

function sumMul(n, m) {

    if (m < n) {
      return "INVALID";
    }



    let sum = 0;

    for (let i = n; i < m; i += n) {
      sum += i;
    }

    return sum;
    
  }





// Solution 2:


// function sumMul(n, m) {

//     if (m < n) {
//       return "INVALID";
//     }

//     let sum = 0;

//     for (let i = 1; i < m / n; i++) {
//       sum += i * n;
//     }

//     return sum;
//   }
  
  