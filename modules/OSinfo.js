var os = require('os');
var colors = require('colors');
var timeToHours = require('./modules/time.js');

function getOSinfo() {
	var type = os.type();
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var userInfo = os.userInfo();

	if(type === 'Darwin') {
	    type = 'OSX';
	} else if(type === 'Windows_NT') {
	    type = 'Windows';
	}

	console.log(colors.bold.magenta('System:'),colors.underline (type));
	console.log(colors.bold.red('Release:'), colors.underline(release));
	console.log(colors.bold.blue('CPU model:'), colors.underline(cpu));
	console.log(colors.bold.green('Uptime:'), colors.underline(timeToHours.print()));
	console.log(colors.bold.yellow('User name:'), colors.underline(userInfo.username));
	console.log(colors.bold.cyan('Home dir:'), colors.underline(userInfo.homedir));		
};

exports.print = getOSinfo;