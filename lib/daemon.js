var fs = require('fs');
var daemon = {};
var util = {};
var pid_file_uri =  process.cwd() + '/.pid';
var pid_file = {};
var pid;

util.write = function(obj){
	fs.writeFileSync(pid_file_uri, JSON.stringify(obj));
};

try{
	pid_file = JSON.parse(fs.readFileSync(pid_file_uri, 'utf8'));	
} catch (err) {
	util.write({});
}

daemon.start = function(){
	pid = process.pid;
	
	if (pid_file.pid){
		throw 'Process ' + pid_file.pid + ' already running, kill this first';
	} else {
		pid_file.pid = pid;
		util.write(pid_file);
	}
	
};

daemon.stop = function() {
	
	if(pid_file.pid){
		process.kill(pid_file.pid);
		util.write({});
		process.exit(0);
	}
	
};

daemon.restart = function(){
	daemon.stop();
	daemon.start();
};

module.exports = daemon;