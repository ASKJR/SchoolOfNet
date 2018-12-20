const fs = require('fs');

// fs.writeFile('data.txt','Hello File.',(err) => {
//     if (err) {
//         throw err;
//     }
// })

//reading file
fs.readFile('data.txt',(err,data) => {
    if (err) throw err;
    console.log(data.toString('utf8'));
})

//rading directory
// fs.readdir('.',(err,files) => {
//     if (err) throw err;
//     for(file of files) {
//         console.log(file);
//     }
// })

fs.readdirSync('.')
    .filter((files) => { return files.endsWith('.js') } )
    .forEach((file) => { console.log(file) } );