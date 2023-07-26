// Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondSmallestElement(givenArray) {

    if (!Array.isArray(givenArray) || givenArray.length === 0 || givenArray.length < 2) {
        return ("The input must be a non-empty array and length must be greater than two")
    }

    givenArray.sort((a, b) => a - b);

    let secondSmallestElementInArray = [givenArray[0]];
    for (let i = 1; i < givenArray.length; i++) {
        if (givenArray[i] !== givenArray[i - 1]) {
            secondSmallestElementInArray.push(givenArray[i]);
        }
    }

    return secondSmallestElementInArray[1];
}

const result = secondSmallestElement([2, -5, 10, -3, 7])

console.log(result)