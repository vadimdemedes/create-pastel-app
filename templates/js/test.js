import React from 'react';
import chalk from 'chalk';
import test from 'ava';
import {render} from 'ink-testing-library';
import App from './source/app.js';

test('greet user', t => {
	const {lastFrame} = render(<App name="Jane" />);

	t.is(lastFrame(), `Hello, ${chalk.green('Jane')}`);
});
