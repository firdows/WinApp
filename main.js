'use strict';
    var app = require('app');
    var menubar = require('menubar')
    var BrowserWindow = require('browser-window');

    var mainWindow = null;

    app.on('window-all-closed', function() {
      if (process.platform != 'darwin') {
        app.quit();
      }
    });

    app.on('ready', function() {
      mainWindow = new BrowserWindow({width: 800, height: 600});
      mainWindow.loadUrl('file://' + __dirname + '/index.html');

      // mainWindow.openDevTools();

      mainWindow.on('closed', function() {
        mainWindow = null;
      });
    });

    var mb = menubar()
    mb.on('ready', function ready () {
      console.log('app is ready')
    })
