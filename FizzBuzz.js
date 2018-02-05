// Question: FizzBuzz if num divisible by both 3 and 5. Fizz if num divisible by 3. Buzz if num is divisible by 5.
for ( let i=1; i < 20; i++) {
    if (i %5 === 0 && i %3 === 0){
        console.log("FizzBuzz");
    }
    else if (i %3 === 0){
        console.log("Fizz");
    }
    else if (i %5 === 0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
