let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to:"));

// Above code to create a pop up box that asks the user for a number and input will be stored in the variable 'answer'
// parseInt is used to convert the string input from the prompt into an integer

// Now to loop from 1 to the number the user inputted
for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");    
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

