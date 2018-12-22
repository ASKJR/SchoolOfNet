const banned = require('banned-passwords');

console.log(banned.all());
//=> ['123456', ...]
 
console.log(banned.contains('123456'));
//=> 'true'
 
console.log(banned.contains('2e8a6*2p7~Lu;_LWs&Ef'));
//=> 'false'