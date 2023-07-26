// Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function sumOfGivenArray(givenArray) {

    if (!Array.isArray(givenArray) || givenArray.length === 0) {
        return ("The input must be a non-empty array")
    }

    let sum = 0;
    for (i = 0; i < givenArray.length; i++) {
        if (givenArray[i] >= 0) {
            sum= sum + givenArray[i]
        }
    }
    return sum;
}

const result = sumOfGivenArray([2, -5, 10, -3, 7])

console.log(result)