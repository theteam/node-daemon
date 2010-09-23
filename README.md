# Node daemon

Node daemon is a simple way to start, stop and restart your node based application without having to manage external scripts.

## Usage

Require the module and use the parse function (or daemon.start(), daemon.stop() and daemon.restart() functions directly).  This captures the process id and will allow the application to progress if there is no process id but will exit if there is one.  When stopping, the pid that has been saved will be killed using the process object.

<pre>
	var daemon = require('daemon');
	daemon.parse(process.argv[2]);
</pre>

