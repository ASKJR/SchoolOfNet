const http     = require('http');
const handle   = require('./handle');
const name     = require('./name');
const events   = require('events');
const emitter  = new events.EventEmitter();
const pokemon  = require('pokemon');


//events
emitter.on('say123',say);

function say() {
	console.log('Im saying...')
};

emitter.emit('say123');

let server = http.createServer(handle);

name.a();
name.b();
name.c();

// console.log(pokemon.all());

server.listen(3000, () => { console.log("I'm running at port 3000.") });

