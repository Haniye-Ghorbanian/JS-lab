// solution for BMI

let weight = prompt('Enter your weight in kg');
let height = prompt('Enter your height in cm');


let heightInmeter = height * 0.01; 
let BMI = (weight / (heightInmeter*heightInmeter));

if (BMI <= 18.4) {
    console.log('underweight');
} else if (BMI <= 24.9 && BMI > 18.5) {
    console.log('Normal');
} else if (  BMI < 39.9  &&  BMI >= 25.0) {
    console.log('Overweight');
} else {
    console.log('Obese')
}
