let firstName = 'Alberto',
lastName =  'Kato';

let obj = {
    firstName,
    lastName,
    method(param1,param2){

    }
};

function fun({firstName,lastName})
{
    console.log(firstName, lastName);
}

console.log(obj);
fun(obj);