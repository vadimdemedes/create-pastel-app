import React from 'react';
import {Text} from 'ink';
import zod from 'zod';

export const options = zod.object({
	name: zod.string().default('Stranger').describe('Name'),
});

export default function App({options}) {
	return (
		<Text>
			Hello, <Text color="green">{options.name}</Text>
		</Text>
	);
}
