'use strict';

// module of controlling application
var app = require('app');
// module of creating window 
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

// global declaration of main window for not GCing
var mainWindow = null;

// end if all window are closed
app.on('window-all-closed', function(){
	if (process.platform != 'darwin'){
		app.quit();
	}
});

// execute after completing init of electron
app.on('ready', function(){
	// start browser (Chromium)
	mainWindow = new BrowserWindow({width: 800, height: 600});
	mainWindow.loadURL('file://' + __dirname + '/index.html');
	
	mainWindow.on('closed', function(){
		mainWindow = null;
	});
});
