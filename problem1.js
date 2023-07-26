// Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function stringReverse(str) {

    if (typeof str !== "string") {
        return ("The input must be string")
    }

    const givenString = str
    const splitString = givenString.split('')
    const reverseSplitString = [];
    for (i = splitString.length - 1; i >= 0; i--) {
        reverseSplitString.push(splitString[i])
    }
    const joinReverseSplitString = reverseSplitString.join('')
    return joinReverseSplitString;
}

const result = stringReverse('hello world')

console.log(result)