var os = require('os');
var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch(instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case '/sayhello':
				process.stdout.write('Hello!\n');
				break;
			case '/getosinfo':
				OSinfo.print();
				break;
			case 'process.env': 
				console.log(process.env);
				break;
			case 'process.versions': 
				console.log(process.versions);
				break;
			default: 
				process.stdout.write('Wrong instruction!\n');
		}	
	} 
});