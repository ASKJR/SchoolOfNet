const querystring = require('querystring');
let handle = (request, response) => {
	
	response.writeHead(200, {
		'Content-Type' : 'text/html'
    });
    
    let body = '';

    request.on('data', (data) => {
        body += data.toString();
    });

    request.on('end', () => {
        console.log(querystring.parse(body));
    });
	
	let html = `<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>Hello</title>
	</head>
	<body>
		<h1> Hello World, Node.js</h1>
    </body>
    
	</html>`;

	response.write(html);
	response.end();
}

module.exports = handle;

