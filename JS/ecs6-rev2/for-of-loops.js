let arrayNumbers = [1,2,3,4,5,6]

let obj = {
    first_name : 'Alberto',
    last_name : 'Kato'
};

let arrayObjects = [{first_name : 'Alberto', last_name : 'Kato'},{first_name : 'Vanessa', last_name : 'Silva'}];

//--------array--------
//in
for (let index in arrayNumbers) {
    console.log(index, arrayNumbers[index]);
}

//of
for (let value of arrayNumbers) {
    console.log(value);
}

for (let [index,value] of arrayNumbers.entries()) {
    console.log(index, value);
}

//--------object--------
//in
for (let key in obj) {
    console.log(key, obj[key]);
}

for (let key in arrayObjects) {
    console.log(key, arrayObjects[key].first_name);
}

for (let obj of arrayObjects) {
    console.log(obj.first_name,obj.last_name);
}
