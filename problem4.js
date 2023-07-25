// Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbers(givenSortedArray,targetValue) {

    for (i = 0; i < givenSortedArray.length; i++) {
        if (givenSortedArray[i] + givenSortedArray[i+1] === tt) {
            return [i,i+1]
            break;
        }
    }

    return null;

}

const result = findTwoNumbers([1, 3, 6, 8, 11, 15],9)

console.log(result)