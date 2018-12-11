let numbers = [1,2,3,4,5,6]

console.log(numbers);

//map without arrow function
// numbers = numbers.map(function(value){
//     return value * 10;
// });

//map with arrow function
numbers = numbers.map(value => value * 10)
console.log(numbers);

//making a arrow function to sum 2 numbers
let sumFunction = (n1, n2) => n1 + n2;

console.log(sumFunction(45,100));

//arrow function 
let getRaisedSalary = (currentSalary, raise) => {
    let sal = currentSalary - 55.00;
    return sal + (sal * raise);
}

console.log(getRaisedSalary(1000,0.05));







