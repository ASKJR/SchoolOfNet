let restParameter = (p1,p2, ...otherStuff) => {
    console.log(otherStuff);
}

restParameter(1,2,3,4,5,6,7,8,9,10);

let array1 = [',', 'como', 'vai', 'você?'];
let array2 = ['ola', ...array1];

let fullName = 'Alberto Kato';
let arrFullName = [...fullName];

console.log(array2);
console.log(arrFullName);

