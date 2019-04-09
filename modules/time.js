var os = require('os');

function conversionOfSecondsToMinutes() {
	var timeInSeconds = (os.uptime() % 60);
	var timeInMinutes = Math.floor(os.uptime() / 60);

	return timeInMinutes + 'min ' + timeInSeconds + 's '; 
};

function conversionOfSecondsToHours() {
	var timeInSeconds = (os.uptime() % 60);
	var timeInMinutes = Math.floor((os.uptime() % 3600) / 60);
	var timeInHours = Math.floor(os.uptime() / 3600);

	return timeInHours + 'h ' + timeInMinutes + 'min ' + timeInSeconds + 's '; 
};

exports.print = conversionOfSecondsToHours;
