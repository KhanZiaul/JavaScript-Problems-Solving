// Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondSmallestElement(givenArray) {
    
    for (i = 0; i < givenArray.length; i++) {
        if (givenArray[i] >= 0) {
            sum= sum + givenArray[i]
        }
    }
    return sum;
}

const result = secondSmallestElement([2, 5, 10, 3, 7])

console.log(result)