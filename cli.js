#!/usr/bin/env node
'use strict';
const meow = require('meow');
const createPastelApp = require('.');

meow(`
	Usage
		$ mkdir my-cli
		$ cd my-cli
	  $ create-pastel-app
`);

createPastelApp().catch(error => {
	console.error(error.stack);
	process.exit(1);
});
