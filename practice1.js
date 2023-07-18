// solution for BMI

let weight = prompt('Enter your weight');
let height = prompt('Enter your height');

let BMI = (weight / (height*height));

if (BMI <= 18.4) {
    console.log('underweight');
} else if (BMI <= 24.9 && BMI > 18.5) {
    console.log('Normal');
} else if (25.0 <= BMI && BMI < 39.9) {
    console.log('Overweight');
} else {
    console.log('Obese')
}
