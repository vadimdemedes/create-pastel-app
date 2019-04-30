import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'ink';

/// Hello world command
const Hello = ({name}) => <Text>Hello, {name}</Text>;

Hello.propTypes = {
	/// Name of the person to greet
	name: PropTypes.string.isRequired
};

export default Hello;
