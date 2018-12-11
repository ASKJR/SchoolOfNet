//default parameters
function fruits(param1, param2 = 'apple') {
    return `my favorite fruits are ${param1} and ${param2}`;
}

console.log(fruits('peach'));
console.log(fruits('peach','banana'));