//api Intl

let date = new Date();
console.log(date);

let dateBr = new Intl.DateTimeFormat('pt-BR').format(date);
console.log(dateBr);

let dateBrFull = new Intl.DateTimeFormat('pt-BR', {month: 'long', day: 'numeric', year: 'numeric'}).format(date);

console.log(dateBrFull);

console.log(new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2, currency: 'BRL', style: 'currency'}).format(2000));



