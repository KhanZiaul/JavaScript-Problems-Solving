// Write a JavaScript program to find the most frequent element in an array and return it. 

function mostFrequentElement(givenArray) {
    let itemsMap = {};
    let maximumValue = 0;
    let maximumCount = 0;

    for (let item of givenArray) {
        if (itemsMap[item] == null) {
            itemsMap[item] = 1;
        } else {
            itemsMap[item]++;
        }

        if (itemsMap[item] > maximumCount) {
            maximumValue = item;
            maximumCount = itemsMap[item];
        }
    }

    return maximumValue;

}

const result = mostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5])

console.log(result)